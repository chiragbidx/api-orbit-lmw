import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-xl mx-auto pt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="text-muted-foreground mb-8">
        No projects yet. Start by creating a new project.
      </p>
      <Button size="lg" className="mt-2">Add Project</Button>
    </div>
  );
}