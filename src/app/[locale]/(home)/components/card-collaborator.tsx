'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const CardCollaborator = () => {
  const pathname = usePathname()

  const language = pathname.split('/')[1]

  return (
    <Link
      href={`${language}/collaborator`}
      className="flex flex-col w-fit items-center gap-4 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-black no-underline hover:!no-underline"
    >
      <div className="flex gap-2 justify-between w-full items-center">
        <p className="text-black text-bold m-0">Implică-te acum!</p>
      </div>
    </Link>
  )
}
