import React from 'react';

export default function BookDetails() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-violet-900/40">
          <img
            src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
            alt="Обложка книги I AM"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">О книге</h2>
          <p className="mt-4 text-violet-100/80 leading-relaxed">
            Эта книга — практический проводник к внутреннему источнику силы. Через ясные принципы и упражнения вы научитесь взаимодействовать с миром как с живой системой, отражающей ваше состояние сознания.
          </p>
          <ul className="mt-6 space-y-3 text-violet-100/80">
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Перепрошивка убеждений и управление вниманием</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Практики для фокуса, энергии и проявления</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Ежедневные ритуалы для устойчивых изменений</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
