import type { Metadata } from 'next'

import Template from './template'
import './globals.css'
// css
import './css/theme.css'
import './css/skin-creative-agency-2.css'
import './css/demo-creative-agency-2.css'
import './css/bootstrap.min.css'
import ScrollButton from './components/sections/scroll-button'
import EvangelismFormModal from './components/sections/evangelism-form'
import Nav from './components/navbar/nav'
import Footer from './components/footer/footer'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import splitbee from '@splitbee/web'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: 'Generated by create next app',
  icons: [
    { rel: 'icon', url: '/logo.ico' },
    { rel: 'apple-touch-icon', url: '/logo.ico' }
  ],
  title: 'Arise for Christ'
}

splitbee.init()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Template>
            <Nav />
            {children}
            <Footer />
          </Template>
          <EvangelismFormModal />
        </NextIntlClientProvider>
        <ScrollButton />

        {/* analytics */}
        <Analytics />
        <Script async={true} src="https://cdn.splitbee.io/sb.js"></Script>
      </body>
    </html>
  )
}
