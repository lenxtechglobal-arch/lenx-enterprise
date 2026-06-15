import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  medicalProducts,
  medicalManufacturers,
  medicalCategories,
} from "@/data/medicalHealthcare";

export const metadata = {
  title: "Medical & Healthcare Electronics | Lenx Tech Enterprise",
  description:
    "Electronic components and semiconductor solutions for medical devices, diagnostics, imaging systems and healthcare innovation.",
};

export default function MedicalHealthcarePage() {
  return (
    <main>
      <ApplicationHero
        badge="Medical & Healthcare"
        title="Precision Electronics For Modern Healthcare"
        description="Supporting medical innovation through reliable electronic components, sensors, power solutions and semiconductor technologies for healthcare applications."
        image="/applications/medical-healthcare/hero.png"
      />

      <FeaturedProducts
        title="Featured Medical Components"
        subtitle="Healthcare-focused electronic components trusted by medical device manufacturers."
        products={medicalProducts}
      />

      <FeaturedManufacturers
        title="Leading Medical Electronics Manufacturers"
        subtitle="Partnering with globally recognized semiconductor and component manufacturers."
        manufacturers={medicalManufacturers}
      />

      <IndustryApplications
        title="Medical Applications We Support"
        subtitle="Enabling innovation across healthcare technologies."
        applications={[
          {
            title: "Patient Monitoring Systems",
            description:
              "Reliable components for monitoring critical patient health data.",
          },
          {
            title: "Diagnostic Equipment",
            description:
              "Precision electronics supporting advanced diagnostics.",
          },
          {
            title: "Medical Imaging",
            description:
              "Components for MRI, CT and imaging platforms.",
          },
          {
            title: "Laboratory Automation",
            description:
              "Electronic solutions for automated laboratory systems.",
          },
          {
            title: "Wearable Healthcare Devices",
            description:
              "Low-power components for connected healthcare devices.",
          },
          {
            title: "Portable Medical Equipment",
            description:
              "Compact power and sensing solutions for portable devices.",
          },
        ]}
      />

      <PopularCategories
        title="Popular Medical Electronics Categories"
        subtitle="Frequently sourced categories for healthcare applications."
        categories={medicalCategories.map((item) => ({
          title: item,
          image: "/categories/medical-category.jpg",
          href: "/products",
          products: "1000+ Products",
        }))}
      />

      <WhyChooseIndustry
        title="Why Healthcare Companies Choose Lenx Tech"
        subtitle="Trusted sourcing, quality assurance and global manufacturer access."
      />

      <IndustryCTA
        title="Need Components For Medical Innovation?"
        description="Connect with Lenx Tech Enterprise for sourcing healthcare-grade electronic components from trusted global manufacturers."
      />
    </main>
  );
}