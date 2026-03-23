import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Choose a new password</h1>
        <p className="text-muted-foreground mb-8">Secure your AgencyFlow account.</p>
        {/* Placeholder for new password form */}
        <Button className="w-full mb-4 text-base">Reset Password</Button>
      </div>
    </div>
  );
}