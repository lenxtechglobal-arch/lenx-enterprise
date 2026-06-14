import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Global Supply Chain Access | Lenx Tech Enterprise",
  description:
    "Worldwide sourcing, procurement and supply chain solutions for electronic components.",
};

export default function GlobalSupplyChainAccessPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        badge="Global Network"
        title="Global Supply Chain Access"
        description="Connecting your business to worldwide inventory, manufacturers and procurement opportunities. Lenx Tech Enterprise helps organizations access electronic components through a global sourcing and supply chain ecosystem."
        image="/services/global-supply-chain-access/hero.png"
      />

      {/* Features */}
      <ServiceFeatures
        title="Global Procurement Capabilities"
        subtitle="Expanding sourcing opportunities through worldwide supplier and manufacturer access."
        features={[
          {
            title: "Worldwide Supplier Network",
            description:
              "Access trusted suppliers and distributors across major global markets.",
          },
          {
            title: "Inventory Visibility",
            description:
              "Broader visibility into component availability and inventory opportunities.",
          },
          {
            title: "Procurement Support",
            description:
              "Strategic sourcing assistance to help secure components efficiently.",
          },
          {
            title: "Logistics Coordination",
            description:
              "Coordinated supply chain and logistics support for global deliveries.",
          },
        ]}
      />

      {/* Process */}
      <ServiceProcess
        title="Our Global Supply Process"
        subtitle="A streamlined approach to sourcing and delivering components worldwide."
        steps={[
          {
            title: "Requirement Analysis",
            description:
              "Understand sourcing requirements, volumes and timelines.",
          },
          {
            title: "Global Market Search",
            description:
              "Search global supplier networks and manufacturer channels.",
          },
          {
            title: "Inventory Matching",
            description:
              "Identify suitable inventory and procurement opportunities.",
          },
          {
            title: "Supply Coordination",
            description:
              "Coordinate procurement, logistics and fulfillment activities.",
          },
          {
            title: "Global Delivery",
            description:
              "Ensure reliable delivery through trusted logistics partners.",
          },
        ]}
      />

      {/* Benefits */}
      <ServiceBenefits
        title="Benefits Of Global Supply Chain Access"
        subtitle="Expanding sourcing capabilities through worldwide procurement opportunities."
        benefits={[
          "Broader Inventory Access",
          "Reduced Lead Times",
          "Flexible Procurement",
          "Global Reach",
          "Strategic Sourcing Support",
          "Improved Availability",
          "Worldwide Supplier Network",
          "Supply Chain Resilience",
        ]}
      />

      {/* CTA */}
      <ServiceCTA
        title="Unlock Global Component Sourcing Opportunities"
        description="Partner with Lenx Tech Enterprise to access worldwide inventory, trusted suppliers and strategic procurement solutions that support your business goals."
      />
    </main>
  );
}