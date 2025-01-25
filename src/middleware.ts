import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl.clone();

  const publicRoutes = [
    '/sign-in',
    '/sign-up',
    '/contact',
    '/product',
    '/about',
    '/favorite',
  ];

  const protectedRoutes = ['/cart', '/profile'];

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return NextResponse.next();
}
