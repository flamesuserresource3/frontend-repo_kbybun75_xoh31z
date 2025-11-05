import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import BookDetails from './components/BookDetails.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :root { --cursor-size: 28px; }
      @media (max-width: 640px) { :root { --cursor-size: 20px; } }
      body { cursor: none; }
      .magic-cursor {
        position: fixed; left: 0; top: 0; width: var(--cursor-size); height: var(--cursor-size);
        pointer-events: none; transform: translate(-50%, -50%);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23a78bfa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath d='M11 4L4 11l9 9l7-7'/%3E%3Cpath d='M15 9l-6 6'/%3E%3Cpath d='M2 22l2-2'/%3E%3Cpath d='M18 2l2 2'/%3E%3Cpath d='M7 2l1 3'/%3E%3Cpath d='M2 7l3 1'/%3E%3C/g%3E%3C/svg%3E");
        background-size: contain; background-repeat: no-repeat; filter: drop-shadow(0 0 6px rgba(167,139,250,0.6));
        z-index: 50;
      }
    `;
    document.head.appendChild(style);

    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0718] via-[#0d0820] to-[#0a0618] text-white selection:bg-violet-500/30 selection:text-white">
      <Hero />
      <BookDetails />
      <Testimonials />
      <Footer />
    </div>
  );
}
