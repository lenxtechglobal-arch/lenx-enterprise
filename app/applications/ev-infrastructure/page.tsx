import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  evProducts,
  evManufacturers,
  evCategories,
} from "@/data/evInfrastructure";

export const metadata = {
  title: "EV Infrastructure Electronics | Lenx Tech Enterprise",
  description:
    "Electronic components and semiconductor solutions for EV charging stations, battery management systems, energy storage platforms and electric vehicle infrastructure.",
};

export default function EVInfrastructurePage() {
  return (
    <main>
      <ApplicationHero
        badge="EV Infrastructure"
        title="Powering The Future Of Electric Mobility"
        description="Supporting EV charging equipment manufacturers, battery energy storage providers and power conversion system developers with reliable semiconductors, power electronics and connectivity solutions."
        image="/applications/ev-infrastructure/hero.png"
      />

      <FeaturedProducts
        title="Featured EV Infrastructure Components"
        subtitle="Power electronics, battery management and connectivity solutions for next-generation EV infrastructure."
        products={evProducts}
      />

      <FeaturedManufacturers
        title="Leading EV Technology Manufacturers"
        subtitle="Partnering with globally recognized manufacturers supporting electric mobility and energy infrastructure."
        manufacturers={evManufacturers}
      />

      <IndustryApplications
        title="EV Infrastructure Applications We Support"
        subtitle="Providing electronic solutions for electric vehicle charging and energy systems."
        applications={[
          {
            title: "DC Fast Charging Stations",
            description:
              "High-power semiconductor and control solutions for rapid EV charging infrastructure.",
          },
          {
            title: "AC EV Chargers",
            description:
              "Reliable power conversion and management components for residential and commercial charging systems.",
          },
          {
            title: "Battery Energy Storage Systems",
            description:
              "Battery monitoring, protection and power management technologies.",
          },
          {
            title: "Smart Charging Networks",
            description:
              "Connectivity and control solutions for intelligent charging infrastructure.",
          },
          {
            title: "Renewable Energy Integration",
            description:
              "Electronic systems enabling solar, storage and EV charging ecosystem integration.",
          },
          {
            title: "Vehicle-To-Grid Systems",
            description:
              "Advanced power management solutions supporting bidirectional energy flow.",
          },
        ]}
      />

      <PopularCategories
        title="Popular EV Infrastructure Categories"
        subtitle="Frequently sourced categories for EV charging and energy infrastructure projects."
        categories={evCategories.map((item) => ({
          title: item,
          image: "/categories/ev-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why EV Infrastructure Companies Choose Lenx Tech"
        subtitle="Access to global manufacturers, reliable sourcing and strong supply chain support for critical EV projects."
      />

      <IndustryCTA
        title="Building EV Charging Infrastructure?"
        description="Connect with Lenx Tech Enterprise for sourcing power semiconductors, battery management ICs, sensors and connectivity solutions from trusted global manufacturers."
      />
    </main>
  );
}