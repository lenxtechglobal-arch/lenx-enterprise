import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  telecommunicationsProducts,
  telecommunicationsManufacturers,
  telecommunicationsCategories,
} from "@/data/telecommunications";

export const metadata = {
  title: "Telecommunications Industry | Lenx Tech Enterprise",
  description:
    "Electronic components and semiconductor solutions for telecom infrastructure, wireless communication, networking equipment, RF systems and connectivity technologies.",
};

export default function TelecommunicationsPage() {
  return (
    <main>
      <ApplicationHero
        badge="Telecommunications"
        title="Enabling Next-Generation Communication Infrastructure"
        description="Supporting telecom equipment manufacturers, network providers and communication system integrators with RF, networking, timing and connectivity solutions for reliable global communications."
        image="/applications/telecommunications/hero.png"
      />

      <FeaturedProducts
        title="Featured Telecom Components"
        subtitle="High-performance communication and networking solutions from leading semiconductor manufacturers."
        products={telecommunicationsProducts}
      />

      <FeaturedManufacturers
        title="Leading Telecom Technology Manufacturers"
        subtitle="Partnering with globally trusted semiconductor and networking solution providers."
        manufacturers={telecommunicationsManufacturers}
      />

      <IndustryApplications
        title="Telecommunications Applications We Support"
        subtitle="Providing electronic solutions for modern communication infrastructure."
        applications={[
          {
            title: "5G Infrastructure",
            description:
              "High-performance RF, timing and networking components for 5G deployments.",
          },
          {
            title: "Base Stations",
            description:
              "Reliable communication components for wireless network infrastructure.",
          },
          {
            title: "Fiber Optic Networks",
            description:
              "Supporting high-speed data transmission and optical communication systems.",
          },
          {
            title: "Network Switching Equipment",
            description:
              "Advanced networking ICs and connectivity solutions for switching platforms.",
          },
          {
            title: "Wireless Communication Systems",
            description:
              "RF front-end and wireless connectivity solutions for communication devices.",
          },
          {
            title: "Telecom Power Systems",
            description:
              "Power management and monitoring solutions for telecom infrastructure.",
          },
        ]}
      />

      <PopularCategories
        title="Popular Telecommunications Categories"
        subtitle="Frequently sourced component categories for telecom and networking applications."
        categories={telecommunicationsCategories.map((item) => ({
          title: item,
          image: "/categories/telecommunications-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why Telecom Companies Choose Lenx Tech"
        subtitle="Global sourcing expertise, manufacturer access and reliable component procurement."
      />

      <IndustryCTA
        title="Looking For Telecom Components?"
        description="Connect with Lenx Tech Enterprise for sourcing RF, networking, timing and communication components from trusted global manufacturers."
      />
    </main>
  );
}