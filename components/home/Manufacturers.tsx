import Container from "@/components/shared/Container";

const manufacturers = [
  {
    name: "Texas Instruments",
    logo: "/manufacturers/ti.png",
  },
  {
    name: "Microchip",
    logo: "/manufacturers/microchip.webp",
  },
  {
    name: "NXP",
    logo: "/manufacturers/nxp.png",
  },
  {
    name: "STMicroelectronics",
    logo: "/manufacturers/st.png",
  },
  {
    name: "Infineon",
    logo: "/manufacturers/infineon.webp",
  },
  {
    name: "Analog Devices",
    logo: "/manufacturers/adi.jpg",
  },
  {
    name: "Renesas",
    logo: "/manufacturers/renesas.png",
  },
  {
    name: "Qorvo",
    logo: "/manufacturers/qorvo.png",
  },
  {
    name: "Intel",
    logo: "/manufacturers/intel.png",
  },
  {
    name: "AMD",
    logo: "/manufacturers/amd.png",
  },
  {
    name: "Molex",
    logo: "/manufacturers/molex.png",
  },
  {
    name: "Amphenol",
    logo: "/manufacturers/amphenol.png",
  },
];

export default function Manufacturers() {
  const duplicatedManufacturers = [
    ...manufacturers,
    ...manufacturers,
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0084FF15,transparent_40%)]" />

      <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#0084FF]/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#FF7A00]/10 blur-[140px]" />

      <div className="absolute left-0 top-1/2 h-[300px] w-[300px] rounded-full bg-[#0084FF]/10 blur-[120px]" />

      <Container>
        {/* Header */}
        <div className="relative text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#0084FF]/30
              bg-[#0084FF]/10
              px-6
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#6DB8FF]
              backdrop-blur-xl
            "
          >
            Global Manufacturer Network
          </span>

          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight text-white lg:text-6xl">
            Authorized Access to
            <span className="block bg-gradient-to-r from-[#0084FF] via-[#4DB4FF] to-[#FF7A00] bg-clip-text text-transparent">
              World-Class Technology Brands
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Partnering with leading semiconductor, connectivity,
            embedded, industrial automation and power management
            manufacturers to deliver authentic electronic
            components worldwide.
          </p>
        </div>

        {/* Manufacturers Slider */}
        <div className="relative mt-24 overflow-hidden">
          {/* Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#030712] to-transparent" />

          <div className="flex gap-8 animate-[scroll_35s_linear_infinite]">
            {duplicatedManufacturers.map(
              (manufacturer, index) => (
                <div
                  key={`${manufacturer.name}-${index}`}
                  className="
                    group
                    flex
                    h-32
                    min-w-[240px]
                    items-center
                    justify-center
                    rounded-[28px]
                    border
                    border-white/10
                    bg-gradient-to-b
                    from-white/[0.06]
                    to-white/[0.02]
                    px-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#0084FF]/40
                    hover:shadow-[0_0_40px_rgba(0,132,255,0.15)]
                  "
                >
                  <img
                    src={manufacturer.logo}
                    alt={manufacturer.name}
                    className="
                      max-h-12
                      w-auto
                      object-contain
                      opacity-70
                      grayscale
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "85+",
              label: "Global Manufacturers",
            },
            {
              value: "500K+",
              label: "Components Available",
            },
            {
              value: "100%",
              label: "Authentic Components",
            },
            {
              value: "24/7",
              label: "Global Sourcing Support",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                text-center
                backdrop-blur-xl
              "
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0084FF] to-transparent" />

              <h3 className="bg-gradient-to-r from-[#0084FF] to-[#FF7A00] bg-clip-text text-5xl font-bold text-transparent">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Statement Block */}
        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#071324]
            via-[#091827]
            to-[#121212]
            p-14
            backdrop-blur-xl
          "
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,132,255,0.08),transparent,rgba(255,122,0,0.08))]" />

          <div className="relative text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#FF7A00]/20
                bg-[#FF7A00]/10
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#FF9D4D]
              "
            >
              Trusted Supply Chain
            </span>

            <h3 className="mt-6 text-4xl font-bold text-white">
              Reliable Supply. Genuine Components.
              <span className="block mt-2 bg-gradient-to-r from-[#0084FF] to-[#FF7A00] bg-clip-text text-transparent">
                Enterprise-Level Procurement Excellence
              </span>
            </h3>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
              Lenx Tech Enterprise supports OEMs, EMS providers,
              engineering teams and product innovators with
              dependable sourcing solutions for semiconductors,
              embedded systems, RF devices, sensors, passives,
              power electronics and interconnect technologies.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}