import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Create your AgencyFlow account</h1>
        <p className="text-muted-foreground mb-8">Start managing your agency today.</p>
        {/* Placeholder for sign-up form */}
        <Button className="w-full mb-4 text-base">Sign Up</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-600 underline">Sign in.</Link>
        </p>
      </div>
    </div>
  );
}