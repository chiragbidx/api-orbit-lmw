import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
        <p className="text-muted-foreground mb-8">Enter your email to receive reset instructions.</p>
        {/* Placeholder for reset form */}
        <Button className="w-full mb-4 text-base">Send Reset Link</Button>
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/auth/signin" className="text-blue-600 underline">Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}