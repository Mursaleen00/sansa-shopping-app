import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl.clone();

  console.log('Token:', token);
  console.log('Pathname:', pathname);

  const publicRoutes = ['/sign-in', '/sign-up'];
  const protectedRoutes = ['/cart', '/profile'];

  // Redirect authenticated users away from sign-in/sign-up
  if (token && publicRoutes.includes(pathname)) {
    console.log('Redirecting authenticated user from public route to home');
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirect unauthenticated users away from protected routes
  if (!token && protectedRoutes.includes(pathname)) {
    console.log(
      'Redirecting unauthenticated user from protected route to sign-in',
    );
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // Allow the request to proceed if it's neither a public nor protected route
  console.log('Allowing request to proceed');
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
