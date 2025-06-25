import React from 'react'
import Image from 'next/image'

const Planner = () => {
  return (
    <div className='flex flex-col w-full max-w-6xl mx-auto justify-center mt-10 px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:w-3/4'>
          <h1 className='text-xl sm:text-2xl text-green-900 text-shadow-lg'>
            Planner
          </h1>
          <p className='text-sm sm:text-base text-green-800 text-shadow-green-600 leading-relaxed text-justify'>
            Strengthen your daily faith and beliefs with proper scheduling of
            routine tasks. It is very important to give your mind a good feed
            every day for a healthy mindset and stronger belief. For this, we
            have been launching Planner feature very soon!
          </p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end w-full md:w-1/4'>
          <Image
            src='/wellness.png'
            width={190}
            height={190}
            alt='planner picture'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Planner
