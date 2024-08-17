import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const authToken = request.headers.get('Authorization');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (authToken) {
    response.headers.set('Set-Cookie', `token=${authToken}`);
  }

  return response;
}

export const config = {
  matcher: ['/mashong/:path*', '/birthday/:path*'],
};
