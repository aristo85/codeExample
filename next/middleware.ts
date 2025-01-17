import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {jwtCookieDecode, jwtUserStatusDecode} from './modules/core/services';
import {RoleTypes} from '@/modules/auth/authSlice';
import {UserStatus} from '@/modules/core/api/model/user/userStatus';

export async function middleware(request: NextRequest) {
  // Extract the token from the URL path
  const urlObject = new URL(request.url);
  const pathname = urlObject.pathname;
  const pathParts = pathname.split('/').filter(Boolean);
  const token = pathParts[pathParts.length - 1];

  if (pathParts.includes('auth')) {
    const redirectUrl =
      pathParts[1] === 'confirm-email'
        ? `/?regtoken=${token}`
        : pathParts[1] === 'restore-password'
        ? `/?resettoken=${token}`
        : '/';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  const user = jwtCookieDecode(request.headers.get('cookie') || '')?.user;
  const userStatus = jwtUserStatusDecode(request.headers.get('cookie') || '');
  const isControlPanel = pathParts.includes('control-panel');
  const isProfile = pathParts.includes('profile');
  const isConfirmPage =
    pathParts.includes('booking') || pathParts.includes('confirm');
  const partnerRole = user?.roleType === RoleTypes.PARTNER;

  // If status of a partner user === CHECKING CONTRACT then redirect to profile
  if (userStatus === UserStatus.CHECKING_CONTRACT && partnerRole) {
    return NextResponse.rewrite(new URL('/profile', request.url));
  }

  if (!user) {
    return isProfile || isControlPanel
      ? NextResponse.redirect(new URL('/?modal=login', request.url))
      : NextResponse.next();
  }

  if (partnerRole) {
    return isProfile || isControlPanel || isConfirmPage
      ? NextResponse.next()
      : NextResponse.redirect(new URL('/control-panel', request.url));
  } else {
    return isControlPanel
      ? NextResponse.redirect(new URL('/profile', request.url))
      : NextResponse.next();
  }
}

export const config = {
  // watched routes
  matcher: [
    '/',
    '/auth/:path*',
    '/profile/:path*',
    '/control-panel/:path*',
    '/booking/:path*',
    '/placement/:path*',
    '/excursion/:path*',
    '/guide/:path*',
  ],
};
