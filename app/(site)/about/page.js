import ContactCTA from "../../../components/ContactCTA";
import ContactForm from "../../../components/ContactForm";

export const metadata = {
  title: 'About — Dominus Foundry',
  description: 'We help traditional businesses survive technological change. Based in Albuquerque, built for the long haul.'
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="heading-forge-lg text-slate-900">
            We Build Bridges Through Technological Change
          </h1>
          <p className="mt-6 body-foundry">
            Most business owners didn't sign up for constant tech disruption. They signed up to run their business. 
            We help them survive the changes they didn't ask for—starting with QuickBooks Desktop going away.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 bg-foundry-texture rounded-3xl border-2 border-forge-500 border-b-4">
        <h2 className="heading-forge-lg text-slate-900">Why We Started Dominus Foundry</h2>
        <div className="mt-6 space-y-4 body-foundry">
          <p className="body-foundry">
            Technology changes faster than most businesses can adapt. AI, cloud software, platform migrations—it's 
            relentless. And the people selling these changes rarely understand what it's like to run a traditional 
            business that's been doing things the same way for 20 years.
          </p>
          <p className="body-foundry">
            QuickBooks Desktop going away was one of the early shocks that pushed us to build Dominus Foundry. It wasn’t just about one piece of software — it was about the pattern: tools and platforms changing under small teams, and ‘AI’ features being bolted on without any real operational thinking.
          </p>
          <p className="body-foundry">
            We built Dominus Foundry because we saw the gap growing. Business owners who built successful companies 
            through hard work and relationships suddenly facing forced software migrations, AI disruption, and 
            technology vendors who don't have the patience to explain what's actually happening.
          </p>
          <p className="body-foundry">
            QuickBooks Desktop going away is just the first crisis. There will be more. We're here to help traditional 
            business owners navigate these transitions without losing their financial history, their sanity, or their business.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg mb-6">Who We Are</h2>
          
          <div className="space-y-6 body-foundry">
            <p className="body-foundry">
              Dominus Foundry is Mark and Bri Lord—a family business based in Albuquerque, New Mexico. 
              We're building this for the long haul, eventually bringing in our daughter Belle as she 
              builds her own ventures.
            </p>
            <p className="body-foundry">
              Mark brings decades of software expertise and three years of accounting and bookkeeping experience. 
              He's built and run businesses, so he understands what it's like when technology forces change on you.
            </p>
            <p className="body-foundry">
              When you work with us, you're working directly with us—not offshore staff, not junior consultants. 
              We handle every project personally because we understand that handing over your financial data requires trust.
            </p>
          </div>

          <div className="mt-8 card-forged-premium rounded-2xl bg-gradient-to-br from-forge-50 to-white p-6">
            <p className="heading-forge-md text-slate-900">Founder panel</p>
            <p className="text-sm text-slate-700">Portrait coming soon.</p>
            <p className="mt-4 body-foundry">
              Based in Albuquerque, serving New Mexico first
            </p>
            <p className="mt-2 body-foundry">
              We're focused on serving local businesses in ABQ and across New Mexico before expanding nationally. 
              If you're a New Mexico business owner facing the QB Desktop crisis, we're your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-8">How We Work</h2>
        
        <div className="space-y-8">
          <div className="card-forged-premium bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We have patience for people who don't love change</h3>
            <p className="mt-3 body-foundry">
              You didn't ask for QuickBooks Desktop to go away. You didn't ask for AI to disrupt your workflows. 
              We understand that frustration. We take the time to explain what's happening, why it matters, and 
              what your options are—without talking down to you.
            </p>
          </div>

          <div className="card-forged bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We partner with you, not at you</h3>
            <p className="mt-3 body-foundry">
              Most tech vendors are impersonal and rushed. We're not. You get direct access to us throughout 
              the project. We answer questions, walk you through decisions, and make sure you understand what's 
              happening to your business-critical systems.
            </p>
          </div>

          <div className="card-forged bg-white rounded-2xl p-6 md:p-8">
            <h3 className="heading-forge-md text-slate-900">We don't rush the work</h3>
            <p className="mt-3 body-foundry">
              Quality over speed. We reconcile everything, document our work, and hand off systems that the 
              next person can understand. Your CPA shouldn't have to decode mysteries when they open your books.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy-500 text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg text-white mb-6">Who We Work With</h2>
          <div className="text-lg text-bronze-200 space-y-4">
            <p className="body-foundry text-bronze-100">
              We work with established business owners who've been running their companies for 15-25 years. 
              You're profitable, you employ 5-50 people, and you've built something lasting. But the rapid pace 
              of technological change is exhausting.
            </p>
            <p className="font-semibold text-white text-xl mt-6">You're a good fit if:</p>
            <ul className="space-y-3 ml-6 mt-4">
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You use technology because you have to, not because you love it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>Change frustrates you, but you're willing to adapt when necessary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You value quality work and personal service over the cheapest option</span>
              </li>
              <li className="flex gap-3">
                <span className="text-forge-100 font-bold text-xl">✓</span>
                <span>You've built something you're proud of and want to protect it</span>
              </li>
            </ul>
            <p className="mt-6 text-bronze-200">
              If you're extremely price-sensitive or completely unwilling to adapt to necessary changes, 
              we're probably not the right fit. But if you want a partner who understands your frustration 
              and will guide you through unavoidable transitions with patience and care, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-6">About the Name</h2>
        <div className="body-foundry space-y-4">
          <p className="body-foundry">
            "Dominus" is Latin for "Lord"—our family name. A foundry is where raw materials are forged into 
            durable, functional tools that last for generations.
          </p>
          <p className="body-foundry">
            We chose the name because we're building this for legacy. The Foundry is where the Lord family's 
            ideas take form and come to life. We're not looking for quick exits or venture capital. We're building 
            businesses that will serve people for decades, potentially with our daughter Belle joining as she 
            builds her own ventures.
          </p>
          <p className="font-semibold text-slate-900">
            Technology changes rapidly, but good businesses are built to last. That's what we're forging here.
          </p>
        </div>
      </section>

      {/* Our Services Path */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="heading-forge-lg mb-6">Our Service Philosophy</h2>
          <div className="body-foundry space-y-4">
            <p className="body-foundry">
              We're building Dominus Foundry one service at a time, starting with immediate crises and expanding 
              to help businesses navigate the broader technology landscape.
            </p>
            <p className="body-foundry">
              Right now, that's QuickBooks Desktop migrations—because it's urgent, it fits our values, and most 
              providers do it poorly. The revenue from QB migrations will fund AI automation services to help 
              traditional businesses stay competitive. Then technology roadmapping to help you see what's coming. 
              And eventually exit planning support for owners thinking about succession or sale.
            </p>
            <p className="font-semibold text-slate-900">
              Each service builds on the last. Each one helps traditional businesses survive change with their 
              dignity and their data intact.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="heading-forge-lg mb-6">Why we built Mentis</h2>
        <div className="body-foundry space-y-4">
          <p className="body-foundry">
            We kept seeing the same two problems: tools that didn’t talk to each other, and ‘AI’ that forgot everything you’d already done. Small teams were being told to adopt more apps and more automation, but nobody was responsible for how it all worked together.
          </p>
          <p className="body-foundry">
            Mentis is our answer to that gap — an operations intelligence layer that learns from the way you actually run your business. It’s what keeps our systems coherent behind the scenes, so your books, billing, and phones feel like parts of the same whole instead of separate projects you have to manage by hand.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="heading-forge-lg">Let's work together</h2>
          <p className="mt-4 body-foundry">
            Have questions about your technology needs? Ready to talk about QuickBooks migration? We're here to help.
          </p>
        </div>

        <ContactCTA className="mb-8" />

        <div className="rounded-2xl border-2 border-navy-500 bg-white p-6 md:p-10 shadow-xl">
          <ContactForm />
        </div>

        <p className="text-sm text-slate-700 text-center mt-3">We respond within one business day.</p>
        <div className="mt-6 text-center text-sm text-navy-600">
          Based in Albuquerque, New Mexico • Serving NM businesses first
        </div>
      </section>
    </>
  );
}
