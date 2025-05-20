"use client"

import { useAuth } from "@/lib/provider"
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, error, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const GoogleLogin = async() =>{
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if(error){
      console.log(error);
    }
    
  }
  return (<div className="flex flex-col items-center bg-amber-300">
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="email"
        className="mb-2 border rounded-4xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
    </div>
  );
}