"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface Product {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  category: string;
  description: string;
  image: string | null;
  sizes?: string;
  url: string;
}

const products: Product[] = [
  {
    id: "recording-zone-tee",
    name: 'Interleaved "Recording Zone" Classic Tee',
    price: 19.99,
    displayPrice: "From $19.99",
    category: "APPAREL",
    description: "Classic fit tee with the Interleaved Recording Zone design.",
    image: "/images/merch/mens-classic-tee-black-front-665f14f6d1c3e-1024x1024.jpg",
    sizes: "S|M|L|XL|2XL|3XL",
    url: "/merch",
  },
  {
    id: "tbitw-hoodie",
    name: "TBITW EP (Digital Copy) & Unisex Hoodie",
    price: 44.00,
    displayPrice: "From $44.00",
    category: "BUNDLE",
    description: "There's Blood In The Water EP digital download bundled with an Interleaved unisex hoodie.",
    image: "/images/merch/TBITW-Vinyl-Album-Cover-Instagram-Post-1-1-1024x1024.png",
    sizes: "S|M|L|XL|2XL|3XL",
    url: "/merch",
  },
  {
    id: "tbitw-ep",
    name: "There's Blood In The Water EP (Digital Copy)",
    price: 9.99,
    displayPrice: "$9.99",
    category: "DIGITAL",
    description: "Digital download of the There's Blood In The Water EP.",
    image: "/images/merch/Interleaved-EP-Art-1024x1024.png",
    url: "/merch",
  },
  {
    id: "tbitw-sweatshirt",
    name: "TBITW EP (Digital Copy) & Unisex Sweatshirt",
    price: 50.00,
    displayPrice: "$50.00",
    category: "BUNDLE",
    description: "There's Blood In The Water EP digital download bundled with an Interleaved unisex sweatshirt.",
    image: "/images/merch/TBITW-Vinyl-Album-Cover-Instagram-Post-1-1-1024x1024.png",
    sizes: "S|M|L|XL|2XL|3XL",
    url: "/merch",
  },
  {
    id: "dad-hat",
    name: "Interleaved Dad Hat",
    price: 32.00,
    displayPrice: "$32.00",
    category: "ACCESSORIES",
    description: "Embroidered Interleaved dad hat. One size fits most.",
    image: "/images/merch/classic-dad-hat-black-front-6553b3fdea4e2-1024x1024.jpg",
    url: "/merch",
  },
  {
    id: "unisex-hoodie",
    name: "Unisex Hoodie",
    price: 51.00,
    displayPrice: "From $51.00",
    category: "APPAREL",
    description: "Interleaved unisex hoodie.",
    image: "/images/merch/unisex-premium-hoodie-black-front-65510e5442df1-1024x1024.jpg",
    sizes: "S|M|L|XL|2XL|3XL",
    url: "/merch",
  },
  {
    id: "premium-sweatshirt",
    name: "Unisex Premium Sweatshirt",
    price: 45.00,
    displayPrice: "From $45.00",
    category: "APPAREL",
    description: "Interleaved premium unisex sweatshirt.",
    image: "/images/merch/unisex-premium-sweatshirt-black-front-65510e1967871-1024x1024.jpg",
    sizes: "S|M|L|XL|2XL|3XL",
    url: "/merch",
  },
  {
    id: "organic-tee",
    name: "Organic T-Shirt",
    price: 31.50,
    displayPrice: "From $31.50",
    category: "APPAREL",
    description: "Interleaved organic cotton t-shirt.",
    image: "/images/merch/unisex-organic-t-shirt-black-front-65510ddb5eb1f-1024x1024.jpg",
    sizes: "S|M|L|XL|2XL",
    url: "/merch",
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

        <AnimatedSection className="text-center mb-12">
          <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold">
            New Merch Coming Soon!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <div className="group border border-border bg-bg-card hover:border-crimson/40 transition-all duration-500">
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
                  <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-all duration-500" />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-crimson font-semibold">
                    {product.category}
                  </span>
                  <h3 className="text-sm uppercase tracking-[0.08em] text-text-primary group-hover:text-amber transition-colors mt-2 mb-2 leading-relaxed">
                    {product.name}
                  </h3>
                  <p className="text-text-muted text-xs mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-amber text-sm font-semibold mb-4">
                    {product.displayPrice}
                  </p>
                  <span className="mt-2 w-full py-2.5 border border-text-muted/20 text-text-muted uppercase tracking-[0.2em] text-xs text-center block cursor-not-allowed">
                    Sold Out!
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
