import React from 'react'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import MotivationForQuran from '@/components/MotivationForQuran'
import ListenToQuran from '@/components/ListenToQuran'
import MotivationForDua from '@/components/MotivationForDua'
import DailySupplications from '@/components/DailySupplications'

import './globals.css'

const Home = () => {
  return (
    <div className='flex flex-col max-w-[100vw] overflow-x-hidden; justify-center items-center'>
      <HeroSection />
      <Services />
      <MotivationForQuran />
      <ListenToQuran />
      <MotivationForDua />
      <DailySupplications />
    </div>
  )
}

export default Home
