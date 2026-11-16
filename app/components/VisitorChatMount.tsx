'use client';
import Script from 'next/script';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
const signal=(action: string)=>{window.dispatchEvent(new Event('sabina-visitor-chat:'+action));};
// Ask Sabina (2026-11-16): the one shared widget, served by withsabina.ai, so every site runs the same version
// (this site's old copy in public/sabina-chat is no longer loaded). It talks to the relay on withsabina.ai.
const SRC=process.env.NEXT_PUBLIC_SABINA_CHAT_SRC||'https://withsabina.ai/sabina-chat/sabina-chat.js';
let wanted = false;
export default function VisitorChatMount(){
 const pathname=usePathname();
 const suppressed=/^\/(interview|evaluate)(\/|$)/.test(pathname||'');
 useEffect(()=>{wanted=!suppressed;signal(wanted?'mount':'unmount');return()=>{wanted=false;signal('unmount');};},[suppressed]);
 return <Script data-managed="true" id="sabina-visitor-chat" src={SRC} strategy="afterInteractive" onReady={()=>{if(wanted)signal('mount');}}/>;
}
