import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'fil',

  // A list of all locales that are supported
  locales: ['en', 'fil']
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fil|en)/:path*']
}
