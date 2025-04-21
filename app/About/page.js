import React from 'react'
import Vision from '@/components/Vision'
import Mission from '@/components/Mission'
import Contact from '@/components/Contact'

const About = () => {
  return (
    <div className='bg-[url("/mosqueOpacity.png")] bg-cover'>
      <Vision />
      <Mission />
      <Contact />
    </div>
  )
}

export default About
