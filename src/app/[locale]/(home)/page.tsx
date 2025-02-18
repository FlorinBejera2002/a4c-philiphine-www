import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { QuestionList } from './components/question-list'
import Socials from '../common/footer/components/socials'
import About from './components/about/page'
import Vision from './components/vision/page'
import Projects from './components/projects/page'
import DailyVerse from './components/verse/page'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

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

export default function Home() {
  return (
    <div className="main" role="main">
      <section id="home">
        <div
          className="h-screen w-full bg-fixed flex items-center justify-center "
          style={{
            backgroundImage: 'url(/background-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="p-6 rounded-lg flex flex-col md:flex-row w-full md:px-52 items-center pt-40">
            <div className="w-full flex flex-col gap-5">
              <QuestionList />
              <Socials />
            </div>
            <div className="flex max-w-96 flex-col items-center justify-center ">
              <DailyVerse />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Vision />
      <Projects />
    </div>
  )
}
