'use client';
import { useState, useEffect } from 'react';

export default function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 800px (past hero section)
      if (window.scrollY > 800) {
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
      className="fixed bottom-6 right-6 z-50 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white shadow-2xl hover:bg-orange-700 transition-all duration-300 hover:scale-105 md:px-8"
      aria-label="Get your migration quote"
    >
      <span className="hidden md:inline">Get Your Quote</span>
      <span className="md:hidden">Get Quote</span>
    </button>
  );
}
