import React from 'react'
import Vision from '@/components/Vision'
import Mission from '@/components/Mission'
import Contact from '@/components/Contact'

const About = () => {
  return (
    <div className='bg-[url("/mosqueOpacity.png")] bg-cover bg-no-repeat bg-center w-full overflow-x-hidden'>
      <div className='flex flex-col gap-10 px-4 sm:px-8 md:px-16 py-10'>
        <Vision />
        <Mission />
        <Contact />
      </div>
    </div>
  )
}

export default About
