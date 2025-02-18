'use client'

import CookieConsent from 'react-cookie-consent'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function CookieConsents() {
  const t = useTranslations('gdpr')

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CookieConsent
          buttonClasses="!bg-[#121212] !rounded-md !text-white !flex !font-semibold !justify-center !w-fit text-white !m-0 p-2 px-4"
          buttonText={t('agree')}
          containerClasses=" !bg-accent/[.7] p-8 relative flex !items-start gap-4 text-md md:text-lg backdrop-blur-md"
          contentClasses="!m-0 !p-0 flex items-start"
          expires={150}
          location="bottom"
        >
          <p className="m-0 p-0">
            {t('explanation')}
            <Link
              className="text-decoration-none font-weight-semibold font-poppins text-black"
              href="mailto:info@ariseforchrist.com"
            >
              info@ariseforchrist.com.
            </Link>
          </p>
        </CookieConsent>
      </motion.div>
    </AnimatePresence>
  )
}
