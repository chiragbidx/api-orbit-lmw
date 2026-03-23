import { getContent } from "@/content/content";

export const FooterSection = () => {
  const { footer } = getContent();

  return (
    <footer className="flex flex-col items-center justify-center py-12 px-4 gap-4 border-t border-border">
      <div className="text-center text-lg font-semibold">
        {footer.cta}
      </div>
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} AgencyFlow. Made by Chirag Dodiya
      </span>
    </footer>
  );
};