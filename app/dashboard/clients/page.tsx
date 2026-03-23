import { Button } from "@/components/ui/button";

export default function ClientsPage() {
  return (
    <div className="max-w-xl mx-auto pt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <p className="text-muted-foreground mb-8">
        No clients yet. Add your first client to get started.
      </p>
      <Button size="lg" className="mt-2">Add Client</Button>
    </div>
  );
}