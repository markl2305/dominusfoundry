'use client';
import Script from 'next/script';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
const signal=(action: string)=>{window.dispatchEvent(new Event('sabina-visitor-chat:'+action));};
let wanted = false;
export default function VisitorChatMount(){
 const pathname=usePathname();
 const suppressed=/^\/(interview|evaluate)(\/|$)/.test(pathname||'');
 useEffect(()=>{wanted=!suppressed;signal(wanted?'mount':'unmount');return()=>{wanted=false;signal('unmount');};},[suppressed]);
 return <Script data-managed="true" id="sabina-visitor-chat" src="/sabina-chat/sabina-chat.js?v=4" strategy="afterInteractive" onReady={()=>{if(wanted)signal('mount');}}/>;
}
