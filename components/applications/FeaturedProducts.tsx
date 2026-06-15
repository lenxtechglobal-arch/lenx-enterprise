"use client";

import Link from "next/link";

import Container from "@/components/shared/Container";

interface Product {
  partNumber: string;
  manufacturer: string;
  image: string;
  category: string;
  description: string;
}

interface FeaturedProductsProps {
  badge?: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export default function FeaturedProducts({
  badge = "Featured Products",
  title,
  subtitle,
  products,
}: FeaturedProductsProps) {
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="overflow-hidden bg-white py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            {badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Products Slider */}
        {/* Products Slider */}
        <div className="mt-16">
          <div className="relative overflow-hidden">

            {/* Left Fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="marquee flex w-max gap-6">

              {duplicatedProducts.map((product, index) => (
                <div
                  key={`${product.partNumber}-${index}`}
                  className="
            group
            w-24
            min-w-[250px]
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#0066FF]
            hover:shadow-2xl
          "
                >
                  {/* Product Image */}
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.partNumber}
                      className="
                h-64
                w-full
                object-contain
                p-8
                transition-transform
                duration-500
                group-hover:scale-105
              "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className="
                  rounded-full
                  bg-[#EEF5FF]
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-[#0066FF]
                "
                      >
                        {product.category}
                      </span>

                      <span className="text-xs text-slate-500">
                        {product.manufacturer}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-[#071B4D]">
                      {product.partNumber}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-slate-600">
                      {product.description}
                    </p>

                    <Link
                      href="/contact"
                      className="
                mt-6
                inline-flex
                items-center
                font-semibold
                text-[#0066FF]
              "
                    >
                      Request Availability →
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}