import { NextRequest, NextResponse } from 'next/server';

import { middleware } from '../middleware';

const ua = `Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36`;

const makeRequest = (userAgent: string = ua) =>
  ({
    headers: {
      get: () => userAgent,
      'user-agent': userAgent,
    },
    nextUrl: {
      host: 'localhost:3000',
      hostname: 'localhost',
      href: 'http://localhost:3000/logo.svg',
      origin: 'http://localhost:3000',
      pathname: '/logo.svg',
    },
    url: 'http://localhost:3000/logo.svg',
  }) as unknown as NextRequest;

describe('middleware()', () => {
  let rewriteSpy: jest.SpyInstance;
  let nextSpy: jest.SpyInstance;

  beforeEach(() => {
    rewriteSpy = jest.spyOn(NextResponse, 'rewrite');
    nextSpy = jest.spyOn(NextResponse, 'next');
  });

  afterEach(() => {
    rewriteSpy.mockRestore();
    nextSpy.mockRestore();
  });

  describe('redirect', () => {
    it('redirects to /404 if isBot', async () => {
      await middleware(makeRequest('Googlebot'));

      expect(rewriteSpy).toHaveBeenCalled();
    });

    it('should not redirect to /404 if not isBot', async () => {
      await middleware(makeRequest());

      expect(rewriteSpy).not.toHaveBeenCalled();
    });

    it('adds x-viewport header', async () => {
      const request = makeRequest();
      await middleware(request);

      expect(nextSpy).toHaveBeenCalled();
      expect(
        nextSpy.mock.calls[0][0].request.headers.get('x-viewport')
      ).toEqual('mobile');
    });
  });
});
