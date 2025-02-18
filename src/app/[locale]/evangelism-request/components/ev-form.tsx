'use client'

import type React from 'react'
import { useState } from 'react'
import InViewTransition from '../../common/in-view-transition'
import { createClient } from '@supabase/supabase-js'
import { useTranslations } from 'next-intl'
import {
  PiNumberCircleOneFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill
} from 'react-icons/pi'
import { v4 as uuid } from 'uuid'
import { FaChevronRight } from 'react-icons/fa6'

type SubmitMessage = {
  content: string
  type: 'error' | 'success'
}

const ContentEvangelizationForm = () => {
  const t = useTranslations('')
  const [message, setMessage] = useState<SubmitMessage | undefined>(undefined)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const details = formData.get('details') as string

    try {
      const supabaseUrl = process.env.SUPABASE_URL as string
      const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string
      const supabase = createClient(supabaseUrl, supabaseAnonKey)

      const evReqId = uuid()
      const personRequestingId = uuid()

      await supabase.from('requesters').insert({
        details,
        email,
        id: personRequestingId,
        name,
        phone
      })

      await supabase.from('evangelism_requests').insert({
        category: 'evangelism',
        id: evReqId,
        person_requesting_id: personRequestingId,
        status: 'received',
        created_by: 'website'
      })

      setMessage({ content: t('form.successful_submission'), type: 'success' })
      setTimeout(() => {
        event.currentTarget.reset()
        setMessage(undefined)
      }, 5000)
    } catch (error) {
      setMessage({ content: `Eroare la trimitere: ${error}`, type: 'error' })
    }
  }

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
          <span>{t('form.title')}</span>
        </h1>

        <p className="mt-4 text-4xl mx-auto font-semibold">{t('form.title')}</p>
      </div>

      <div className="bg-gray-100 w-full p-8">
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <InViewTransition delay={0}>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-4xl text-center md:text-left">
              {t('form.title')}
            </h1>
          </InViewTransition>

          <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-12 mb-10">
            <InViewTransition delay={0.3}>
              <div className="flex items-center flex-col text-center">
                <PiNumberCircleOneFill className="h-12 w-12 text-accent" />
                <p className="text-lg text-gray-700">{t('form.step1')}</p>
              </div>
            </InViewTransition>
            <InViewTransition delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <PiNumberCircleTwoFill className="h-12 w-12 text-accent" />
                <p className="text-lg text-gray-700">{t('form.step2')}</p>
              </div>
            </InViewTransition>
            <InViewTransition delay={0.5}>
              <div className="flex flex-col items-center text-center">
                <PiNumberCircleThreeFill className="h-12 w-12 text-accent" />
                <p className="text-lg text-gray-700">{t('form.step3')}</p>
              </div>
            </InViewTransition>
          </div>

          <InViewTransition delay={0.25}>
            <form
              className="bg-white p-8 rounded-lg shadow-md space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group relative z-0 w-full">
                  <input
                    id="name"
                    name="name"
                    required={true}
                    type="text"
                    className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    {t('form.name')}
                  </label>
                </div>

                <div className="group relative z-0 w-full">
                  <input
                    id="email"
                    name="email"
                    required={true}
                    type="email"
                    className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    {t('form.email')}
                  </label>
                </div>

                <div className="group relative z-0 w-full">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                  >
                    {t('form.mobile')}
                  </label>
                </div>
              </div>

              <div className="group relative z-0 w-full">
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                ></textarea>
                <label
                  htmlFor="details"
                  className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-accent rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  {t('form.details')}
                </label>
              </div>

              {message?.content && (
                <p
                  className={
                    message.type === 'success'
                      ? 'text-green-600'
                      : 'text-red-500'
                  }
                >
                  {message.content}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 px-6 py-2 rounded-md bg-accent text-white font-semibold disabled:opacity-50"
              >
                {t('form.send')}
              </button>
            </form>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default ContentEvangelizationForm
