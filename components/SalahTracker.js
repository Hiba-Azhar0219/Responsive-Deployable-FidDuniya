import React from 'react'
import Image from 'next/image'

const SalahTracker = () => {
  return (
    <div className='flex flex-col max-w-[70vw] m-auto justify-center mt-10 p-10 bg-linear-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className=' heading text-2xl text-green-900 text-shadow-lg'>
        Salah Tracker
      </h1>
      <div className='tafseer-info flex justify-between items-center'>
        <p className='w-180 text-base text-green-800 text-shadow-green-600'>
          In the Fid-Duniya Wal-Akhirah platform, you can set a prayer reminder
          to meet daily prayer goals. We have been working on this exiting
          feature to keep you aligned with the dily five times prayers. In order
          to accomplish the most important farz of the day, Salah, we have been
          launching this feature very soon!
        </p>
        <Image
          src='/daily.png'
          width={190}
          height={100}
          alt='tafseer picture'
        ></Image>
      </div>
    </div>
  )
}

export default SalahTracker
