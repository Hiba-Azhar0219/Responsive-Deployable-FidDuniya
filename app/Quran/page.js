import React from 'react'
import QuranHeroSection from '@/components/QuranHeroSection'
import Parahs from '@/components/Parahs'

const Quran = () => {
  return (
    <div className='flex flex-col max-w-[100vw] overflow-x-hidden; justify-center items-center'>
      <QuranHeroSection />
      <Parahs />
    </div>
  )
}

export default Quran
