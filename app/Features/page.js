import SalahTracker from '@/components/SalahTracker'
import Seerat from '@/components/Seerat'
import Planner from '@/components/Planner'
import Tafseer from '@/components/Tafseer'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='relative flex flex-col justify-center items-center w-full max-w-[100vw] overflow-x-hidden'>
      {/* Background Glow Image */}
      <div className='absolute top-10 left-5 sm:left-10 z-0 opacity-50'>
        <Image
          src='/glow.png'
          height={800}
          width={100}
          alt='lamp'
          className='object-contain'
        />
      </div>

      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl text-green-900 pb-4 text-shadow-lg z-10 text-center px-4'>
        Features
      </h1>

      {/* Background with Pattern and Content */}
      <div className='bg-[url("/featuresPattern.png")] bg-cover bg-no-repeat w-full min-h-screen px-4 sm:px-6 md:px-10 pb-10 z-10'>
        <div className='flex flex-col gap-10'>
          <Tafseer />
          <Seerat />
          <SalahTracker />
          <Planner />
        </div>
      </div>
    </div>
  )
}

export default Features
