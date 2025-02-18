'use client'

import Image from 'next/image'
import AboutUsImage from '../../../../../../public/About us page-bro.svg'
import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const About = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations('about')

  return (
    <section className="bg-white" id="/">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">
        <div className="flex flex-col gap-3">
          <InViewTransition delay={0}>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              {t('section_title')}
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
              {t('heading')}{' '}
              <span className="text-accent">{t('heading1')}</span>{' '}
              {t('heading3')}
            </h2>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              {t('description')}
            </p>
          </InViewTransition>

          <InViewTransition delay={0.5}>
            <Link
              className="w-fit px-3 py-2.5 bg-accent rounded-md text-white text-sm"
              href={`/${language}/about`}
            >
              {t('button')}
            </Link>
          </InViewTransition>
        </div>

        <InViewTransition delay={0.25}>
          <div className="relative flex justify-center">
            <div className="relative w-[90%] max-w-xl">
              <Image
                src={AboutUsImage}
                alt={t('section_title')}
                width={600}
                height={500}
              />
            </div>
          </div>
        </InViewTransition>
      </div>
    </section>
  )
}

export default About
