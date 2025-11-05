import React from 'react';
import { Wand2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0b0720] pb-12 pt-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-orange-400" />
          <span className="font-semibold tracking-wide">I AM</span>
        </div>
        <p className="text-center text-sm text-violet-300">
          © {new Date().getFullYear()} I AM. Все права защищены.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-violet-300 hover:text-orange-400">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-sm text-violet-300 hover:text-orange-400">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
}
