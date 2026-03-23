import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center pt-20 text-center">
      <h1 className="text-3xl font-bold mb-3">Welcome to AgencyFlow</h1>
      <p className="text-muted-foreground mb-8">
        Get started by adding your first client or project.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard/clients">
          <Button size="lg">Add Client</Button>
        </Link>
        <Link href="/dashboard/projects">
          <Button size="lg" variant="outline">Add Project</Button>
        </Link>
      </div>
    </div>
  );
}