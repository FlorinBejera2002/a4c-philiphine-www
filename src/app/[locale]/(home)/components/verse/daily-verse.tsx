'use client'

import InViewTransition from '../../../common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Verse {
  text: string
  reference: string
}

interface ContentItem {
  paragraph?: string
  section_title?: string
  list?: { title: string; description: string }[]
}

interface Devotional {
  title: string
  week: string
  day: string
  verse: Verse
  content: ContentItem[]
  reflection_questions: string[]
  conclusion: string
}

export default function DailyVerse({
  devotional
}: { devotional: Devotional | null }) {
  const pathname = usePathname()
  const language = pathname?.split('/')[1]

  if (!devotional) {
    return (
      <p className="text-center text-gray-500">
        Nu există verset pentru ziua de azi.
      </p>
    )
  }

  return (
    <Link href={`/${language}/devotional`} className="text-decoration-none">
      <div className="bg-opacity-30 p-5 shadow-xl bg-accent rounded-md text-slate-200 text-center">
        <div className="flex flex-col items-center p-3  xl:gap-4 ">
          <InViewTransition
            delay={0.25}
            customClassname="flex justify-center items-center"
          >
            <div className="text-left flex flex-col w-full">
              <p className="text-xs pb-0 font-semibold italic md:pb-1 md:text-xl">
                "{devotional.verse.text}"
              </p>
              <span className="text-gray-300 flex justify-end text-sm md:text-base">
                "{devotional.verse.reference}"
              </span>
            </div>
          </InViewTransition>
        </div>
      </div>
    </Link>
  )
}
