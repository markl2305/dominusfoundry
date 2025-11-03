import Link from 'next/link';

export default function MinimalHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-black tracking-tight text-lg text-gray-900 hover:text-blue-900 transition-colors">
          Dominus<span className="text-blue-900">Foundry</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          
          <a 
            href="tel:+15551234567" 
            className="text-sm font-semibold text-gray-900 flex items-center gap-2"
          >
            <span className="text-lg">📞</span>
            <span>(555) 123-4567</span>
          </a>

          <a 
            href="#get-quote" 
            className="inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile: Just phone and CTA */}
        <div className="md:hidden flex items-center gap-3">
          <a 
            href="tel:+15551234567" 
            className="text-2xl"
            aria-label="Call us"
          >
            📞
          </a>
          <a 
            href="#get-quote" 
            className="inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
