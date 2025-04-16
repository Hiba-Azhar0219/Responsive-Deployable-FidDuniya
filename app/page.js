import React from 'react'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import MotivationForQuran from '@/components/MotivationForQuran'

import './globals.css'

const Home = () => {
  return (
    <div className='flex flex-col max-w-[100vw] overflow-x-hidden; justify-center items-center'>
      <HeroSection />
      <Services />
      <MotivationForQuran />
    </div>
  )
}

export default Home
