import { getContent } from "@/content/content";

export const TestimonialsSection = () => {
  const { testimonials } = getContent();

  return (
    <section className="bg-card py-16 px-4">
      <h2 className="text-center text-2xl font-bold">{testimonials.title}</h2>
      <p className="text-center text-base text-muted-foreground mt-2">{testimonials.subtitle}</p>
      {/* Add testimonial cards here in the future */}
    </section>
  );
};