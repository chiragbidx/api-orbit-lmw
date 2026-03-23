import { getContent } from "@/content/content";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const { hero } = getContent();

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center py-16">
      <h1 className="max-w-xl text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[40px]">
        {hero.title}
      </h1>
      <p className="mt-6 text-[18px] leading-relaxed text-muted-foreground">
        {hero.subtitle}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Button size="lg" className="rounded-lg px-7 py-6 text-base font-semibold">
          {hero.primaryCta}
        </Button>
        <Button variant="outline" size="lg" className="rounded-lg px-7 py-6 text-base font-semibold">
          {hero.secondaryCta}
        </Button>
      </div>
    </section>
  );
};