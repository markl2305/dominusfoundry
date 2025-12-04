import type { Metadata } from 'next';
import Image from 'next/image';
import HualiPoster from '@/public/images/huali-lager-poster.png';
import HualiHeader from '@/public/Huali.png';

export const metadata: Metadata = {
  title: 'Huali Order Info | Dominus Foundry',
  robots: {
    index: false,
    follow: false,
  },
  other: {
    robots: 'noindex,nofollow',
  },
};

export default function HualiOrderInfoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-amber-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-12">
        <header className="flex justify-center">
          <Image
            src={HualiHeader}
            alt="Huali Lager crest header artwork"
            className="h-24 w-auto md:h-28"
            priority
          />
        </header>

        <section className="mt-10 grid flex-1 grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Huali Order Info
            </h1>
            <p className="text-lg text-amber-100">
              Fast keg ordering for Huali Lager distributors.
            </p>

            <div className="space-y-3 rounded-2xl bg-white/5 p-6 shadow-lg shadow-amber-900/30 ring-1 ring-white/10 backdrop-blur">
              <h2 className="text-2xl font-semibold text-amber-200">
                How to place an order
              </h2>
              <p className="text-sm text-gray-200">
                Use the on-screen Huali agent for the quickest experience, or call the
                order line directly if you prefer phone.
              </p>

              <div className="space-y-3">
                <button
                  id="huali-call-agent"
                  type="button"
                  onClick={() => {
                    /* TODO: wire to ElevenLabs widget */
                  }}
                  className="w-full rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow-lg shadow-amber-900/40 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Call Huali Order Line
                </button>
                <a
                  href="tel:5053374443"
                  className="block text-center text-sm text-gray-300 underline underline-offset-4 hover:text-amber-200"
                >
                  Or call 505-337-4443 from your phone
                </a>
              </div>

              <div className="space-y-2 text-sm text-gray-100">
                <p className="font-semibold text-amber-100">By phone (fallback)</p>
                <p>
                  If the on-screen agent isn’t available, call us directly at{' '}
                  <a href="tel:5053374443" className="text-amber-200 underline">
                    505-337-4443
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl bg-white/5 p-6 shadow-lg shadow-amber-900/25 ring-1 ring-white/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-amber-200">Quick steps</h3>
              <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-100">
                <li>Confirm you’re an authorized distributor.</li>
                <li>
                  Click “Call Huali Order Line” to start the on-screen call, or dial
                  505-337-4443.
                </li>
                <li>
                  Be ready with your phone number on account and the number of Huali
                  half kegs and Huali pony kegs you want.
                </li>
                <li>The Huali agent will read back the order for confirmation.</li>
              </ol>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white/5 p-4 shadow-2xl shadow-amber-900/40 ring-1 ring-white/10 backdrop-blur">
              <div className="overflow-hidden rounded-2xl bg-black/60">
                <Image
                  src={HualiPoster}
                  alt="Huali Lager promotional poster showing a glass of beer with the Huali logo"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 space-y-2 text-xs text-gray-300">
          <p>
            Huali Lager is produced by Kaktus Brewing Co. Orders placed here are forwarded
            to the brewery team for fulfillment.
          </p>
          <p>21+ only. Please enjoy responsibly.</p>
        </footer>
      </div>
    </main>
  );
}
