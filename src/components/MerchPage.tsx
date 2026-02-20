"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const products = [
  {
    id: "recording-zone-tee",
    name: 'Interleaved "Recording Zone" Classic Tee',
    price: "$19.99 – $26.00",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "tbitw-hoodie",
    name: "TBITW EP (Digital Copy) & Unisex Hoodie",
    price: "$44.00 – $50.03",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "tbitw-ep",
    name: "There's Blood In The Water EP (Digital Copy)",
    price: "$9.99",
    category: "DIGITAL",
    image: null,
  },
  {
    id: "tbitw-sweatshirt",
    name: "TBITW EP (Digital Copy) & Unisex Sweatshirt",
    price: "$50.00",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "dad-hat",
    name: "Interleaved Dad Hat",
    price: "$32.00",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "unisex-hoodie",
    name: "Unisex Hoodie",
    price: "$51.00 – $59.00",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "premium-sweatshirt",
    name: "Unisex Premium Sweatshirt",
    price: "$45.00 – $53.00",
    category: "INTERLEAVED",
    image: null,
  },
  {
    id: "organic-tee",
    name: "Organic T-Shirt",
    price: "$31.50 – $35.00",
    category: "INTERLEAVED",
    image: null,
  },
];

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-amber transition-colors text-sm uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Merch" subtitle="Official Interleaved Gear" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <div className="group border border-border bg-bg-card hover:border-crimson/40 transition-all duration-500 cursor-pointer">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-bg-elevated">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingBag
                        size={48}
                        className="text-text-muted/20 group-hover:text-crimson/30 transition-colors duration-500"
                      />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-all duration-500" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-crimson font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-sm uppercase tracking-[0.08em] text-text-primary group-hover:text-amber transition-colors mt-2 mb-3 leading-relaxed">
                    {product.name}
                  </h3>
                  <p className="text-amber text-sm font-semibold">
                    {product.price}
                  </p>
                  <button className="mt-4 w-full py-2.5 border border-text-muted/30 hover:border-crimson hover:bg-crimson text-text-secondary hover:text-text-primary uppercase tracking-[0.2em] text-xs transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note about merch store */}
        <AnimatedSection className="mt-16 text-center">
          <div className="border border-border bg-bg-card p-8 max-w-2xl mx-auto">
            <p className="text-text-secondary text-sm leading-relaxed">
              Full merch store with size selection and checkout coming soon.
              In the meantime, email us at{" "}
              <a
                href="mailto:admin@interleavedmusic.com"
                className="text-amber hover:text-amber-light transition-colors underline"
              >
                admin@interleavedmusic.com
              </a>{" "}
              to place an order.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
