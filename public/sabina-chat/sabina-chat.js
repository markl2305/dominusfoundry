/* Public visitor support. Text only; no microphone, interview grant or outside AI provider. */
(() => {
  const source = document.currentScript;
  const assetBase = new URL('./', source.src);
  let dispose = null;
  function unmount(){dispose?.();dispose=null;}
  function mount(){
  if (document.querySelector('sabina-visitor-chat')) return;
  const endpoint = '/api/visitor-chat';
  if(/^\/(interview|evaluate)(\/|$)/.test(location.pathname))return;
  const host = document.createElement('sabina-visitor-chat');
  // Sol r1 S2: hidden from the first frame. The launcher may appear only once its stylesheet has loaded and a
  // collision check on real (finite) geometry has passed; until then nothing of it can paint over the page.
  host.style.visibility='hidden';host.classList.add('over-content');
  const root = host.attachShadow({mode:'open'});
  root.innerHTML = `<link rel="stylesheet" href="${new URL('sabina-chat.css?v=7',assetBase)}">
    <button class="launcher" aria-label="Ask Sabina — help and support" aria-haspopup="dialog"><span class="label">Ask Sabina</span><span class="mark-shell" aria-hidden="true"><img class="mark" alt="" width="44" height="44" decoding="async"></span></button>
    <dialog class="panel" aria-labelledby="chat-title"><header class="header"><span class="orb-mark" aria-hidden="true"><img class="orb" alt="" width="42" height="42" loading="lazy"><span class="orb-core"></span></span><div><h2 id="chat-title">Ask Sabina</h2><p>Help, support, and questions</p></div><button class="close" aria-label="Close chat">×</button></header>
    <div class="conversation" role="log" aria-live="polite" aria-relevant="additions"><div class="welcome"><h3>What would you like to know?</h3><p>Ask about Sabina, how she works, or finding your way around.</p><div class="starters"><button>What can Sabina help with?</button><button>How does hiring Sabina work?</button><button>I need help using the site</button></div></div><div class="messages"></div><p class="progress" role="status" hidden>Sabina is responding…</p><div class="error" role="alert" hidden><p></p><button type="button">Try again</button><button type="button" class="restart" hidden>Start a new chat</button><a href="mailto:mark@dominusfoundry.com">Contact the team</a></div></div>
    <form class="compose"><label class="inputLabel" for="message">Your message</label><textarea id="message" rows="2" maxlength="800" placeholder="Ask Sabina…"></textarea><button class="send" disabled>Send</button></form><p class="note">Please keep passwords and private account details out of chat.</p></dialog>`;
  const $ = selector => root.querySelector(selector);
  // Apple polish 2026-11-02 (family rule 5): the launcher is the flat Sabina mark at 44px (sabina-mark.svg, the
  // committed withsabina.ai relief mark, copied unchanged). The panel keeps its orb; it loads lazily, when the panel opens.
  $('.launcher .mark').src = new URL('sabina-mark.svg',assetBase);
  root.querySelectorAll('.orb-mark img').forEach(img => { img.src = new URL('orb-launcher.png',assetBase); });
  const dialog=$('dialog'), input=$('textarea'), launcher=$('.launcher'), conversation=$('.conversation');
  let ended=false, busy=false, session=null, failed=null, controller=null;
  function controls(){ $('.send').disabled=ended||busy||!input.value.trim(); root.querySelectorAll('.starters button,.error button').forEach(b=>b.disabled=busy); }
  function close(){dialog.close();}
  // Sol r1 S1: closing used to focus the launcher unconditionally. If the page behind the panel was scrolled while it
  // was open, the launcher may now be hidden (hero CTA in view, or content under it) and focus fell to BODY. Its state
  // is re-evaluated now (checks pause while the panel is open); focus returns to it only if it is available, otherwise,
  // without scrolling, to the hero CTA when fully in view, else to the last control fully in view.
  function returnFocus(){
    const blocked=host.classList.contains('cta-visible')||!styled||blockedAt(LOOK);
    if(blocked){hidden=true;clearSince=0;host.classList.add('over-content');}
    if(!blocked&&!hidden){launcher.focus();if(root.activeElement===launcher){schedule();return}}
    const vh=document.documentElement.clientHeight;
    if(heroCta){const q=heroCta.getBoundingClientRect();if(q.width&&q.height&&q.top>=0&&q.bottom<=vh){heroCta.focus({preventScroll:true});if(document.activeElement===heroCta){schedule();return}}}
    handOffFocus();schedule();}
  launcher.addEventListener('click',()=>{dialog.showModal();input.focus();});
  $('.close').addEventListener('click',close);
  dialog.addEventListener('close',returnFocus);
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
  // Never cover the hero's call to action: the launcher steps aside while it is on screen.
  const heroCta=document.querySelector('main [data-hero] .actions .btn, main .hero .hero-actions .btn');
  let ctaWatch=null;
  // Apple polish 2026-11-02 (family rule 5), ported from the Sol-reviewed forge-web launcher so the family behaves
  // the same. A focused launcher is never simply hidden: focus moves first (see handOffFocus).
  if(heroCta&&'IntersectionObserver' in window){ctaWatch=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting&&focused())handOffFocus();host.classList.toggle('cta-visible',e.isIntersecting);}});ctaWatch.observe(heroCta);}
  // At every width the page gets room at the bottom (16px inset + 44px launcher + 16px), so the end of the page,
  // footer controls included, is never under the launcher.
  const clearance=document.createElement('style');
  clearance.textContent='body{padding-bottom:calc(env(safe-area-inset-bottom) + 76px)}';
  document.head.append(clearance);
  // Anywhere else the launcher steps aside while it would sit over a control, text or media. The decision is taken
  // from its FIXED footprint (resolved right/bottom offsets and layout size), never its rendered rect, so it cannot
  // flap at content boundaries. It hides at once when the footprint meets content, and returns only after the
  // footprint plus a 6px margin has stayed clear for 400ms.
  const INTERACTIVE='a[href],button,input,select,textarea,summary,label,[role="button"],[role="link"],[tabindex]:not([tabindex="-1"])';
  const MEDIA='img,video,canvas:not(.embers),svg,picture,iframe';
  function contentAt(x,y){
    const under=document.elementsFromPoint(x,y).find(e=>e!==host&&!host.contains(e));
    if(!under||under===document.documentElement||under===document.body)return false;
    if(under.closest(INTERACTIVE)||under.closest(MEDIA))return true;
    for(const n of under.childNodes){if(n.nodeType!==3||!n.data.trim())continue;const r=document.createRange();r.selectNodeContents(n);
      for(const b of r.getClientRects())if(x>=b.left-4&&x<=b.right+4&&y>=b.top-4&&y<=b.bottom+4)return true;}
    return false;
  }
  function footprint(pad){const cs=getComputedStyle(launcher),w=launcher.offsetWidth,h=launcher.offsetHeight;
    const vw=document.documentElement.clientWidth,vh=document.documentElement.clientHeight;
    const left=vw-parseFloat(cs.right)-w,top=vh-parseFloat(cs.bottom)-h;
    // Until the launcher's stylesheet has loaded its offsets read 'auto': there is no footprint yet.
    if(!Number.isFinite(left)||!Number.isFinite(top))return null;return {left:left-pad,top:top-pad,width:w+2*pad,height:h+2*pad};}
  // Sol r1 S2: never over content in any frame. It hides (instantly, see the CSS) when content comes within LOOK px of
  // its footprint, so it is gone before content reaches it, and returns only when a wider CLEAR margin has stayed
  // clear for 400ms. No geometry (stylesheet not loaded) counts as blocked, never as clear.
  const LOOK=12, CLEAR=20;
  function blockedAt(pad){const f=footprint(pad);return !f||covers(f)}
  // Sample every 12px across and every 8px down: a short word (an <em>) is wider than 12px and a line of text taller
  // than 8px, so neither can sit between two samples (a coarser grid let a 15px eyebrow line slip between rows).
  function covers(f){if(!f)return false;const xs=[],ys=[];for(let x=f.left;x<f.left+f.width;x+=12)xs.push(x);xs.push(f.left+f.width);
    for(let y=f.top;y<f.top+f.height;y+=8)ys.push(y);ys.push(f.top+f.height);
    for(const y of ys)for(const x of xs){if(contentAt(Math.max(0,Math.min(x,innerWidth-1)),Math.max(0,Math.min(y,innerHeight-1))))return true}return false}
  const focused=()=>!!root.activeElement&&!dialog.open&&root.activeElement===launcher;
  // Before a focused launcher steps aside, focus moves to the last control fully in view above it, in document order,
  // without scrolling: where Shift+Tab from the launcher (last in the document) would have gone.
  function handOffFocus(){const vh=document.documentElement.clientHeight;
    const list=[...document.querySelectorAll(INTERACTIVE)].filter(e=>{if(host.contains(e)||e.closest('[hidden],[inert]'))return false;const q=e.getBoundingClientRect();
      const st=getComputedStyle(e);return q.width>0&&q.height>0&&q.top>=0&&q.bottom<=vh&&st.visibility!=='hidden'&&st.display!=='none'});
    const target=list[list.length-1];if(target){target.focus({preventScroll:true});if(document.activeElement===target)return}
    const main=document.querySelector('main')||document.body;if(!main.hasAttribute('tabindex'))main.setAttribute('tabindex','-1');main.focus({preventScroll:true});}
  let pending=0,hidden=true,clearSince=0,recheck=0,styled=false;
  function check(){pending=0;if(dialog.open||!styled||!launcher.offsetWidth)return;const now=performance.now();
    if(!hidden){if(blockedAt(LOOK)){if(focused())handOffFocus();hidden=true;clearSince=0;host.classList.add('over-content');}return}
    if(blockedAt(CLEAR)){clearSince=0;return}
    if(!clearSince)clearSince=now;
    if(now-clearSince>=400){hidden=false;clearSince=0;host.classList.remove('over-content');}
    else{clearTimeout(recheck);recheck=setTimeout(schedule,420-(now-clearSince));}}
  const schedule=()=>{if(!pending)pending=requestAnimationFrame(check);};
  // Sol r1 S2: on scroll the check runs synchronously in the scroll handler (scroll events fire once per frame, before
  // any animation-frame callback or paint), so the launcher is already hidden in the first frame content reaches it.
  const onScroll=()=>{if(pending){cancelAnimationFrame(pending);pending=0;}check();};
  window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',schedule);
  // content can also move under the launcher without a scroll (scroll reveals, opened disclosures): re-check when it settles
  document.addEventListener('transitionend',schedule,true);document.addEventListener('animationend',schedule,true);document.addEventListener('toggle',schedule,true);
  const settle=setInterval(schedule,1000);
  // the stylesheet decides the launcher's geometry: start checking once it has loaded
  const sheet=root.querySelector('link[rel="stylesheet"]');
  const onStyled=()=>{if(styled)return;styled=true;host.style.visibility='';schedule();};
  if(sheet.sheet)onStyled();else sheet.addEventListener('load',onStyled,{once:true});
  dispose=()=>{abort();window.removeEventListener('pagehide',abort);ctaWatch?.disconnect();window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',schedule);document.removeEventListener('transitionend',schedule,true);document.removeEventListener('animationend',schedule,true);document.removeEventListener('toggle',schedule,true);clearInterval(settle);clearTimeout(recheck);if(pending)cancelAnimationFrame(pending);clearance.remove();host.remove();};
  document.body.append(host);
  }
  window.addEventListener('sabina-visitor-chat:mount',mount);
  window.addEventListener('sabina-visitor-chat:unmount',unmount);
  if(source.dataset.managed!=='true')mount();
})();
