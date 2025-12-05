import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Button from '@/components/Button'
import VoiceConciergeLeadForm from '@/components/voice-concierge/VoiceConciergeLeadForm'
import { HeroCTAButtons, StickyCTABars } from '@/components/voice-concierge/CampaignInteractions'

export const metadata: Metadata = {
  title: 'Voice Concierge Campaign | Dominus Foundry',
  description:
    "High-intent landing page for Dominus Foundry's Voice Concierge: an AI receptionist and answering service that answers calls, checks calendars, books appointments, and hands off to humans when needed.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

function MinimalHeader() {
  return (
    <header className="border-b border-neutral-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-full.svg"
            alt="Dominus Foundry"
            width={280}
            height={96}
            className="h-16 w-auto md:h-18"
          />
        </Link>
        <div className="flex flex-col items-end gap-1 text-xs md:text-sm">
          <span className="font-semibold uppercase tracking-[0.2em] text-emerald-300/90">AI Receptionist</span>
          <a href="mailto:foundry@dominusfoundry.com" className="text-neutral-400 hover:text-emerald-300">
            Email: foundry@dominusfoundry.com
          </a>
          <meta name="robots" content="noindex,nofollow" />
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-start md:px-6 md:py-20">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-bronze-400/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-100">
            AI Receptionist & Answering Service
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              AI Receptionist & Booking Agent for Appointment-Driven Businesses
            </h1>
            <p className="text-base text-tan-100/90 md:text-lg">
              Never miss a booking call again. We answer every call, qualify the caller, book appointments on your
              calendar, and escalate the ones that matter — without hiring extra staff.
            </p>
            <p className="text-sm text-tan-100/70">
              Designed for appointment-driven businesses: med + wellness clinics, salons, private clubs, and other
              venues that live and die by phone calls.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-tan-100/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bronze-100">
                Trusted by appointment-based businesses and private venues
              </span>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
              <p className="text-sm font-semibold text-white">24/7 coverage</p>
              <p className="text-xs text-tan-100/70">Overflow, after-hours, and holiday answering without voicemails.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
              <p className="text-sm font-semibold text-white">Books directly</p>
              <p className="text-xs text-tan-100/70">Checks your live calendar, enforces rules, and sends confirmations.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
              <p className="text-sm font-semibold text-white">Escalates smartly</p>
              <p className="text-xs text-tan-100/70">VIPs and sensitive calls get summarized and routed to your team.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
              <p className="text-sm font-semibold text-white">Auditable transcripts</p>
              <p className="text-xs text-tan-100/70">Every call is logged so you can refine scripts and QA performance.</p>
            </div>
          </div>
          <HeroCTAButtons />
        </div>

        <div className="rounded-2xl border border-black/10 bg-tan-100/95 p-5 shadow-2xl md:sticky md:top-8 md:p-6">
          <div className="space-y-2 pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">Start here</p>
            <h2 className="text-xl font-semibold text-navy-900 md:text-2xl">Request Your 15-Minute Fit Call</h2>
            <p className="text-sm text-navy-700">
              Share a few details and we’ll walk you through whether Voice Concierge will actually make you money — and
              show you how it plugs into your existing calendar and tools.
            </p>
            <p className="text-xs text-navy-600">
              No spam. No pressure. Just a practical walkthrough of whether AI answering will actually make you money.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white/80 p-4 shadow">
            <Suspense fallback={<div className="text-sm text-neutral-500">Loading form…</div>}>
              <VoiceConciergeLeadForm variant="condensed" id="vc-fit-call-form" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallFlow() {
  const steps = [
    {
      title: 'Greets & Identifies the Caller',
      body: 'Answers in your brand voice with a custom greeting, not a generic call center script.',
    },
    {
      title: 'Understands Why They’re Calling',
      body: 'Detects whether they’re booking, rescheduling, asking a question, or need a human.',
    },
    {
      title: 'Checks Your Live Calendar',
      body: 'Reads your real calendar in real time with your rules, buffers, and blackout dates.',
    },
    {
      title: 'Books the Appointment',
      body: 'Offers times, confirms details, and creates the event in the right calendar with notes.',
    },
    {
      title: 'Sends Confirmations & Reminders',
      body: 'Texts or emails confirmations and reminders so the caller actually shows up.',
    },
    {
      title: 'Transfers When It Should',
      body: 'For edge cases, VIPs, or sensitive situations, it live-transfers to your team or leaves a detailed message—never guessing.',
    },
  ]

  return (
    <section className="bg-tan-50">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-navy-900 md:text-3xl">What Happens When a Call Comes In</h2>
          <p className="text-sm text-navy-700">A transparent call journey you can audit, refine, and trust.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm shadow-black/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700 ring-1 ring-orange-300/60">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-navy-900">{step.title}</h3>
                <p className="text-xs text-navy-700">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-navy-700">
          Every call is logged. You can review transcripts, see bookings, and continuously refine the script as your
          business evolves.
        </p>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-6 md:py-14">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze-200/90">
            Why teams trust Dominus Foundry Voice Concierge
          </p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Built for operations, not gimmicks</h2>
          <p className="text-sm text-tan-100/80">
            Operationally minded, secure, and tuned with humans in the loop so every call feels on-brand.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Operationally minded, not just “AI toys”', icon: '🛠️' },
            { title: 'Fast deployment: live in 7 days', icon: '⚡' },
            { title: 'Secure, auditable call flows', icon: '🔒' },
            { title: 'Human oversight & ongoing tuning', icon: '👥' },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">{item.icon}</span>
              <p className="text-sm font-semibold text-white">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-bronze-200/30 bg-white/5 p-5 text-left shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-100">Client perspective</p>
          <p className="mt-2 text-lg italic text-white">
            “We stopped losing weekend and evening bookings. Voice Concierge sounds like our front desk and books directly
            into our calendar with zero drama.”
          </p>
          <p className="mt-3 text-sm font-semibold text-tan-100/80">— Director of Operations, private event venue</p>
        </div>
      </div>
    </section>
  )
}

function Qualification() {
  const forItems = [
    'You run an appointment-based business where phone calls drive revenue (venues, med spas, salons, clinics, professional practices, home services).',
    'You’re missing calls during busy hours or after hours—and you know those are lost bookings.',
    'Your front desk is overwhelmed with “do you have anything on Friday at 4?” calls.',
    'You want a system you can trust in production, not another AI toy.',
  ]

  const notForItems = [
    'You don’t take bookings by phone.',
    'You’re not willing to give calendar access or basic scripting.',
    'You’re only exploring AI as a low-stakes experiment, not as core infrastructure.',
  ]

  return (
    <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
        <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white">This is built for you if…</h3>
          <ul className="space-y-2 text-sm text-tan-100/80">
            {forItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-bronze-100">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-navy-900/70 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white">It’s probably not a fit if…</h3>
          <ul className="space-y-2 text-sm text-tan-100/80">
            {notForItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-orange-200">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    'Fewer missed calls during peak and after-hours windows.',
    'More calendar slots filled while your team focuses on in-person work.',
    'Reduced front-desk call load—freeing staff for higher-value tasks.',
    'Clean call logs and transcripts for training, QA, and dispute resolution.',
  ]

  return (
    <section className="bg-tan-50">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-navy-900 md:text-3xl">Outcomes You Can Expect</h2>
          <p className="text-sm text-navy-700">
            Conservative, real-world improvements you can feel without risky promises.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {outcomes.map((item) => (
            <div key={item} className="rounded-2xl border border-black/5 bg-white p-4 text-sm text-navy-800 shadow-sm shadow-black/5">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-navy-700">
          In early pilots, we’ve seen businesses recapture hours of missed calls and open up new after-hours booking
          volume—without adding headcount.
        </p>
      </div>
    </section>
  )
}

function Implementation() {
  const steps = [
    {
      title: 'Discovery & Fit Check',
      body: 'We review your call volume, calendars, and use-cases to confirm there’s real ROI to be had.',
    },
    {
      title: 'Script & Integration Design',
      body: 'We write call flows with you, connect calendars and tools, and define escalation rules and boundaries.',
    },
    {
      title: 'Safe Pilot',
      body: 'We start with limited hours or call types, monitor real calls, and refine until you’re comfortable.',
    },
    {
      title: 'Full Rollout & Stewardship',
      body: 'We expand coverage, keep an eye on transcripts, and adapt the concierge as your business changes.',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">How Implementation Works</h2>
          <p className="text-sm text-tan-100/80">Built to be safe, auditable, and fast to value.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.title} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-bronze-100">{`Step ${idx + 1}`}</span>
              </div>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-xs text-tan-100/80">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-tan-100/80">
          You always have a human override. We never deploy major changes to live calls without your approval.
        </p>
      </div>
    </section>
  )
}

function CaseStory() {
  return (
    <section className="bg-tan-50">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold text-navy-900 md:text-3xl">Pilot Story: Private Event Venue</h2>
        <div className="rounded-2xl border border-black/5 bg-white p-6 text-sm text-navy-800 shadow-sm shadow-black/5">
          <p>
            A private event venue was missing calls during events and losing potential bookings to voicemail. We deployed
            Voice Concierge to answer overflow and after-hours calls. The concierge now answers every inbound call, books
            directly into Google Calendar, gathers event details, and hands VIP inquiries to a manager. The owner gets a
            daily summary of calls and bookings instead of hoping the phone was answered.
          </p>
        </div>
      </div>
    </section>
  )
}

function AudioDemos() {
  const demos = [
    {
      title: 'New Booking Call',
      desc: 'A first-time caller wants to book a service. Voice Concierge handles the greeting, offers times, books the slot, and sends a confirmation text.',
      src: '/audio/demo-new-booking.mp3',
      duration: '0:45',
    },
    {
      title: 'Reschedule Request',
      desc: 'Caller needs to move an appointment. The concierge checks conflicts, reschedules, and updates the calendar with notes.',
      src: '/audio/demo-reschedule.mp3',
      duration: '0:38',
    },
    {
      title: 'Edge Case → Transfer to Human',
      desc: 'A VIP asks for a custom request. The concierge gathers context and live-transfers to a manager with a quick summary.',
      src: '/audio/demo-transfer.mp3',
      duration: '0:52',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Hear Voice Concierge in Action</h2>
          <p className="text-sm text-tan-100/80">Short scenarios to hear how it greets, books, and hands off.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {demos.map((demo) => (
            <div key={demo.title} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
              <h3 className="text-sm font-semibold text-white">{demo.title}</h3>
              <p className="text-xs text-tan-100/80">{demo.desc}</p>
              <p className="text-xs text-tan-100/70">Duration: {demo.duration}</p>
              <audio controls className="mt-2 w-full">
                <source src={demo.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Will it sound like a robot?',
      a: 'We use natural voices, brand-tuned scripts, and review real transcripts. You can listen to demos and guide tone and phrasing.',
    },
    {
      q: 'What if it double-books or misses conflicts?',
      a: 'We check your calendar with buffers and blackout rules. We can start in assist mode to validate before full booking autonomy.',
    },
    {
      q: 'What happens when callers get upset or confused?',
      a: 'Escalation rules and live-transfer paths are built in. Edge cases can be routed to your team with concise summaries.',
    },
    {
      q: 'How much does this cost?',
      a: 'Most clients invest between $800–$2,500 per month plus a one-time setup/integration fee, depending on call volume and complexity. We’ll walk through the economics on a consult before anyone commits.',
    },
    {
      q: 'How long until it’s live?',
      a: 'Most pilots go live in a few weeks once calendars and scripts are ready.',
    },
  ]

  return (
    <section className="bg-tan-50">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-navy-900 md:text-3xl">Frequently Asked</h2>
          <p className="text-sm text-navy-700">Quick answers to the biggest objections.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm shadow-black/5">
              <h3 className="text-sm font-semibold text-navy-900">{faq.q}</h3>
              <p className="text-sm text-navy-800">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-12 text-center md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          If a missed or badly handled call costs you more than a month of Voice Concierge, you&apos;re already paying
          for it—just without the system.
        </h2>
        <Button href="#vc-fit-call-form" className="justify-center">
          Book My 15-Minute Fit Call
        </Button>
      </div>
    </section>
  )
}

function ClosingBand() {
  return (
    <section className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-10 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-100">
          Forged by Dominus Foundry — Fide et Familia
        </p>
        <Button href="#vc-fit-call-form" variant="forgeSecondary" className="justify-center">
          Book your 15-minute fit call →
        </Button>
      </div>
    </section>
  )
}

export default function VoiceConciergeCampaignPage() {
  return (
    <div className="min-h-screen bg-navy-900 text-tan-100 pb-20 md:pb-0">
      <StickyCTABars />
      <MinimalHeader />
      <main className="space-y-12 md:space-y-16">
        <Hero />
        <SocialProof />
        <CallFlow />
        <Qualification />
        <Outcomes />
        <Implementation />
        <CaseStory />
        <AudioDemos />
        <FAQ />
        <FinalCTA />
        <ClosingBand />
      </main>
    </div>
  )
}
