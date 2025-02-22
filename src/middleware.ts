// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import authConfig from '@/lib/auth.config';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextRequest } from 'next/server';

const { auth } = NextAuth(authConfig);

// Xử lý authentication
export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, '/');
    return Response.redirect(url);
  }
});

// Xử lý i18n sau
export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// Áp dụng middleware cho cả dashboard và i18n routing
export const config = {
  matcher: [
    '/dashboard/:path*', // Middleware auth áp dụng cho dashboard
    '/((?!api|static|.*\\..*|_next).*)' // Middleware i18n áp dụng cho toàn bộ ứng dụng
  ]
};
