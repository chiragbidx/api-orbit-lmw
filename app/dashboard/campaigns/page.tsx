import { Button } from "@/components/ui/button";

export default function CampaignsPage() {
  return (
    <div className="max-w-xl mx-auto pt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      <p className="text-muted-foreground mb-8">
        No campaigns yet. Launch your first campaign.
      </p>
      <Button size="lg" className="mt-2">Add Campaign</Button>
    </div>
  );
}