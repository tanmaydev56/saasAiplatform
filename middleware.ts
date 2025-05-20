// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protected routes - require authentication
  const protectedRoutes = [, '/settings', '/profile'];
  
  // Auth routes - should not be accessible when logged in
  const authRoutes = [
    '/sign-in',
    '/sign-up',
    '/reset',
    '/change-password'
  ];

  // If user is not logged in and trying to access protected route
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // If user is logged in and trying to access auth route
  if (session && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dasboard', req.url));
  }

  return res;
}

export const config = {
  matcher: [
    
    '/settings',
    '/profile',
    '/sign-in',
    '/sign-up',
    '/reset',
    '/change-password'
  ],
};