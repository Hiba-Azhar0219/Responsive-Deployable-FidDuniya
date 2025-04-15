import React from 'react'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Image from 'next/image'

import './globals.css'

const Home = () => {
  return (
    <div className='flex flex-col min-w-[100vw] mx-auto justify-center items-center'>
      <HeroSection />
      <Services />
    </div>
  )
}

export default Home
