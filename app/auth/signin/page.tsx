import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Sign in to AgencyFlow</h1>
        <p className="text-muted-foreground mb-8">Your agency workspace awaits.</p>
        {/* Placeholder for sign-in form */}
        <Button className="w-full mb-4 text-base">Sign In</Button>
        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 underline">Sign up now.</Link>
        </p>
      </div>
    </div>
  );
}