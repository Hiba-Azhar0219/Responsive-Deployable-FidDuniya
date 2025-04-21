import SalahTracker from '@/components/SalahTracker'
import Seerat from '@/components/Seerat'
import Planner from '@/components/Planner'
import Tafseer from '@/components/Tafseer'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center relative'>
      <Image
        className='absolute top-15 left-20'
        src='/glow.png'
        height={800}
        width={100}
        alt='lamp'
      ></Image>
      <h1 className=' text-3xl text-green-900 pb-4 text-shadow-lg'>Features</h1>
      <div className='bg-[url("/featuresPattern.png")] min-w-[100vw] max-w-[100vw] min-h-[85vh] bg-cover bg-no-repeat '>
        <Tafseer />
        <Seerat />
        <SalahTracker />
        <Planner />
      </div>
    </div>
  )
}

export default Features
