import React from 'react'
import QuranHeroSection from '@/components/QuranHeroSection'
import Parahs from '@/components/Parahs'
import Supplications from '@/components/Supplications'

const Quran = () => {
  return (
    <div className='flex flex-col max-w-[100vw] overflow-x-hidden; justify-center items-center'>
      <QuranHeroSection />
      <Parahs />
      <Supplications />
    </div>
  )
}

export default Quran
