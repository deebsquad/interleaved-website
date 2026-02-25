"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const featuredProducts = [
  {
    name: 'Recording Zone Classic Tee',
    price: "$19.99",
    image: "/images/merch/mens-classic-tee-black-front-665f14f6d1c3e-1024x1024.jpg",
    href: "/merch",
  },
  {
    name: "TBITW EP & Unisex Hoodie",
    price: "$44.00",
    image: "/images/merch/TBITW-Vinyl-Album-Cover-Instagram-Post-1-1-1024x1024.png",
    href: "/merch",
  },
  {
    name: "Interleaved Dad Hat",
    price: "$32.00",
    image: "/images/merch/classic-dad-hat-black-front-6553b3fdea4e2-1024x1024.jpg",
    href: "/merch",
  },
];

export default function MerchPreview() {
  return (
    <section id="merch" className="py-24 md:py-32 px-6 bg-bg-elevated curtain-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Merch" subtitle="Official Gear" />

        <AnimatedSection className="text-center mb-12">
          <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold">
            New Merch Coming Soon!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="group border border-border bg-bg-card hover:border-crimson/40 transition-all duration-500">
                <div className="relative aspect-square overflow-hidden bg-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-sm uppercase tracking-[0.1em] text-text-primary group-hover:text-amber transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-amber text-sm mt-2 font-semibold">
                    {product.price}
                  </p>
                  <span className="mt-3 w-full py-2 border border-text-muted/20 text-text-muted uppercase tracking-[0.2em] text-xs text-center block cursor-not-allowed">
                    Sold Out!
                  </span>
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
