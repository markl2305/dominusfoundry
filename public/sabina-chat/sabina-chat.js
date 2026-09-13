/* Public visitor support. Text only; no microphone, interview grant or outside AI provider. */
(() => {
  const source = document.currentScript;
  const assetBase = new URL('./', source.src);
  let dispose = null;
  function unmount(){dispose?.();dispose=null;}
  function mount(){
  if (document.querySelector('sabina-visitor-chat')) return;
  const endpoint = '/api/visitor-chat';
  if(/^\/(interview|evaluate|talk-to-iris)(\/|$)/.test(location.pathname))return;
  const host = document.createElement('sabina-visitor-chat');
  const root = host.attachShadow({mode:'open'});
  root.innerHTML = `<link rel="stylesheet" href="${new URL('sabina-chat.css?v=3',assetBase)}">
    <button class="launcher" aria-label="Ask Sabina — help and support" aria-haspopup="dialog"><span class="label">Ask Sabina</span><span class="orb-shell" aria-hidden="true"><img class="orb" alt="" width="76" height="76"><span class="orb-core"></span></span></button>
    <dialog class="panel" aria-labelledby="chat-title"><header class="header"><span class="orb-mark" aria-hidden="true"><img class="orb" alt="" width="42" height="42"><span class="orb-core"></span></span><div><h2 id="chat-title">Ask Sabina</h2><p>Help, support, and questions</p></div><button class="close" aria-label="Close chat">×</button></header>
    <div class="conversation" role="log" aria-live="polite" aria-relevant="additions"><div class="welcome"><h3>What would you like to know?</h3><p>Ask about Sabina, how she works, or finding your way around.</p><div class="starters"><button>What can Sabina help with?</button><button>How does hiring Sabina work?</button><button>I need help using the site</button></div></div><div class="messages"></div><p class="progress" role="status" hidden>Sabina is responding…</p><div class="error" role="alert" hidden><p></p><button type="button">Try again</button><button type="button" class="restart" hidden>Start a new chat</button><a href="mailto:mark@dominusfoundry.com">Contact the team</a></div></div>
    <form class="compose"><label class="inputLabel" for="message">Your message</label><textarea id="message" rows="2" maxlength="800" placeholder="Ask Sabina…"></textarea><button class="send" disabled>Send</button></form><p class="note">Please keep passwords and private account details out of chat.</p></dialog>`;
  const $ = selector => root.querySelector(selector);
  root.querySelectorAll('img').forEach(img => { img.src = new URL('orb-launcher.png',assetBase); });
  const dialog=$('dialog'), input=$('textarea'), launcher=$('.launcher'), conversation=$('.conversation');
  let ended=false, busy=false, session=null, failed=null, controller=null;
  function controls(){ $('.send').disabled=ended||busy||!input.value.trim(); root.querySelectorAll('.starters button,.error button').forEach(b=>b.disabled=busy); }
  function close(){dialog.close();launcher.focus();}
  launcher.addEventListener('click',()=>{dialog.showModal();input.focus();});
  $('.close').addEventListener('click',close);
  dialog.addEventListener('close',()=>launcher.focus());
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();});
  input.addEventListener('input',controls);
  function append(role,text){const row=document.createElement('div');row.className=role==='user'?'user':'answer';const label=document.createElement('span');label.className='speaker';label.textContent=role==='user'?'You':'Sabina';const p=document.createElement('p');p.textContent=text;row.append(label,p);$('.messages').append(row);conversation.scrollTop=conversation.scrollHeight;}
  async function send(text,retry=false){
    text=(text||'').trim();if(!text||busy||ended)return;
    busy=true;host.classList.add('responding');failed=null;$('.error').hidden=true;$('.progress').hidden=false;$('.welcome').hidden=true;
    if(!retry){append('user',text);input.value='';}controls();conversation.scrollTop=conversation.scrollHeight;
    controller=new AbortController();const timer=setTimeout(()=>controller.abort(),45000);
    try{
      const post=async(path,body)=>fetch(endpoint+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),credentials:'omit',signal:controller.signal});
      if(!session){const start=await post('/start',{});if(!start.ok){const error=new Error('unavailable');error.status=start.status;throw error;}const data=await start.json();if(typeof data.conversationId!=='string')throw new Error('invalid');session=data.conversationId;}
      const response=await post('/message',{message:text,conversationId:session});
      if(!response.ok){const error=new Error('unavailable');error.status=response.status;throw error;}
      const data=await response.json();if(typeof data.reply!=='string'||!data.reply.trim())throw new Error('invalid');
      append('assistant',data.reply);
    }catch(error){failed=text;ended=error.status===404||error.status===409;$('.restart').hidden=!ended;$('.error button').hidden=ended;$('.error p').textContent=ended?'This chat has ended. Start a new chat to continue.':error.status===429?'Please wait a moment before trying again.':error.name==='AbortError'?'The response took too long. Please try again.':'Sabina couldn’t connect just now. Please try again.';$('.error').hidden=false;}
    finally{clearTimeout(timer);controller=null;busy=false;host.classList.remove('responding');$('.progress').hidden=true;controls();conversation.scrollTop=conversation.scrollHeight;if(dialog.open)input.focus();}
  }
  $('.compose').addEventListener('submit',e=>{e.preventDefault();send(input.value);});
  input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();send(input.value);}});
  root.querySelectorAll('.starters button').forEach(b=>b.addEventListener('click',()=>send(b.textContent)));
  $('.error button').addEventListener('click',()=>send(failed,true));
  $('.restart').addEventListener('click',()=>{ended=false;session=null;failed=null;controls();$('.messages').replaceChildren();$('.error').hidden=true;$('.welcome').hidden=false;input.focus();});
  const abort=()=>controller?.abort();
  window.addEventListener('pagehide',abort);
  dispose=()=>{abort();window.removeEventListener('pagehide',abort);host.remove();};
  document.body.append(host);
  }
  window.addEventListener('sabina-visitor-chat:mount',mount);
  window.addEventListener('sabina-visitor-chat:unmount',unmount);
  if(source.dataset.managed!=='true')mount();
})();
