import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  automotiveProducts,
  automotiveManufacturers,
  automotiveCategories,
} from "@/data/automotiveElectronics";

export const metadata = {
  title: "Automotive Electronics | Lenx Tech Enterprise",
  description:
    "Automotive-grade electronic components for EV, ADAS, battery management systems and vehicle electronics.",
};

export default function AutomotiveElectronicsPage() {
  return (
    <main>
      <ApplicationHero
        badge="Automotive Electronics"
        title="Driving The Future Of Connected Mobility"
        description="Automotive-grade semiconductors and electronic components supporting EV platforms, ADAS systems, connectivity and intelligent transportation."
        image="/applications/automotive-electronics/hero.png"
      />

      <FeaturedProducts
        title="Featured Automotive Components"
        subtitle="Automotive-grade electronic solutions for next-generation vehicles."
        products={automotiveProducts}
      />

      <FeaturedManufacturers
        title="Trusted Automotive Semiconductor Partners"
        subtitle="Working with globally recognized automotive electronics manufacturers."
        manufacturers={automotiveManufacturers}
      />

      <IndustryApplications
        title="Automotive Applications We Support"
        subtitle="Supporting innovation across modern mobility platforms."
        applications={[
          {
            title: "Electric Vehicles",
            description:
              "Power electronics and semiconductors for EV platforms.",
          },
          {
            title: "ADAS Systems",
            description:
              "Advanced driver assistance and autonomous technologies.",
          },
          {
            title: "Battery Management",
            description:
              "Efficient battery monitoring and management solutions.",
          },
          {
            title: "Vehicle Connectivity",
            description:
              "Connected car and communication technologies.",
          },
          {
            title: "Infotainment Systems",
            description:
              "Processors and memory solutions for vehicle infotainment.",
          },
          {
            title: "Body Electronics",
            description:
              "Electronic control systems for safety and convenience.",
          },
        ]}
      />

      <PopularCategories
        title="Popular Automotive Electronics Categories"
        subtitle="Frequently sourced categories for automotive applications."
        categories={automotiveCategories.map((item) => ({
          title: item,
          image: "/categories/automotive-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why Automotive Innovators Choose Lenx Tech"
        subtitle="Reliable sourcing, engineering support and global supply chain expertise."
      />

      <IndustryCTA
        title="Building The Next Generation Of Automotive Electronics?"
        description="Partner with Lenx Tech Enterprise for reliable sourcing of automotive-grade electronic components and semiconductor solutions."
      />
    </main>
  );
}