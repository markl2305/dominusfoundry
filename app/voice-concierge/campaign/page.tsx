import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import VoiceConciergeLeadForm from '@/components/voice-concierge/VoiceConciergeLeadForm'
import { DemoWidgetLoader, HeroCTAButtons, MiniHeroForm, StickyCTABars } from '@/components/voice-concierge/CampaignInteractions'

export const metadata: Metadata = {
  title: 'Voice Concierge Campaign | Dominus Foundry',
  description:
    "High-intent landing page for Dominus Foundry's Voice Concierge: an AI phone concierge that answers calls, checks calendars, books appointments, and hands off to humans when needed.",
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
          <a href="tel:+18667103313" className="font-medium text-neutral-100 hover:text-emerald-400">
            Call: (866) 710-3313
          </a>
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
    <section className="bg-gradient-to-b from-black via-neutral-950 to-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/90">
            AI Voice Concierge for Appointment-Driven Businesses
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Never Miss a Booking Call Again.
          </h1>
          <p className="text-lg text-neutral-200">
            Voice Concierge answers every call, speaks like a trained staff member, checks your live calendar, books
            appointments, sends confirmations, and hands off to your team when it should—24/7.
          </p>
          <p className="text-sm text-neutral-400">
            Built and battle-tested with real venues and service businesses, now available as a fully managed solution
            from Dominus Foundry.
          </p>
          <HeroCTAButtons />
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5 shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                📞
              </div>
              <div>
                <p className="text-sm text-neutral-300">Caller rings your business</p>
                <p className="text-xs text-neutral-500">After-hours, peak time, or overflow</p>
              </div>
            </div>
            <div className="h-px bg-neutral-800" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-200">
                🗓️
              </div>
              <div>
                <p className="text-sm text-neutral-300">Concierge checks your live calendar</p>
                <p className="text-xs text-neutral-500">Rules, buffers, and blackout dates enforced</p>
              </div>
            </div>
            <div className="h-px bg-neutral-800" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-200">
                ✅
              </div>
              <div>
                <p className="text-sm text-neutral-300">Books, confirms, and summarizes</p>
                <p className="text-xs text-neutral-500">Texts/email confirmations + transcript log</p>
              </div>
            </div>
            <div className="h-px bg-neutral-800" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-200">
                👥
              </div>
              <div>
                <p className="text-sm text-neutral-300">Transfers when needed</p>
                <p className="text-xs text-neutral-500">Edge cases, VIPs, or sensitive situations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Suspense fallback={<div className="text-sm text-neutral-400">Loading quick access…</div>}>
            <MiniHeroForm />
          </Suspense>
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
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">What Happens When a Call Comes In</h2>
          <p className="text-sm text-neutral-400">A transparent call journey you can audit, refine, and trust.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-3 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-200">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-neutral-100">{step.title}</h3>
                <p className="text-xs text-neutral-400">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
          Every call is logged. You can review transcripts, see bookings, and continuously refine the script as your
          business evolves.
        </p>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center text-sm text-neutral-200 md:flex-row md:justify-center md:gap-6">
        <p className="font-semibold text-neutral-100">Trusted by appointment-based businesses across New Mexico</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-emerald-300">
          <span className="rounded-full border border-emerald-500/40 px-3 py-1">✓ Event Venues</span>
          <span className="rounded-full border border-emerald-500/40 px-3 py-1">✓ Medical Practices</span>
          <span className="rounded-full border border-emerald-500/40 px-3 py-1">✓ Professional Services</span>
          <span className="rounded-full border border-emerald-500/40 px-3 py-1">✓ Salons & Spas</span>
        </div>
      </div>
    </section>
  )
}

function PhoneCTA() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <a
          href="tel:+15052075211"
          className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/40 bg-neutral-900/70 px-4 py-4 text-left shadow-lg ring-1 ring-emerald-500/20 transition hover:border-emerald-400"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-lg">📞</span>
            <div>
              <p className="text-sm font-semibold text-white">Call Our Demo Line</p>
              <p className="text-lg font-bold text-emerald-300">(505) 207-5211</p>
            </div>
          </div>
          <span className="text-sm text-emerald-200">Lower friction: hear it live</span>
        </a>
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
    <section className="bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
        <div className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6">
          <h3 className="text-lg font-semibold text-white">This is built for you if…</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            {forItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
          <h3 className="text-lg font-semibold text-white">It’s probably not a fit if…</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            {notForItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-rose-400">•</span>
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
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Outcomes You Can Expect</h2>
          <p className="text-sm text-neutral-400">
            Conservative, real-world improvements you can feel without risky promises.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {outcomes.map((item) => (
            <div key={item} className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
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
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">How Implementation Works</h2>
          <p className="text-sm text-neutral-400">Built to be safe, auditable, and fast to value.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.title} className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300">{`Step ${idx + 1}`}</span>
              </div>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-xs text-neutral-400">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
          You always have a human override. We never deploy major changes to live calls without your approval.
        </p>
      </div>
    </section>
  )
}

function CaseStory() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Pilot Story: Private Event Venue</h2>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 text-sm text-neutral-200">
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
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Hear Voice Concierge in Action</h2>
          <p className="text-sm text-neutral-400">Short scenarios to hear how it greets, books, and hands off.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {demos.map((demo) => (
            <div key={demo.title} className="space-y-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4">
              <h3 className="text-sm font-semibold text-neutral-100">{demo.title}</h3>
              <p className="text-xs text-neutral-400">{demo.desc}</p>
              <p className="text-xs text-neutral-500">Duration: {demo.duration}</p>
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
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Frequently Asked</h2>
          <p className="text-sm text-neutral-400">Quick answers to the biggest objections.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4">
              <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
              <p className="text-sm text-neutral-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-12 text-center md:px-6 md:py-16">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          If a missed or badly handled call costs you more than a month of Voice Concierge, you&apos;re already paying
          for it—just without the system.
        </h2>
        <a
          href="#demo-form"
          className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-emerald-400"
        >
          Get My Strategy Call
        </a>
      </div>
    </section>
  )
}

export default function VoiceConciergeCampaignPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20 md:pb-0">
      <DemoWidgetLoader />
      <StickyCTABars />
      <MinimalHeader />
      <main className="space-y-12 md:space-y-16">
        <Hero />
        <SocialProof />
        <CallFlow />
        <PhoneCTA />
        <Qualification />
        <Outcomes />
        <Implementation />
        <CaseStory />
        <AudioDemos />
        <section id="demo-form" className="bg-neutral-950">
          <div className="mx-auto max-w-5xl space-y-4 px-4 py-12 md:px-6 md:py-16">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Request a Voice Concierge Demo & Strategy Call</h2>
              <p className="text-sm text-neutral-400">
                Tell us a bit about your phones, your calendar, and your bookings. We&apos;ll review your answers,
                confirm fit, and send you a link to a live demo plus a 30–45 minute strategy call if it makes sense.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 md:p-8">
              <Suspense fallback={<div className="text-sm text-neutral-400">Loading form…</div>}>
                <VoiceConciergeLeadForm />
              </Suspense>
            </div>
          </div>
        </section>
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  )
}
