import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl.clone();

  console.log('Token:', token);
  console.log('Pathname:', pathname);

  const publicRoutes = ['/sign-in', '/sign-up'];
  const protectedRoutes = ['/cart', '/profile'];

  if (!token && protectedRoutes.includes(pathname))
    return NextResponse.redirect(new URL('/sign-in', req.url));

  if (token && publicRoutes.includes(pathname))
    return NextResponse.redirect(new URL('/', req.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
