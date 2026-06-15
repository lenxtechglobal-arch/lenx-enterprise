import Container from "@/components/shared/Container";

interface ApplicationItem {
  title: string;
  description: string;
}

interface IndustryApplicationsProps {
  badge?: string;
  title: string;
  subtitle: string;
  applications: ApplicationItem[];
}

export default function IndustryApplications({
  badge = "Industry Solutions",
  title,
  subtitle,
  applications,
}: IndustryApplicationsProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
            {badge}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#071B4D]">
            {title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item) => (
            <div
              key={item.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                transition-all
                hover:-translate-y-2
                hover:border-[#0066FF]
                hover:shadow-xl
              "
            >
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-[#071B4D]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}