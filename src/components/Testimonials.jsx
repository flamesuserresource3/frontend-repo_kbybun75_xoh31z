import React from 'react';

const testimonials = [
  {
    name: 'Анна',
    text: 'Книга помогла мне по‑новому взглянуть на привычные вещи. Практики простые и мощные — результаты почувствовала уже через неделю.'
  },
  {
    name: 'Игорь',
    text: 'Очень глубокая и при этом доступная подача. Понравилось, что акцент на личном опыте и наблюдении за собой.'
  },
  {
    name: 'Мария',
    text: 'Читая, ощущала сильный отклик. Теперь я вижу, как мои состояния реально меняют события в жизни.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Отзывы читателей</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur shadow-lg shadow-violet-900/30">
              <p className="text-violet-100/90">{t.text}</p>
              <p className="mt-4 text-sm text-violet-300">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
