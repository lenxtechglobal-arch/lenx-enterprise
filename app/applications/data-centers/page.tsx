import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  dataCenterProducts,
  dataCenterManufacturers,
  dataCenterCategories,
} from "@/data/dataCenters";

export const metadata = {
  title: "Data Center Electronics | Lenx Tech Enterprise",
  description:
    "Electronic components and semiconductor solutions for data centers, cloud infrastructure, networking equipment, servers, storage systems and AI computing platforms.",
};

export default function DataCentersPage() {
  return (
    <main>
      <ApplicationHero
        badge="Data Centers"
        title="Powering Modern Data Center Infrastructure"
        description="Supporting data center operators, cloud providers and networking equipment manufacturers with high-performance computing, networking, power management and connectivity solutions."
        image="/applications/data-centers/hero.png"
      />

      <FeaturedProducts
        title="Featured Data Center Components"
        subtitle="High-performance components designed for servers, networking equipment and cloud infrastructure."
        products={dataCenterProducts}
      />

      <FeaturedManufacturers
        title="Leading Data Center Technology Manufacturers"
        subtitle="Partnering with globally recognized manufacturers driving modern data center innovation."
        manufacturers={dataCenterManufacturers}
      />

      <IndustryApplications
        title="Data Center Applications We Support"
        subtitle="Providing electronic solutions for high-performance computing and cloud infrastructure."
        applications={[
          {
            title: "Cloud Computing Platforms",
            description:
              "Scalable infrastructure solutions supporting cloud service providers.",
          },
          {
            title: "Enterprise Data Centers",
            description:
              "Reliable electronic components for enterprise-grade server environments.",
          },
          {
            title: "Hyperscale Data Centers",
            description:
              "Networking, power and processing solutions for large-scale facilities.",
          },
          {
            title: "Server Infrastructure",
            description:
              "High-performance processors, power management and connectivity technologies.",
          },
          {
            title: "Storage Systems",
            description:
              "Components supporting high-capacity storage and data processing platforms.",
          },
          {
            title: "AI & High-Performance Computing",
            description:
              "Advanced computing infrastructure for AI, analytics and machine learning workloads.",
          },
        ]}
      />

      <PopularCategories
        title="Popular Data Center Categories"
        subtitle="Frequently sourced categories for cloud, networking and server infrastructure."
        categories={dataCenterCategories.map((item) => ({
          title: item,
          image: "/categories/data-center-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why Data Center Companies Choose Lenx Tech"
        subtitle="Global sourcing expertise, manufacturer partnerships and reliable supply chain solutions."
      />

      <IndustryCTA
        title="Building Next-Generation Data Infrastructure?"
        description="Connect with Lenx Tech Enterprise for sourcing networking, power management, server and connectivity components from trusted global manufacturers."
      />
    </main>
  );
}