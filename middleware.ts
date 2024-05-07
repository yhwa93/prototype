import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ko',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en|ja)/:path*'],
}
