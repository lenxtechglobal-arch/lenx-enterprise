import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Engineered Alternatives | Lenx Tech Enterprise",
  description:
    "Identify compatible alternative electronic components to reduce supply risk, improve availability and maintain production continuity.",
};

export default function EngineeredAlternativesPage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        badge="Engineering Support"
        title="Engineered Alternative Components"
        description="Reduce sourcing challenges and maintain production continuity with intelligent alternative component solutions. Lenx Tech Enterprise helps organizations identify compatible replacements while minimizing supply chain risk."
        image="/services/engineered-alternatives/hero.png"
      />

      {/* Features */}
      <ServiceFeatures
        title="Alternative Component Solutions"
        subtitle="Engineering-driven support to identify reliable alternatives and optimize procurement strategies."
        features={[
          {
            title: "Cross Reference Analysis",
            description:
              "Identify compatible alternative components using technical specifications, performance characteristics and application requirements.",
          },
          {
            title: "Lifecycle Assessment",
            description:
              "Evaluate component lifecycle status and availability to reduce future sourcing risks.",
          },
          {
            title: "Cost Optimization",
            description:
              "Explore alternative solutions that improve procurement efficiency and reduce total component costs.",
          },
          {
            title: "Engineering Support",
            description:
              "Work with sourcing and technical specialists to evaluate replacement options and implementation strategies.",
          },
        ]}
      />

      {/* Process */}
      <ServiceProcess
        title="Our Alternative Component Process"
        subtitle="A structured approach to finding reliable replacement components."
        steps={[
          {
            title: "Part Analysis",
            description:
              "Review the original component specifications, application requirements and performance criteria.",
          },
          {
            title: "Cross Reference Search",
            description:
              "Identify potential alternatives from trusted manufacturers and suppliers.",
          },
          {
            title: "Technical Evaluation",
            description:
              "Assess compatibility, functionality and long-term availability.",
          },
          {
            title: "Recommendation",
            description:
              "Provide suitable alternative options with supporting technical information.",
          },
          {
            title: "Supply Support",
            description:
              "Assist with sourcing, procurement and long-term supply planning.",
          },
        ]}
      />

      {/* Benefits */}
      <ServiceBenefits
        title="Benefits Of Engineered Alternatives"
        subtitle="Reduce dependency on single-source components while maintaining project continuity."
        benefits={[
          "Reduced Supply Risk",
          "Faster Component Availability",
          "Lower Procurement Costs",
          "Production Continuity",
          "Improved Supply Flexibility",
          "Lifecycle Risk Reduction",
          "Alternative Manufacturer Access",
          "Engineering Guidance",
        ]}
      />

      {/* CTA */}
      <ServiceCTA
        title="Need Alternative Components For Your Design?"
        description="Lenx Tech Enterprise can help identify compatible replacement components that support availability, reduce sourcing risk and keep your projects moving forward."
      />
    </main>
  );
}