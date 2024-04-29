'use client'

import FormEvangelism from './form-evangelism'

import { AiOutlineClose } from 'react-icons/ai'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function Modal() {
  const searchParams = useSearchParams()
  const modal = searchParams.get('ev-req-form')
  const pathname = usePathname()

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center ">
          <div className="bg-gradient-to-t bg-white m-auto p-8 relative rounded-md w-1/2 h-1/2">
            <Link href={pathname}>
              <button
                className="flex justify-end absolute right-10 top-10"
                type="button"
              >
                <AiOutlineClose className="fill-black w-7 h-7" />
              </button>
            </Link>
            <FormEvangelism />
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
