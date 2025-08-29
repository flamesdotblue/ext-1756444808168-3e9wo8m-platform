import React from 'react';
import { Cpu, Shield, Zap, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 'ax-assist',
    name: 'AX‑Assist',
    tagline: 'Autonomous Service Robot',
    price: '$8,990',
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    features: ['Lidar Navigation', 'Modular Payload', 'Voice Interface'],
  },
  {
    id: 'ax-pick',
    name: 'AX‑Pick',
    tagline: 'Warehouse Picking Robot',
    price: '$18,400',
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop',
    features: ['100kg Payload', 'Vision AI', '8hr Battery'],
  },
  {
    id: 'ax-precision',
    name: 'AX‑Precision',
    tagline: 'Collaborative Arm',
    price: '$24,900',
    image:
      'https://images.unsplash.com/photo-1565069268903-97cf1de3d3d6?q=80&w=1600&auto=format&fit=crop',
    features: ['0.02mm Repeatability', '6 DOF', 'Human‑Safe'],
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[1px] w-[80%] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Our Bestsellers</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Ready-to-deploy robots trusted by teams in hospitality, logistics, and manufacturing.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
            <Cpu className="h-4 w-4" />
            Edge AI Powered
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            <Shield className="h-4 w-4 text-emerald-300" /> 2‑Year Warranty • Global Support • OTA Updates
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium text-white/90">
          <Zap className="h-3 w-3 text-yellow-300" /> In Stock
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-white/70">{product.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
          {product.features.map((f) => (
            <li key={f} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1">{f}</li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-semibold">{product.price}</span>
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
            <ShoppingCart className="h-4 w-4" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
