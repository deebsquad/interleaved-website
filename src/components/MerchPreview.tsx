"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const featuredProducts = [
  {
    name: 'Recording Zone Classic Tee',
    price: "$19.99",
    image: "/images/merch/tee-placeholder.jpg",
    href: "/merch",
  },
  {
    name: "TBITW EP & Unisex Hoodie",
    price: "$44.00",
    image: "/images/merch/hoodie-placeholder.jpg",
    href: "/merch",
  },
  {
    name: "Interleaved Dad Hat",
    price: "$32.00",
    image: "/images/merch/hat-placeholder.jpg",
    href: "/merch",
  },
];

export default function MerchPreview() {
  return (
    <section id="merch" className="py-24 md:py-32 px-6 bg-bg-elevated curtain-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Merch" subtitle="Official Gear" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="group border border-border bg-bg-card hover:border-crimson/40 transition-all duration-500">
                <div className="relative aspect-square overflow-hidden bg-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag
                      size={48}
                      className="text-text-muted/30"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-sm uppercase tracking-[0.1em] text-text-primary group-hover:text-amber transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-amber text-sm mt-2 font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <a
            href="/merch"
            className="inline-block px-8 py-3 border border-text-muted hover:border-amber text-text-secondary hover:text-amber uppercase tracking-[0.2em] text-sm transition-all duration-300"
          >
            Shop All Merch
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
