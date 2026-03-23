import { getContent } from "@/content/content";

export const Navbar = () => {
  const { navbar } = getContent();

  return (
    <header className="px-10 pt-8">
      <span className="text-[26px] font-black tracking-tight">
        {navbar.brand}
      </span>
    </header>
  );
};