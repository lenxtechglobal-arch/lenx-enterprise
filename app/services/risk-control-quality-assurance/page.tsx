import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata = {
  title: "Risk Control & Quality Assurance | Lenx Tech Enterprise",
  description:
    "Quality assurance, supplier verification and risk control solutions for electronic component procurement.",
};

export default function RiskControlQualityAssurancePage() {
  return (
    <main>
      {/* Hero */}
      <ServiceHero
        badge="Quality Assurance"
        title="Risk Control & Quality Assurance"
        description="Protecting your supply chain through supplier verification, component inspection, traceability validation and quality assurance processes. Lenx Tech Enterprise helps organizations minimize procurement risks and ensure component reliability."
        image="/services/risk-control-quality-assurance/hero.png"
      />

      {/* Features */}
      <ServiceFeatures
        title="Quality Assurance Capabilities"
        subtitle="Comprehensive quality processes designed to support reliable component procurement."
        features={[
          {
            title: "Supplier Verification",
            description:
              "Evaluate and approve suppliers through qualification procedures and risk assessments.",
          },
          {
            title: "Visual Inspection",
            description:
              "Inspection processes designed to identify defects, inconsistencies and potential quality concerns.",
          },
          {
            title: "Documentation Validation",
            description:
              "Verification of traceability, compliance records and procurement documentation.",
          },
          {
            title: "Counterfeit Risk Mitigation",
            description:
              "Quality procedures aimed at reducing counterfeit component risks within the supply chain.",
          },
        ]}
      />

      {/* Process */}
      <ServiceProcess
        title="Our Quality Assurance Process"
        subtitle="A structured approach to supplier verification and component quality control."
        steps={[
          {
            title: "Supplier Assessment",
            description:
              "Evaluate supplier credentials, history and procurement reliability.",
          },
          {
            title: "Documentation Review",
            description:
              "Validate certifications, traceability records and compliance documents.",
          },
          {
            title: "Component Inspection",
            description:
              "Conduct inspection procedures to identify quality concerns.",
          },
          {
            title: "Risk Evaluation",
            description:
              "Assess procurement risks and establish mitigation strategies.",
          },
          {
            title: "Approval & Delivery",
            description:
              "Approved components proceed through fulfillment and delivery.",
          },
        ]}
      />

      {/* Benefits */}
      <ServiceBenefits
        title="Benefits Of Quality Assurance"
        subtitle="Building confidence in every component procurement decision."
        benefits={[
          "Reduced Procurement Risk",
          "Verified Components",
          "Supply Chain Transparency",
          "Consistent Product Quality",
          "Supplier Validation",
          "Improved Traceability",
          "Counterfeit Risk Reduction",
          "Procurement Confidence",
        ]}
      />

      {/* CTA */}
      <ServiceCTA
        title="Strengthen Your Supply Chain With Verified Components"
        description="Lenx Tech Enterprise helps organizations improve procurement confidence through supplier verification, traceability validation and quality assurance processes."
      />
    </main>
  );
}