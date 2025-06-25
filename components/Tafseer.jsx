import React from 'react'
import Image from 'next/image'

const Tafseer = () => {
  return (
    <div className='flex flex-col w-full max-w-6xl mx-auto justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className='text-xl sm:text-2xl text-green-900 text-shadow-lg mb-6'>
        Tafseer
      </h1>

      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Text Section */}
        <p className='text-sm sm:text-base text-green-800 text-shadow-green-600 leading-relaxed md:w-3/4'>
          Understanding the Quran is the key to transforming hearts. Our Tafseer
          section is thoughtfully designed to offer deep, authentic, and
          beautifully explained interpretations of the Holy Quran. Each verse is
          accompanied by a contextual and scholarly explanation, helping readers
          reflect on its meanings with clarity and wisdom. Whether you're a
          student of knowledge or someone seeking spiritual insight, this
          platform aims to make Tafseer accessible, engaging, and rooted in
          classical understanding — all in a peaceful and aesthetically refined
          environment. Let every verse speak to you, not just in words, but in
          meaning.
        </p>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end w-full md:w-1/4'>
          <Image
            src='/azkar.png'
            width={190}
            height={190}
            alt='tafseer picture'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Tafseer
