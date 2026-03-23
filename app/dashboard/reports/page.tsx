import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <div className="max-w-xl mx-auto pt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p className="text-muted-foreground mb-8">
        No reports available yet. Reports will appear as you add clients and projects.
      </p>
      <Button size="lg" className="mt-2">Learn More</Button>
    </div>
  );
}