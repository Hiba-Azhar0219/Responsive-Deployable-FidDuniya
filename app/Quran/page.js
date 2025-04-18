import React from 'react'
import QuranHeroSection from '@/components/QuranHeroSection'
import Surah from '@/components/Surah'

const Quran = () => {
  return (
    <div className='flex flex-col max-w-[100vw] overflow-x-hidden; justify-center items-center'>
      <QuranHeroSection />
      <Surah />
    </div>
  )
}

export default Quran
