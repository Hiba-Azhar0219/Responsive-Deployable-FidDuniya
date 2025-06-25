'use client'
import React from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturesOnHeroSection from '@/components/FeaturesOnHeroSection'
import MotivationForQuran from '@/components/MotivationForQuran'
import ListenToQuran from '@/components/ListenToQuran'
import MotivationForDua from '@/components/MotivationForDua'
import DailySupplications from '@/components/DailySupplications'
import Supplications from '@/components/Supplications'
import Promotion from '@/components/Promotion'

import './globals.css'

const Home = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <HeroSection />
      <FeaturesOnHeroSection />
      <MotivationForQuran />
      <ListenToQuran />
      <MotivationForDua />
      <DailySupplications />
      <Supplications />
      <Promotion />
    </div>
  )
}

export default Home
