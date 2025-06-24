import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Supplications = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center pt-10 px-4 sm:px-8 w-full'>
      <h1 className='text-2xl sm:text-3xl text-green-900 pb-4 text-shadow-lg text-center'>
        Supplications
      </h1>

      {/* Supplications Grid */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-10 w-full max-w-screen-xl'>
        {/* Sleep */}
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <Image
            src='/sleeping.png'
            height={160}
            width={160}
            alt='sleeping'
            className="rounded-full bg-[url('/supplicationPattern.png')] object-cover"
          />
          <h1 className='text-green-900 text-sm sm:text-base text-shadow-sm'>
            Sleep
          </h1>
        </div>

        {/* Excellence */}
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <Image
            src='/dua_excellence.png'
            height={160}
            width={160}
            alt='excellence'
            className="rounded-full bg-[url('/supplicationPattern.png')] object-cover"
          />
          <h1 className='text-green-900 text-sm sm:text-base text-shadow-sm'>
            Excellence
          </h1>
        </div>

        {/* Repentance */}
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <Image
            src='/repentance.png'
            height={160}
            width={160}
            alt='repentance'
            className="rounded-full bg-[url('/supplicationPattern.png')] object-cover"
          />
          <h1 className='text-green-900 text-sm sm:text-base text-shadow-sm'>
            Repentance
          </h1>
        </div>

        {/* Guidance */}
        <div className='flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <Image
            src='/guidance.png'
            height={160}
            width={160}
            alt='guidance'
            className="rounded-full bg-[url('/supplicationPattern.png')] object-cover"
          />
          <h1 className='text-green-900 text-sm sm:text-base text-shadow-sm'>
            Guidance
          </h1>
        </div>
      </div>

      {/* Button */}
      <Link href='/Duas'>
        <button className='text-white bg-gradient-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 font-semibold py-2 px-5 mt-6 rounded shadow-xl transition-all duration-300'>
          More Supplications
        </button>
      </Link>
    </div>
  )
}

export default Supplications
