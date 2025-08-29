import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold">Axiom Robotics</h4>
            <p className="mt-2 text-sm text-white/70 max-w-sm">
              Enterprise‑grade robots for service, logistics, and manufacturing. Built with safety and reliability at the core.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Products</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li><a href="#products" className="hover:text-white">Service Robots</a></li>
              <li><a href="#products" className="hover:text-white">Warehouse Robots</a></li>
              <li><a href="#products" className="hover:text-white">Collaborative Arms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li><a href="#why-us" className="hover:text-white">Why Axiom</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get updates</h4>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Axiom Robotics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
