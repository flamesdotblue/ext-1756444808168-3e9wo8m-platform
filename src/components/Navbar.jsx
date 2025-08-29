import React from 'react';
import { Robot, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur-xl bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)]">
              <Robot className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Axiom Robotics</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#products" className="hover:text-white transition">Robots</a>
            <a href="#why-us" className="hover:text-white transition">Why Us</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition focus:outline-none focus:ring-2 focus:ring-white/30">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
