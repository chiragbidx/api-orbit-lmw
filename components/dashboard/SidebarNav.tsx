import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/clients", label: "Clients" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/campaigns", label: "Campaigns" },
  { href: "/dashboard/reports", label: "Reports" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function SidebarNav() {
  const pathname = typeof window === 'undefined' ? "" : window.location.pathname;

  return (
    <aside className="w-60 bg-card border-r border-border flex flex-col py-8">
      <div className="flex items-center justify-center mb-12">
        <span className="text-[20px] font-bold tracking-tight">AgencyFlow</span>
      </div>
      <nav className="flex flex-col gap-2 px-6">
        {sidebarLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted transition-colors",
              (typeof window !== "undefined" &&
                window.location.pathname.startsWith(item.href))
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}