import React, { useEffect } from 'react';
import Hero from './components/Hero';
import BookDetails from './components/BookDetails';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  // Use a magic wand cursor for the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :root { --cursor-url: url('data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\">\n  <path fill=\"%23f97316\" d=\"M6 2l12 6-7 3-3 7z\"/>\n  <circle cx=\"19\" cy=\"5\" r=\"2\" fill=\"%23f97316\"/>\n</svg>`
      )}'), auto; }
      * { cursor: var(--cursor-url); }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0b0720] font-['Inter','Manrope',system-ui] text-white">
      <Hero />
      <BookDetails />
      <Testimonials />
      <Footer />
    </div>
  );
}
