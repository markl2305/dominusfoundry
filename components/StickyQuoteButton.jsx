'use client';
import { useState, useEffect } from 'react';

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after a short scroll past the hero
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToForm = () => {
    document.getElementById('get-quote')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToForm}
      className="fixed bottom-6 right-6 z-50 rounded-xl bg-gradient-to-b from-forge-500 to-forge-700 border-2 border-forge-800 border-b-4 px-6 py-4 font-semibold uppercase tracking-wide text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:from-forge-600 hover:to-forge-800 active:border-b-2 active:translate-y-[2px] md:px-8"
      aria-label="Review my QuickBooks file"
    >
      <span className="hidden md:inline">Review My QuickBooks File</span>
      <span className="md:hidden">Review My File</span>
    </button>
  );
}
