import React from 'react'
import Image from 'next/image'

const Planner = () => {
  return (
    <div className='flex flex-col max-w-[70vw] m-auto justify-center mt-10 p-10 bg-linear-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className=' heading text-2xl text-green-900 text-shadow-lg'>
        Planner
      </h1>
      <div className='tafseer-info flex justify-between items-center'>
        <p className='w-180 text-base text-green-800 text-shadow-green-600'>
          Strengthen your daily faith and beliefs with proper scheduling of
          routine tasks. It is very important to give your mind a good feed
          every day for a healthy mindset and stronger belief. For this, we have
          been launching Planner feature very soon!
        </p>
        <Image
          src='/wellness.png'
          width={190}
          height={100}
          alt='tafseer picture'
        ></Image>
      </div>
    </div>
  )
}

export default Planner
