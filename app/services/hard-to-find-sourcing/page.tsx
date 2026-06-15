import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Hard-To-Find Electronic Components | Lenx Tech Enterprise",
  description:
    "Global sourcing solutions for obsolete, allocated and hard-to-find electronic components.",
};
export default function HardToFindSourcingPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        badge="Specialized Sourcing"
        title="Hard-To-Find Electronic Components"
        description="Locating obsolete, allocated and difficult-to-source electronic components through our extensive global supplier network. Lenx Tech Enterprise helps businesses maintain supply continuity and reduce production delays."
        image="/services/hard-to-find-sourcing/hero.png"
      />

      {/* Features */}
      <ServiceFeatures
        title="Specialized Sourcing Capabilities"
        subtitle="Helping organizations secure critical electronic components from trusted global sources."
        features={[
          {
            title: "Obsolete Components",
            description:
              "Source discontinued and end-of-life electronic components through our worldwide procurement network.",
            // image:
            //   "/services/hard-to-find-sourcing/obsolete-components.jpg",
          },
          {
            title: "Allocated Inventory Access",
            description:
              "Access difficult-to-procure inventory during market shortages and supply constraints.",
            // image:
            //   "/services/hard-to-find-sourcing/allocated-inventory.jpg",
          },
          {
            title: "Global Supplier Network",
            description:
              "Leverage our worldwide sourcing network to locate rare and hard-to-find components.",
            // image:
            //   "/services/hard-to-find-sourcing/global-suppliers.jpg",
          },
          {
            title: "Verified Sources",
            description:
              "All sourcing channels undergo supplier validation and verification procedures.",
            // image:
            //   "/services/hard-to-find-sourcing/verified-sources.jpg",
          },
        ]}
      />

      {/* Process */}
      <ServiceProcess
        title="Our Sourcing Process"
        subtitle="A structured sourcing methodology designed to locate and deliver difficult-to-source components efficiently."
        steps={[
          {
            title: "Submit Requirement",
            description:
              "Share your component requirements, quantities and project timelines.",
          },
          {
            title: "Global Search",
            description:
              "Our sourcing specialists search worldwide inventories and supplier networks.",
          },
          {
            title: "Source Verification",
            description:
              "Potential suppliers undergo verification and authenticity checks.",
          },
          {
            title: "Quality Review",
            description:
              "Components are evaluated through quality and compliance procedures.",
          },
          {
            title: "Delivery",
            description:
              "Secure logistics and delivery to your required destination.",
          },
        ]}
      />

      {/* Benefits */}
      <ServiceBenefits
        title="Benefits Of Hard-To-Find Sourcing"
        subtitle="Helping businesses maintain production continuity and overcome procurement challenges."
        benefits={[
          "Reduced Downtime",
          "Supply Continuity",
          "Access To Rare Components",
          "Faster Procurement",
          "Verified Supplier Network",
          "Reduced Supply Risk",
          "Global Inventory Access",
          "Project Continuity",
        ]}
      />

      {/* CTA */}
      <ServiceCTA
        title="Need Help Finding Hard-To-Source Components?"
        description="Leverage Lenx Tech Enterprise's global sourcing network to locate obsolete, allocated and difficult-to-find electronic components quickly and reliably."
      />
    </main>
  );
}