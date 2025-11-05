import React from 'react';

export default function BookDetails() {
  return (
    <section className="relative w-full bg-[#0b0720] py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">О книге</h2>
          <p className="mt-4 text-violet-100/90">
            «I AM: Как Вселенная работает через нас» — это практическое руководство по
            осознанности, намерению и со-творению реальности. В книге собраны
            современные метафизические подходы, медитации, наблюдения и техники
            для пробуждения внутреннего источника.
          </p>
          <ul className="mt-6 space-y-3 text-violet-100/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              12 глав с практиками и вопросами для самоисследования
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              Доступ к аудиомедитациям и бонусным материалам
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
              Форматы: PDF, EPUB, MOBI
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-orange-500/30 via-fuchsia-500/20 to-violet-500/30 blur-2xl" />
          <div className="relative rounded-2xl border border-violet-500/20 bg-[#0f0a2e] p-6 shadow-2xl">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1640&auto=format&fit=crop"
                alt="Обложка книги I AM"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h3 className="text-xl font-semibold">I AM: Как Вселенная работает через нас</h3>
              <p className="text-violet-200/80">Электронная книга • 240 страниц</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
