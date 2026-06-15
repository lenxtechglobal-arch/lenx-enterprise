import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  defenseProducts,
  defenseManufacturers,
  defenseCategories,
} from "@/data/defenseAerospaceNaval";

export const metadata = {
  title:
    "Defense, Aerospace & Naval Electronics | Lenx Tech Enterprise",
  description:
    "MIL-grade electronic components, semiconductors, RF systems, embedded processors, connectivity solutions and high-reliability electronics for defense, aerospace and naval applications.",
};

export default function DefenseAerospaceNavalPage() {
  return (
    <main>
      <ApplicationHero
        badge="Defense, Aerospace & Naval"
        title="Mission-Critical Electronics For Defense & Aerospace Systems"
        description="Supporting defense contractors, aerospace manufacturers and naval system integrators with high-reliability semiconductors, RF communication devices, embedded processing platforms and rugged connectivity solutions."
        image="/applications/defense-aerospace-naval/hero.png"
      />

      <FeaturedProducts
        title="Featured Defense & Aerospace Components"
        subtitle="High-reliability electronic components trusted in mission-critical applications."
        products={defenseProducts}
      />

      <FeaturedManufacturers
        title="Leading Defense Technology Manufacturers"
        subtitle="Partnering with globally recognized manufacturers supporting defense and aerospace programs."
        manufacturers={defenseManufacturers}
      />

      <IndustryApplications
        title="Defense & Aerospace Applications We Support"
        subtitle="Providing reliable electronic solutions for critical defense, aerospace and naval systems."
        applications={[
          {
            title: "Radar Systems",
            description:
              "Advanced RF, signal processing and embedded solutions for radar platforms.",
          },
          {
            title: "Military Communications",
            description:
              "Secure communication infrastructure and networking solutions.",
          },
          {
            title: "Satellite Electronics",
            description:
              "High-reliability components for satellite communication and space systems.",
          },
          {
            title: "Avionics Systems",
            description:
              "Embedded processing, sensing and power management for aerospace electronics.",
          },
          {
            title: "Naval Defense Systems",
            description:
              "Ruggedized components for marine and naval communication platforms.",
          },
          {
            title: "Electronic Warfare Systems",
            description:
              "High-performance RF and processing technologies for defense operations.",
          },
        ]}
      />

      <PopularCategories
        title="Popular Defense & Aerospace Categories"
        subtitle="Frequently sourced categories for defense, aerospace and naval applications."
        categories={defenseCategories.map((item) => ({
          title: item,
          image: "/categories/defense-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why Defense & Aerospace Companies Choose Lenx Tech"
        subtitle="Access to global manufacturers, high-reliability sourcing and quality-focused supply chain support."
      />

      <IndustryCTA
        title="Need Mission-Critical Components?"
        description="Connect with Lenx Tech Enterprise for sourcing MIL-grade components, RF solutions, embedded processors and high-reliability electronics from trusted global manufacturers."
      />
    </main>
  );
}