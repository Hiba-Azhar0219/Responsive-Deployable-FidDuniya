import React from 'react'
import Image from 'next/image'

const Seerat = () => {
  return (
    <div className='flex flex-col max-w-[70vw] m-auto justify-center mt-10 p-10 bg-linear-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className=' text-2xl text-green-900 text-shadow-lg'>Seerat</h1>
      <div className='tafseer-info flex justify-between items-center'>
        <p className='w-180 text-base text-green-800 text-shadow-green-600'>
          The life of the Prophet Muhammad (PBUH) is a timeless source of
          guidance, mercy, and inspiration. Our Seerat section offers a
          beautifully presented journey through his noble life — from his early
          years in Makkah to his prophethood, challenges, and the establishment
          of a just and compassionate society. Each part of the Seerah is
          written with clarity and authenticity, helping readers understand his
          character, teachings, and how they apply to our lives today. Whether
          you're a student of knowledge or someone seeking spiritual insight,
          this section invites you to connect deeply with the life of the one
          who was sent as a mercy to all worlds.
        </p>
        <Image
          src='/quranic.png'
          width={190}
          height={100}
          alt='tafseer picture'
        ></Image>
      </div>
    </div>
  )
}

export default Seerat
