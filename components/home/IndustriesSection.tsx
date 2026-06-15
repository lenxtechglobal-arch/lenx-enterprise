import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  HeartPulse,
  Car,
  Radio,
  Shield,
  BatteryCharging,
  Database,
  ArrowRight,
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Medical & Healthcare",
      href: "/applications/medical-healthcare",
      icon: HeartPulse,
      iconBg: "bg-blue-50",
      iconColor: "text-[#0066FF]",
      description:
        "Reliable components for diagnostic equipment, patient monitoring systems, medical imaging and healthcare electronics.",
    },

    {
      title: "Automotive Electronics",
      href: "/applications/automotive-electronics",
      icon: Car,
      iconBg: "bg-orange-50",
      iconColor: "text-[#FF6B00]",
      description:
        "Advanced semiconductor solutions for ADAS, EV platforms, infotainment and vehicle control systems.",
    },

    {
      title: "Telecommunications",
      href: "/applications/telecommunications",
      icon: Radio,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      description:
        "RF, networking and communication solutions for telecom infrastructure, fiber networks and wireless systems.",
    },

    {
      title: "Defense, Aerospace & Naval",
      href: "/applications/defense-aerospace-naval",
      icon: Shield,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      description:
        "MIL-grade components, RF systems, embedded processors and ruggedized connectivity solutions.",
    },

    {
      title: "EV Infrastructure",
      href: "/applications/ev-infrastructure",
      icon: BatteryCharging,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      description:
        "Power electronics, battery management and charging solutions for electric mobility infrastructure.",
    },

    {
      title: "Data Centers",
      href: "/applications/data-centers",
      icon: Database,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      description:
        "High-performance networking, power management and connectivity solutions for cloud and data center infrastructure.",
    },
  ];
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#071B4D]">
            Supporting Innovation Across
            <span className="block text-[#0066FF]">
              Critical Industries
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We help OEMs, product developers, engineering
            teams and manufacturers source reliable electronic
            components for mission-critical applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                href={industry.href}
                className="
          group
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-10
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#0066FF]
          hover:shadow-xl
        "
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${industry.iconBg}`}
                >
                  <Icon
                    size={32}
                    className={industry.iconColor}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#071B4D]">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-[#0066FF]">
                  Explore Industry

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}