import InViewTransition from '../common/in-view-transition'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { FaChevronRight, FaDonate } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Cards from './components/cards'

import CECLogo from '../../../../public/CEC Bank.svg'
import PayPal from '../../../../public/PayPal.png'
import QRPayPal from '../../../../public/QRPayPal.png'
import RevolutLogo from '../../../../public/Revolut-Logo.png'
import QRStripe from '../../../../public/qr-stripe.png'
import StripeLogo from '../../../../public/srtripe.png'

export const metadata: Metadata = {
  title: 'Arise for Christ | Donate'
}

export default function Donate() {
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
          <span>{t('header.donate')}</span>
        </h1>

        <p className="mt-4 text-4xl mx-auto font-semibold">
          {t('header.donate')}
        </p>
      </div>

      <div className="bg-gray-100 w-full p-8">
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <InViewTransition delay={0}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-4xl">
              {t('donate.title_2')}
            </h1>
          </InViewTransition>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:flex-row xl:grid-cols-4">
            <InViewTransition delay={0.25}>
              <div className=" flex w-full flex-col items-center justify-between gap-10 rounded-lg bg-gray-50 p-10 shadow-md md:h-96">
                <Image
                  alt="Logo for the bank"
                  className="w-32"
                  src={RevolutLogo}
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <div>
                    <p className="mb-1 font-semibold text-gray-700">
                      {t('donate.phone')}
                    </p>
                    <p className="text-gray-600">+40 773 307 292</p>
                  </div>

                  <p className="font-semibold text-gray-700">@ariseforchrist</p>
                  <Link
                    className="!no-underline"
                    href="https://business.revolut.com/overview"
                    target="_blank"
                  >
                    <Image
                      alt="QR Code for donation"
                      className="w-28"
                      src={QRStripe}
                    />
                  </Link>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition delay={0.25}>
              <div className="flex flex-col items-center justify-between gap-16 rounded-lg bg-purple-50 p-10 shadow-md md:h-96">
                <Image
                  alt="Logo for the bank"
                  className="w-24"
                  src={StripeLogo}
                />
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Link
                      className="!no-underline"
                      href="https://buy.stripe.com/dR66oueifggya3ubII"
                      target="_blank"
                    >
                      <span className="flex cursor-pointer items-center gap-2 rounded-md bg-accent px-3 py-2 text-center font-semibold text-white">
                        <FaDonate />
                        {t('donate.donate')}
                      </span>
                    </Link>
                  </div>
                  <Link
                    className="!no-underline"
                    href="https://buy.stripe.com/dR66oueifggya3ubII"
                    target="_blank"
                  >
                    <Image
                      alt="QR Code for donation"
                      className="w-28"
                      src={QRStripe}
                    />
                  </Link>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition delay={0.25}>
              <div className=" flex w-full flex-col items-center justify-between gap-16 rounded-lg bg-blue-50 p-10 shadow-md md:h-96">
                <Image alt="Logo for the bank" className="w-36" src={PayPal} />
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Link
                      className="!no-underline"
                      href="https://www.paypal.com/donate/?hosted_button_id=D8M92EYVFPSM6"
                      target="_blank"
                    >
                      <span className="flex cursor-pointer items-center gap-2 rounded-md bg-accent px-3 py-2 text-center font-semibold text-white">
                        <FaDonate />
                        {t('donate.donate')}
                      </span>
                    </Link>
                  </div>
                  <Link
                    className="!no-underline"
                    href="https://www.paypal.com/donate/?hosted_button_id=D8M92EYVFPSM6"
                    target="_blank"
                  >
                    <Image
                      alt="QR Code for donation"
                      className="w-[104px]"
                      src={QRPayPal}
                    />
                  </Link>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition delay={0.25}>
              <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-green-50 p-10 shadow-md md:h-96 lg:w-full">
                <Image alt="Logo for the bank" className="w-48" src={CECLogo} />
                <div className="flex flex-col text-center gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-700">
                      {t('donate.beneficiary')}
                    </span>
                    <span className="text-gray-600">{t('donate.name')}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-700">
                      {t('donate.ron')}
                    </span>
                    <span className="text-xs text-gray-600">
                      RO36CECETM0130RON0998570
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-700">
                      {t('donate.dollars')}
                    </span>
                    <span className="text-xs text-gray-600">
                      RO37CECETM01B8USD0998572
                    </span>
                  </div>
                </div>
              </div>
            </InViewTransition>
          </div>
          <div className="mt-12">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  )
}
