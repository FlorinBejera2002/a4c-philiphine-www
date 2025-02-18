import InViewTransition from '../common/in-view-transition'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { FaChevronRight } from 'react-icons/fa'

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.vision' })

  return {
    description: t('description'),
    icons: [
      { rel: 'icon', url: '/logo.ico' },
      { rel: 'apple-touch-icon', url: '/logo.ico' }
    ],
    keywords: t('keywords'),
    og: {
      description: t('description'),
      title: t('title')
    },
    title: t('title')
  } as Metadata
}

export default function Vision() {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="w-full bg-gray-950 text-white pt-40 pb-12 flex flex-col items-center"
        style={{
          backgroundImage: 'url(/background-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h1 className="text-sm md:text-xl font-extrabold flex items-center text-accent">
          {t('header.home')}
          <FaChevronRight className="mx-2 h-4 w-4" />
          <span>{t('header.vision')}</span>
        </h1>

        <p className="mt-4 text-4xl mx-auto font-semibold">
          {t('header.vision')}
        </p>
      </div>

      <div className="bg-gray-100 w-full p-8">
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <InViewTransition delay={0}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-4xl">
              {t('vision.presentation_title')}
            </h1>
            <div className="grid gap-8">
              <p className="text-lg text-gray-700">
                {t('vision.presentation_p1_1')}
              </p>
              <p className="text-lg text-gray-700">
                {t('vision.presentation_p2')}
              </p>
            </div>
          </InViewTransition>

          <div className="mt-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-4xl">
              {t('vision.projects_title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InViewTransition delay={0.25}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('vision.projects_p1_2')}
                  </h3>
                  <p className="text-gray-600">{t('vision.projects_p1_3')}</p>
                </div>
              </InViewTransition>

              <InViewTransition delay={0.5}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('vision.projects_p2_1')}
                  </h3>
                  <p className="text-gray-600">{t('vision.projects_p2_2')}</p>
                </div>
              </InViewTransition>

              <InViewTransition delay={0.75}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('vision.projects_p3_1')}
                  </h3>
                  <p className="text-gray-600">{t('vision.projects_p3_2')}</p>
                </div>
              </InViewTransition>

              <InViewTransition delay={1}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('vision.projects_p3_7')}
                  </h3>
                  <p className="text-gray-600">{t('vision.projects_p3_6')}</p>
                </div>
              </InViewTransition>

              <InViewTransition delay={1.25}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('vision.projects_p4_1')}
                  </h3>
                  <p className="text-gray-600">{t('vision.projects_p4_2')}</p>
                </div>
              </InViewTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
