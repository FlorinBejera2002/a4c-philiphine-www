import InViewTransition from '../common/in-view-transition'
import AccordionSection from './components/accordion-section'
import ContactUsBtn from './components/contact-us-button'
import Image from 'next/image'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import AboutImage from '../../../../public/About us page-bro.svg'
import { FaChevronRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Arise for Christ | About'
}

const About = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="w-full bg-gray-950 text-white pt-40 pb-12  flex flex-col items-center"
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
          <FaChevronRight className="mx-2  h-4 w-4" />
          <span className="">{t('header.about_us')}</span>
        </h1>

        <p className="mt-4 text-4xl mx-auto font-semibold">
          {t('header.about_us')}
        </p>
      </div>

      <div className="bg-gray-100 w-full p-8">
        <div className=" mx-auto max-w-6xl py-8 md:py-12 ">
          <InViewTransition delay={0}>
            <p className="text-lg text-gray-700">
              {t('about_us.description_p1_1')}
            </p>
          </InViewTransition>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col gap-4">
              <InViewTransition delay={0.5}>
                <p className="text-lg text-gray-700">
                  {t('about_us.description_p1_6')}
                </p>
              </InViewTransition>

              <AccordionSection />
              <ContactUsBtn />
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src={AboutImage}
                alt="About Illustration"
                width={400}
                className="w-full max-w-sm"
              />
            </div>
          </div>

          <InViewTransition delay={0.25}>
            <p className="text-lg text-gray-700">
              {t('about_us.description_p3_1')}
            </p>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
