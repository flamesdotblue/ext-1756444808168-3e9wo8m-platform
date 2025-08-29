import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute -top-32 -left-24 h-[40rem] w-[40rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[40rem] w-[40rem] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
              <Sparkles className="h-3 w-3 text-amber-300" /> Next‑Gen Service Robots
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Robots engineered to work, designed to wow
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              From autonomous assistants to precision industrial units, Axiom Robotics builds reliable machines that accelerate your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
                Explore Robots
              </a>
              <a href="#why-us" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                Why Axiom
              </a>
            </div>
            <div id="why-us" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<Shield className=\"h-4 w-4 text-emerald-300\" />} title="24/7 Support" desc="Global service network" />
              <Feature icon={<Zap className=\"h-4 w-4 text-yellow-300\" />} title="Fast Deploy" desc="Days, not months" />
              <Feature icon={<Sparkles className=\"h-4 w-4 text-indigo-300\" />} title="AI Inside" desc="Smart, safe, scalable" />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/7Tq3HdWu3UwG-FCE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        {icon}
        <span>{title}</span>
      </div>
      <p className="mt-1 text-xs text-white/60">{desc}</p>
    </div>
  );
}
