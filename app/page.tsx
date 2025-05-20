"use client";

import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#F7AB0A]">Welcome to SalesAI 🚀</h1>
        <p className="text-gray-600 text-lg">
          Supercharge your sales strategy with AI-powered insights, lead generation, and automation tools.
        </p>

        <div className="space-y-4">
          <Link
            href="/sign-up"
            className="block w-full bg-[#F7AB0A] text-white font-semibold py-3 rounded-xl hover:bg-[#e8a906] transition"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="block w-full text-[#F7AB0A] font-medium underline"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
