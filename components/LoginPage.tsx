"use client"


import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

export default function LoginForm() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
const router = useRouter();
const searchParams = useSearchParams();
const confirmed = searchParams.get("confirmed");

useEffect(() => {
  if (confirmed) {
    toast.success("Email confirmed. Please log in.");
  }
}, [confirmed]);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setIsLoading(true);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  setIsLoading(false);

  if (error) {
    setError(error.message);
    return;
  }

  if (data.user) {
    toast.success("Logged in successfully");

    // 🔁 Wait for session to settle before redirecting
    await new Promise((resolve) => setTimeout(resolve, 500));

    router.push("/dasboard");
  }
};


  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) console.error("Google sign-in error:", error.message);
  };


  return (
    <div className="w-full max-w-sm">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
       <Link className="text-sm text-amber-500  flex w-full justify-center mt-4" href="/sign-up">Don&apos;t have an account? Sign Up</Link>
        <div className="my-4 flex items-center justify-center text-gray-400 text-sm">
          <span className="border-t w-1/5"></span>
          <span className="mx-2">OR</span>
          <span className="border-t w-1/5"></span>
        </div>
        <Link href="/reset" className="text-sm text-amber-500 flex justify-center mb-4">
  Forgot your password?
</Link>

       
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border gap-2 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
