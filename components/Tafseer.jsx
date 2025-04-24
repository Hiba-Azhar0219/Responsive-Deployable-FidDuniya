import React from 'react'
import Image from 'next/image'

const Tafseer = () => {
  return (
    <div className='flex flex-col max-w-[70vw] m-auto justify-center p-10 bg-linear-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className=' text-2xl text-green-900 text-shadow-lg'>Tafseer</h1>
      <div className='tafseer-info flex justify-between items-center'>
        <p className='w-180 text-base text-green-800 text-shadow-green-600'>
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
        <Image
          src='/azkar.png'
          width={190}
          height={100}
          alt='tafseer picture'
        ></Image>
      </div>
    </div>
  )
}

export default Tafseer
