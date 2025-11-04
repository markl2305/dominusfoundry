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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900">
            We Build Bridges Through Technological Change
          </h1>
          <p className="mt-6 text-xl text-navy-700">
            Most business owners didn't sign up for constant tech disruption. They signed up to run their business. 
            We help them survive the changes they didn't ask for—starting with QuickBooks Desktop going away.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why We Started Dominus Foundry</h2>
        <div className="mt-6 space-y-4 text-lg text-navy-700">
          <p>
            Technology changes faster than most businesses can adapt. AI, cloud software, platform migrations—it's 
            relentless. And the people selling these changes rarely understand what it's like to run a traditional 
            business that's been doing things the same way for 20 years.
          </p>
          <p>
            We built Dominus Foundry because we saw the gap growing. Business owners who built successful companies 
            through hard work and relationships suddenly facing forced software migrations, AI disruption, and 
            technology vendors who don't have the patience to explain what's actually happening.
          </p>
          <p>
            QuickBooks Desktop going away is just the first crisis. There will be more. We're here to help traditional 
            business owners navigate these transitions without losing their financial history, their sanity, or their business.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Who We Are</h2>
          
          <div className="space-y-6 text-lg text-navy-700">
            <p>
              Dominus Foundry is Mark and Bri Lord—a family business based in Albuquerque, New Mexico. 
              We're building this for the long haul, eventually bringing in our daughter Belle as she 
              builds her own ventures.
            </p>
            <p>
              Mark brings decades of software expertise and three years of accounting and bookkeeping experience. 
              He's built and run businesses, so he understands what it's like when technology forces change on you.
            </p>
            <p>
              When you work with us, you're working directly with us—not offshore staff, not junior consultants. 
              We handle every project personally because we understand that handing over your financial data requires trust.
            </p>
          </div>

          <div className="mt-8 p-6 bg-tan-200 border-l-4 border-navy-500 rounded-r-xl">
            <p className="text-lg font-semibold text-navy-900">Based in Albuquerque, serving New Mexico first</p>
            <p className="mt-2 text-navy-700">
              We're focused on serving local businesses in ABQ and across New Mexico before expanding nationally. 
              If you're a New Mexico business owner facing the QB Desktop crisis, we're your neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">How We Work</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border-2 border-navy-500 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-navy-500">We have patience for people who don't love change</h3>
            <p className="mt-3 text-lg text-navy-700">
              You didn't ask for QuickBooks Desktop to go away. You didn't ask for AI to disrupt your workflows. 
              We understand that frustration. We take the time to explain what's happening, why it matters, and 
              what your options are—without talking down to you.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-bronze-300 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-navy-500">We partner with you, not at you</h3>
            <p className="mt-3 text-lg text-navy-700">
              Most tech vendors are impersonal and rushed. We're not. You get direct access to us throughout 
              the project. We answer questions, walk you through decisions, and make sure you understand what's 
              happening to your business-critical systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-bronze-300 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-navy-500">We don't rush the work</h3>
            <p className="mt-3 text-lg text-navy-700">
              Quality over speed. We reconcile everything, document our work, and hand off systems that the 
              next person can understand. Your CPA shouldn't have to decode mysteries when they open your books.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-navy-500 text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Work With</h2>
          <div className="text-lg text-bronze-300 space-y-4">
            <p>
              We work with established business owners who've been running their companies for 15-25 years. 
              You're profitable, you employ 5-50 people, and you've built something lasting. But the rapid pace 
              of technological change is exhausting.
            </p>
            <p className="font-semibold text-white text-xl mt-6">You're a good fit if:</p>
            <ul className="space-y-3 ml-6 mt-4">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">✓</span>
                <span>You use technology because you have to, not because you love it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">✓</span>
                <span>Change frustrates you, but you're willing to adapt when necessary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">✓</span>
                <span>You value quality work and personal service over the cheapest option</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">✓</span>
                <span>You've built something you're proud of and want to protect it</span>
              </li>
            </ul>
            <p className="mt-6 text-bronze-300">
              If you're extremely price-sensitive or completely unwilling to adapt to necessary changes, 
              we're probably not the right fit. But if you want a partner who understands your frustration 
              and will guide you through unavoidable transitions with patience and care, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About the Name</h2>
        <div className="text-lg text-navy-700 space-y-4">
          <p>
            "Dominus" is Latin for "Lord"—our family name. A foundry is where raw materials are forged into 
            durable, functional tools that last for generations.
          </p>
          <p>
            We chose the name because we're building this for legacy. The Foundry is where the Lord family's 
            ideas take form and come to life. We're not looking for quick exits or venture capital. We're building 
            businesses that will serve people for decades, potentially with our daughter Belle joining as she 
            builds her own ventures.
          </p>
          <p className="font-semibold text-navy-900">
            Technology changes rapidly, but good businesses are built to last. That's what we're forging here.
          </p>
        </div>
      </section>

      {/* Our Services Path */}
      <section className="bg-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Service Philosophy</h2>
          <div className="text-lg text-navy-700 space-y-4">
            <p>
              We're building Dominus Foundry one service at a time, starting with immediate crises and expanding 
              to help businesses navigate the broader technology landscape.
            </p>
            <p>
              Right now, that's QuickBooks Desktop migrations—because it's urgent, it fits our values, and most 
              providers do it poorly. The revenue from QB migrations will fund AI automation services to help 
              traditional businesses stay competitive. Then technology roadmapping to help you see what's coming. 
              And eventually exit planning support for owners thinking about succession or sale.
            </p>
            <p className="font-semibold text-navy-900">
              Each service builds on the last. Each one helps traditional businesses survive change with their 
              dignity and their data intact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border-2 border-navy-500 bg-gradient-to-br from-tan-200 to-white p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-navy-900">Let's Work Together</h2>
          <p className="mt-4 text-lg text-navy-700">
            If you're facing the QuickBooks Desktop crisis and need someone who will take the time to do it right, 
            start here.
          </p>
          <a 
            href="/qb-migration" 
            className="mt-6 inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
          >
            Get Your Migration Quote
          </a>
          <p className="mt-6 text-sm text-navy-600">
            Based in Albuquerque, New Mexico • Serving NM businesses first
          </p>
          <p className="mt-2 text-sm text-navy-600">
            Questions? Email <a href="mailto:hello@dominusfoundry.com" className="underline font-semibold text-navy-500">hello@dominusfoundry.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
