import Link from "next/link";

import Container from "@/components/shared/Container";

export default function PCBHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.08),transparent_35%)]" />

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#0066FF]/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#FF6B00]/5 blur-3xl" />

      <Container>
        <div className="py-16 lg:py-18">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-50
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#0066FF]
                "
              >
                PCB Solutions
              </span>

              <h1 className="mt-4 text-2xl font-bold leading-tight text-[#071B4D] lg:text-4xl">
                PCB Manufacturing,
                <span className="block text-[#0066FF]">
                  Assembly & BOM
                </span>
                Sourcing
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                From prototype development to production-ready PCB
                assembly, Lenx Tech Enterprise provides fabrication,
                assembly and component sourcing solutions through a
                single trusted partner.
              </p>

              {/* Highlights */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#0066FF]" />
                  <span className="font-medium text-slate-700">
                    PCB Fabrication
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#FF6B00]" />
                  <span className="font-medium text-slate-700">
                    PCB Assembly
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#0066FF]" />
                  <span className="font-medium text-slate-700">
                    Component Sourcing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#FF6B00]" />
                  <span className="font-medium text-slate-700">
                    Prototype Validation
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="#pcb-quote"
                  className="
                    rounded-xl
                    bg-[#0066FF]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#0052cc]
                  "
                >
                  Request PCB Quote
                </a>

                <Link
                  href="/contact"
                  className="
                    rounded-xl
                    border
                    border-slate-300
                    px-8
                    py-4
                    font-semibold
                    text-[#071B4D]
                    transition
                    hover:border-[#0066FF]
                    hover:text-[#0066FF]
                  "
                >
                  Talk To Expert
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div
                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-2xl
                "
              >
                <img
                  src="/pcb/pcb-hero.webp"
                  alt="PCB Manufacturing"
                  className="rounded-3xl"
                />

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#EEF5FF] p-5">
                    <h3 className="text-3xl font-bold text-[#0066FF]">
                      PCB
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Fabrication
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#FFF3E8] p-5">
                    <h3 className="text-3xl font-bold text-[#FF6B00]">
                      PCBA
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Assembly
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#EEF5FF] p-5">
                    <h3 className="text-3xl font-bold text-[#0066FF]">
                      BOM
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Sourcing
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#FFF3E8] p-5">
                    <h3 className="text-3xl font-bold text-[#FF6B00]">
                      QA
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Validation
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  -right-6
                  -bottom-6
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-xl
                "
              >
                <h4 className="text-3xl font-bold text-[#0066FF]">
                  End-to-End
                </h4>

                <p className="mt-2 text-slate-600">
                  PCB Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}