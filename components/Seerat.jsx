import React from 'react'
import Image from 'next/image'

const Seerat = () => {
  return (
    <div className='flex flex-col w-full max-w-6xl mx-auto justify-center mt-10 px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:w-3/4'>
          <h1 className='text-xl sm:text-2xl text-green-900 text-shadow-lg'>
            Seerat
          </h1>
          <p className='text-sm sm:text-base text-green-800 text-shadow-green-600 leading-relaxed text-justify'>
            The life of the Prophet Muhammad (PBUH) is a timeless source of
            guidance, mercy, and inspiration. Our Seerat section offers a
            beautifully presented journey through his noble life — from his
            early years in Makkah to his prophethood, challenges, and the
            establishment of a just and compassionate society. Each part of the
            Seerah is written with clarity and authenticity, helping readers
            understand his character, teachings, and how they apply to our lives
            today. Whether you're a student of knowledge or someone seeking
            spiritual insight, this section invites you to connect deeply with
            the life of the one who was sent as a mercy to all worlds.
          </p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end w-full md:w-1/4'>
          <Image
            id='feature-img'
            src='/quranic.png'
            width={190}
            height={190}
            alt='seerat picture'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Seerat
