"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold text-[#F7AB0A]">My SaaS AI Platform</h1>
      <div className="flex items-center space-x-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-[#F7AB0A] transition">
          Dashboard
        </Link>
        <Link href="/profile" className="text-gray-700 hover:text-[#F7AB0A] transition">
          Profile
        </Link>
      </div>
      {user && (
        <button
          onClick={handleLogout}
          className="bg-[#F7AB0A] text-black px-4 py-2 rounded hover:opacity-90 transition"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
