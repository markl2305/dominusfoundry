'use client'
/* 2026-10-14, quality pass (D-page-briefs): "Your business. Your context. Your
   authority." as three tiles carrying the live paragraphs (whole sentences, in
   order), the introduction film, and a handoff card to hiresabina.ai. */
import type { CSSProperties } from 'react'
import { PageHero, ClosingCta, Tile } from '@/components/site/primitives'
import { Sec } from './qp-parts'
import '@/components/site/pages/pillars.css'
import '@/app/styles/pages/qp-hero.css'
import '@/app/styles/pages/sabina.css'
export default function SabinaContent(){return <div className="qp pg-sabina-qp">
<PageHero crest eyebrow="Sabina · your company's own AI" title={<>Your company’s AI.<br/><em>Built around your business.</em></>} lead="Missed calls, buried follow-ups, repeated explanations, and work that keeps returning to the owner. Sabina is your company’s own AI, working with your systems, knowledge, people, and authority. Foundry configures, deploys, and operates Sabina for your company. Your team teaches her the business and decides what she may handle." actions={<a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work</a>}/>
<Sec id="meet" name="Meet Sabina" eyebrow="Meet Sabina" title={<>Your business.<br/>Your context.<br/><em>Your authority.</em></>}>
<div className="grid g3 three">
<Tile i={0} k="01" t="Your business."><p className="tile-p">The introduction shows the idea behind Sabina: a familiar presence backed by your company’s knowledge. The responsibilities she can take on depend on the systems, access, and workflows agreed for your business.</p></Tile>
<Tile i={1} k="02" t="Your context."><p className="tile-p">Useful company knowledge carries forward. What your team teaches Sabina, the corrections it makes, and the context gathered through authorized work can inform the next conversation, handoff, and responsibility.</p></Tile>
<Tile i={2} k="03" t="Your authority."><p className="tile-p">Her understanding can grow; her authority continues to come from the permissions your company grants.</p></Tile>
</div>
</Sec>
<section className="section band pg-sabina" id="film" data-name="The introduction" aria-label="Meet Sabina, the introduction film"><div className="wrap split sabina-split">
<figure className="film reveal"><div className="film-frame"><video controls playsInline preload="none" poster="/video/sabina-emblem.webp" aria-label="Sabina introduction"><source src="/video/sabina-introduction.mp4?v=20261002-company-ai-4f0be009" type="video/mp4"/><track kind="captions" src="/video/sabina-introduction.vtt?v=20261002-company-ai-4f0be009" srcLang="en" label="English"/><a href="/video/sabina-introduction.mp4?v=20261002-company-ai-4f0be009">Download the introduction</a></video></div><figcaption>Meet Sabina · 1 min 14 sec · Sound on. The film illustrates the approach; payment examples and pattern discovery are not proof of available workflows. Confirm supported responsibilities in your proposal.</figcaption></figure>
<div className="card handoff reveal" style={{ '--i': 1 } as CSSProperties}>
<p className="tile-k">hiresabina.ai</p>
<p className="handoff-t">Start with a short operational assessment of your business.</p>
<div className="actions"><a className="btn btn-solid" href="https://hiresabina.ai/evaluate">See Sabina work <span className="arr" aria-hidden="true">→</span></a></div>
</div>
</div></section>
<ClosingCta title={<>Decide what she can <em>do for you.</em></>} lead="Learn how we think about permissions, oversight, and the record of completed work." actions={<a className="btn btn-solid" href="/governance">Explore governance →</a>}/>
</div>}
