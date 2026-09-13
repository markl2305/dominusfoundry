import {createHmac,createHash} from 'node:crypto';
import {isIP} from 'node:net';
const UPSTREAM='https://forge.dominusfoundry.com/visitor-chat/v1/visitor-chat/';
const ORIGINS=new Set(['https://hiresabina.ai','https://www.hiresabina.ai','https://buildwithforge.app','https://www.buildwithforge.app','https://dominusfoundry.com','https://www.dominusfoundry.com']);
const headers={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
const fail=(status,error)=>Response.json({ok:false,error},{status,headers});
export const canonical=(timestamp,ip,origin,path,body)=>['v1',timestamp,ip,origin,'POST',path,createHash('sha256').update(body).digest('hex')].join('\n');
export function createRelay({fetchImpl=fetch,environment=process.env,now=Date.now}={}){
 return async function POST(request,context){
  const {action}=await context.params;if(!['start','message'].includes(action))return fail(404,'not_found');
  const origin=request.headers.get('origin');
  if(!ORIGINS.has(origin)||new URL(request.url).origin!==origin)return fail(403,'origin_not_allowed');
  if(request.headers.get('content-type')?.split(';')[0].trim()!=='application/json')return fail(415,'json_required');
  const ip=request.headers.get('x-vercel-forwarded-for')?.trim(),secret=environment.SABINA_VISITOR_RELAY_SECRET;
  if(environment.VERCEL!=='1'||!ip||!isIP(ip)||typeof secret!=='string'||secret.length<32)return fail(503,'sabina_unavailable');
  const reader=request.body?.getReader();if(!reader)return fail(400,'invalid_request');
  let bytes=0,chunks=[];
  try{while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.length;if(bytes>4096){await reader.cancel();return fail(413,'body_too_large');}chunks.push(value);}}catch{return fail(400,'invalid_request');}
  let data;try{data=JSON.parse(Buffer.concat(chunks).toString());}catch{return fail(400,'invalid_request');}
  if(!data||typeof data!=='object'||Array.isArray(data))return fail(400,'invalid_request');
  if(action==='start'&&Object.keys(data).length)return fail(400,'invalid_request');
  if(action==='message'&&(Object.keys(data).sort().join(',')!=='conversationId,message'||typeof data.message!=='string'||!data.message.trim()||data.message.length>800||typeof data.conversationId!=='string'||data.conversationId.length>200))return fail(400,'invalid_request');
  const body=JSON.stringify(data),timestamp=String(Math.floor(now()/1000)),path='/v1/visitor-chat/'+action;
  const signature=createHmac('sha256',secret).update(canonical(timestamp,ip,origin,path,body)).digest('hex');
  try{
   const response=await fetchImpl(UPSTREAM+action,{method:'POST',headers:{'Content-Type':'application/json',Origin:origin,'X-Sabina-Visitor-IP':ip,'X-Sabina-Visitor-Time':timestamp,'X-Sabina-Visitor-Signature':signature},body,redirect:'manual',cache:'no-store',signal:AbortSignal.timeout(28000)});
   if(!response.ok)return fail([400,403,404,409,413,429,503].includes(response.status)?response.status:502,'sabina_unavailable');
   const result=await response.json();
   if(action==='start'){if(typeof result.conversationId!=='string'||result.conversationId.length>200)return fail(502,'sabina_unavailable');return Response.json({conversationId:result.conversationId},{status:201,headers});}
   if(typeof result.reply!=='string'||!result.reply.trim()||result.reply.length>12000)return fail(502,'sabina_unavailable');
   return Response.json({reply:result.reply,turnsRemaining:result.turnsRemaining},{headers});
  }catch{return fail(502,'sabina_unavailable');}
 };
}
