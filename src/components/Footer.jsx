import React from 'react';
import { Wand2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-violet-200">
          <Wand2 className="h-5 w-5" />
          <span className="font-medium">I AM — книга</span>
        </div>
        <p className="text-sm text-violet-300/70">© {year}. Все права защищены.</p>
        <div className="flex items-center gap-4 text-sm text-violet-300/70">
          <a href="#" className="hover:text-white">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
