import { useCallback, useEffect, useState } from 'react'

import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

type Language = 'en' | 'fil'

export default function ChangeLanguage({
  customClassname
}: {
  customClassname?: string
}) {
  const pathname = usePathname()
  const [language, setLanguage] = useState(pathname.split('/')[1] as Language)
  const t = useTranslations()

  const router = useRouter()

  const handleLocaleChange = useCallback(() => {
    if (language === 'en') {
      router.push(pathname.replace('/fil', '/en'))

      return
    }
    router.push(pathname.replace('/en', '/fil'))
  }, [language, pathname, router])

  const toggleSwitch = () => {
    setLanguage((prev) => {
      if (prev === 'en') {
        return 'fil'
      }

      return 'en'
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLocaleChange()
    }, 150)

    return () => clearTimeout(timeout)
  }, [handleLocaleChange])

  return (
    <button
      className={cn(
        'relative flex h-[40px] w-[75px] min-w-[75px] cursor-pointer items-center rounded-full bg-accent p-[10px]',
        language === 'en' ? 'justify-end' : '',
        customClassname
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className="-ml-1 -mr-1 size-8 rounded-full bg-white"
        layout={true}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className={cn(
          'z-2 absolute left-[12px] text-sm font-semibold',
          language === 'en' ? 'text-white' : 'text-black'
        )}
      >
        {t('language.fil')}
      </motion.div>
      <motion.div
        className={cn(
          'z-2 absolute right-[12px] mr-[1px] text-sm font-semibold',
          language === 'fil' ? 'text-white' : 'text-black'
        )}
      >
        {t('language.en')}
      </motion.div>
    </button>
  )
}
