import React from 'react';
import Spline from '@splinetool/react-spline';

const paymentLinks = {
  uah: '#', // Replace with your LiqPay/WayForPay/Fondy checkout link
  paypal: 'https://www.paypal.me/', // Replace with your PayPal.me or hosted button link
  venmo: 'https://venmo.com/', // Replace with your Venmo link or username
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0720]">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0720]/60 via-[#0b0720]/50 to-[#0b0720]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center text-white">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-200 backdrop-blur">
          Новая книга • Космическое сознание
        </span>
        <h1 className="max-w-full whitespace-nowrap text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          I AM Как Вселенная работает через нас
        </h1>
        <p className="mt-5 max-w-2xl text-base text-violet-100 sm:text-lg">
          Погрузись в путешествие к источнику сознания. Книга о том, как сверхразум
          проявляется через наши намерения, выбор и состояние присутствия.
        </p>

        {/* CTAs */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href={paymentLinks.uah}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:translate-y-[-2px] hover:bg-orange-400"
          >
            Оплатить картой (UAH)
          </a>
          <a
            href={paymentLinks.paypal}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:translate-y-[-2px] hover:bg-orange-400"
          >
            PayPal (EU)
          </a>
          <a
            href={paymentLinks.venmo}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:translate-y-[-2px] hover:bg-orange-400"
          >
            Venmo (US)
          </a>
        </div>

        <p className="mt-4 text-xs text-violet-200/80">
          Моментальная электронная версия + доступ к обновлениям. Безопасная оплата.
        </p>
      </div>
    </section>
  );
}
