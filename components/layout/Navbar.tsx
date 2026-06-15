"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import Container from "@/components/shared/Container";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <img
              src="/logo.png"
              alt="Lenx Tech"
              className="h-14 w-auto"
            />

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#0066FF]">
                LENX TECH
              </h1>

              <p className="mt-1 text-xs tracking-[8px] text-[#FF6B00]">
                ENTERPRISE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">

            {/* Products */}
            <div className="group relative">
              <Link
                href="/products"
                className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#0066FF]"
              >
                Products
                <ChevronDown size={16} />
              </Link>

              <MegaMenu />
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#0066FF]">
                Applications
                <ChevronDown size={16} />
              </button>

              <div
                className="
        invisible
        absolute
        left-0
        top-full
        z-50
        mt-4
        w-80
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-3
        opacity-0
        shadow-xl
        transition-all
        group-hover:visible
        group-hover:opacity-100
      "
              >
                <div className="mb-3 px-4 py-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                    Applications
                  </p>
                </div>

                <Link
                  href="/applications/medical-healthcare"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Medical & Healthcare
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Precision components for medical devices.
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>

                <Link
                  href="/applications/automotive-electronics"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Automotive Electronics
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Reliable solutions for automotive systems.
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>
                <Link
                  href="/applications/telecommunications"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Tele Communications
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Best in market for Telecommunications.
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>
                <Link
                  href="/applications/defense-aerospace-naval"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Defense,AeroSpace and Navy
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Quality Components for Defense systems.
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>
                <Link
                  href="/applications/data-centers"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Data Centers
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Reliable products for data-centers
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>
                <Link
                  href="/applications/ev-infrastructure"
                  className="group/item flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-[#EEF5FF]"
                >
                  <div>
                    <h4 className="font-semibold text-[#071B4D]">
                      Ev Infrastructure
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Reliable solutions for Ev infrastructure.
                    </p>
                  </div>

                  <ChevronDown
                    size={16}
                    className="rotate-[-90deg] text-[#0066FF] opacity-0 transition group-hover/item:opacity-100"
                  />
                </Link>
              </div>
            </div>

            {/* PCB */}
            <Link
              href="/pcb"
              className="font-medium text-slate-700 transition hover:text-[#0066FF]"
            >
              PCB
            </Link>

            {/* Services */}
            <div className="group relative">
              <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#0066FF]">
                Services
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-4 w-80 rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

                <Link href="/services/hard-to-find-sourcing" className="block rounded-xl px-4 py-3 hover:bg-slate-50">
                  Hard-to-Find Sourcing
                </Link>

                <Link href="/services/risk-control-quality-assurance" className="block rounded-xl px-4 py-3 hover:bg-slate-50">
                  Risk Control & Quality Assurance
                </Link>

                <Link href="/services/global-supply-chain-access" className="block rounded-xl px-4 py-3 hover:bg-slate-50">
                  Global Supply Chain Access
                </Link>

                <Link href="/services/engineered-alternatives" className="block rounded-xl px-4 py-3 hover:bg-slate-50">
                  Engineered Alternatives
                </Link>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className="font-medium text-slate-700 transition hover:text-[#0066FF]"
            >
              About Us
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="font-medium text-slate-700 transition hover:text-[#0066FF]"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="
        inline-flex
        items-center
        rounded-full
        bg-[#0066FF]
        px-7
        py-3.5
        text-sm
        font-semibold
        text-white
        transition
        hover:bg-[#0052CC]
      "
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#0066FF] lg:hidden"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-black lg:hidden">

          <Container>
            <div className="flex flex-col gap-5 py-6">

              <Link href="/products">Products</Link>

              <Link href="/applications/medical-healthcare">
                Medical & Healthcare
              </Link>

              <Link href="/applications/automotive-electronics">
                Automotive Electronics
              </Link>
              <Link href="/applications/telecommunications">
                Tele Communications
              </Link>

              <Link href="/applications/defense-aerospace-naval">
                Defense, AeroSpace & Navy
              </Link>
              <Link href="/applications/data-centers">
                Data Centers
              </Link>

              <Link href="/applications/automotive-electronics">
                EV Infrastructure
              </Link>

              <Link href="/pcb">
                PCB
              </Link>

              <Link href="/services/hard-to-find-sourcing">
                Hard-to-Find Sourcing
              </Link>

              <Link href="/services/risk-control-quality-assurance">
                Risk Control & Quality Assurance
              </Link>

              <Link href="/services/global-supply-chain-access">
                Global Supply Chain Access
              </Link>

              <Link href="/services/engineered-alternatives">
                Engineered Alternatives
              </Link>

              <Link href="/about">
                About Us
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-[#0066FF]
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-white
                "
              >
                Request Quote
              </Link>

            </div>
          </Container>
        </div>
      )}

    </header>
  );
}