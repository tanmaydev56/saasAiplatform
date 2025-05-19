'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from './supabase/client';

export function useAuth() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (authError) {
      setError(authError.message);
      return { error: authError.message };
    }

    router.refresh();
    return { error: null };
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    setIsLoading(false);

    if (authError) {
      setError(authError.message);
      return { error: authError.message };
    }

    router.refresh();
    return { error: null };
  };

  return { signIn, signUp, error, isLoading };
}
