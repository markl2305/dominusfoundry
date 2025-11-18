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
      className="fixed bottom-6 right-6 z-50 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white shadow-2xl hover:bg-orange-700 transition-all duration-300 hover:scale-105 md:px-8"
      aria-label="Review my QuickBooks file"
    >
      <span className="hidden md:inline">Review My QuickBooks File</span>
      <span className="md:hidden">Review My File</span>
    </button>
  );
}
