import React from 'react'
import Vision from '@/components/Vision'
import Mission from '@/components/Mission'
import Contact from '@/components/Contact'

const About = () => {
  return (
    <div className=' flex flex-col bg-[url("/mosqueOpacity.png")] bg-cover bg-no-repeat bg-center w-full overflow-x-hidden'>
      <h1 className='text-2xl sm:text-3xl text-green-900 text-shadow-lg text-center m-10'>
        About Us
      </h1>
      <div className='flex flex-col gap-3 lg:gap-10 px-4 md:px-3'>
        <Vision />
        <Mission />
        <Contact />
      </div>
    </div>
  )
}

export default About
