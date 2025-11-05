import React from 'react';
import Spline from '@splinetool/react-spline';

const paymentLinks = {
  uah: '#',
  paypal: '#',
  venmo: '#',
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5gqVbN0s8HfHf3Zy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0718]/20 via-[#0b0718]/60 to-[#0b0718] pointer-events-none" />

      <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-violet-300/80 tracking-wide text-sm sm:text-base">Энергия сознания • Практики • Трансформация</p>
        <h1 className="mt-3 font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl">
          I AM: Как Вселенная работает через нас
        </h1>
        <p className="mt-4 text-violet-200/80 max-w-3xl">
          Современное руководство по осознанности и проявлению. Узнайте, как согласовать мысли и действия с потоком Вселенной и открыть новые уровни свободы и силы.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={paymentLinks.uah} className="px-4 py-2 rounded-md bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/30 transition">
            Оплатить картой (UAH)
          </a>
          <a href={paymentLinks.paypal} className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">
            PayPal
          </a>
          <a href={paymentLinks.venmo} className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">
            Venmo
          </a>
        </div>

        <p className="mt-3 text-xs text-violet-200/60">Ссылки оплаты являются заглушками — замените на реальные URL</p>
      </div>
    </section>
  );
}
