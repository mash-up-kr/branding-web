import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const authToken = request.headers.get('Authorization');

  if (!authToken) {
    throw new Error('Authorization Failed.');
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Set-Cookie', `token=${authToken}`);
  return response;
}

export const config = {
  matcher: '/mashong/:path*',
};
