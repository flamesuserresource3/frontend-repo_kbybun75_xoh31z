import React from 'react';

const testimonials = [
  {
    name: 'Мария',
    text:
      'Эта книга стала для меня порталом к более глубокому чувству присутствия. Практики простые, но трансформирующие.',
  },
  {
    name: 'Андрей',
    text:
      'Читал запоем. Особенно понравились главы про намерение и синхронии. Чувствуется искренность и опыт автора.',
  },
  {
    name: 'Elena',
    text:
      'Beautifully written and grounded. I loved the balance between metaphysics and practical steps I can apply every day.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#0b0720] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Отзывы читателей
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-violet-500/20 bg-[#0f0a2e] p-6 shadow-xl"
            >
              <p className="text-violet-100">{t.text}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
              <p className="mt-3 text-sm text-violet-300">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
