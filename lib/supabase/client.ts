// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// This code creates and exports a Supabase client instance that you'll use throughout your 
// Next.js application to interact with your Supabase database, authentication, and storage. Here's exactly what it does:
// data base operations 
// Query data
// const { data, error } = await supabase
//   .from('documents')
//   .select('*')
//   .eq('user_id', userId);

// Insert data
// await supabase
//   .from('chats')
//   .insert({ message: "Hello", user_id: userId });

// Authenticaion
// Sign up users
// await supabase.auth.signUp({
//   email: 'user@example.com',
//   password: 'secure-password'
// });

// Sign in
// await supabase.auth.signInWithPassword({
//   email: 'user@example.com',
//   password: 'secure-password'
// });
// Storage
// Upload files
// await supabase.storage
//   .from('user-uploads')
//   .upload('path/to/file.pdf', file);

// Generate public URLs
// const { data: { publicUrl } } = supabase.storage
//   .from('bucket-name')
//   .getPublicUrl('file-path');
