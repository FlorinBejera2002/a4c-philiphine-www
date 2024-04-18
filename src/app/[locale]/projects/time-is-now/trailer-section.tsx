import Link from 'next/link'
import Image from 'next/image'

import trailerImage from '../../../../../public/trailer.jpeg'

export default function TrailerSection() {
  return (
    <div className="flex flex-col gap-4 pb-4 justify-center items-center">
      <h3 className="text-[#f3a61d] font-bold">OFFICIAL TRAILER</h3>
      <Link
        className="pointer border-b pb-10 border-[#ffffff]"
        href="https://www.youtube.com/watch?v=k1VGbMGFpro"
      >
        <Image
          alt="arise for christ logo"
          className="object-contain"
          src={trailerImage}
        />
      </Link>
    </div>
  )
}
