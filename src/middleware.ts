import { NextRequest, NextResponse, userAgent } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest): NextResponse | undefined {
  const { device, isBot } = userAgent(req);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  if (isBot) {
    return NextResponse.rewrite(req.url);
  } else {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-viewport', viewport);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }
}
