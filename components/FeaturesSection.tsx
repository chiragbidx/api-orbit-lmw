import { getContent } from "@/content/content";

export const FeaturesSection = () => {
  const { features } = getContent();
  return (
    <section className="mx-auto max-w-4xl py-16 px-4">
      <h2 className="text-center text-2xl font-bold mb-10">{features.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.items.map((feature, idx) => (
          <div key={idx} className="rounded-xl bg-muted p-6 shadow-sm flex flex-col items-start">
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};