import React from 'react'
import Image from 'next/image'

const SalahTracker = () => {
  return (
    <div className='flex flex-col w-full max-w-6xl mx-auto justify-center mt-10 px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-2xl'>
      <h1 className='text-xl sm:text-2xl text-green-900 text-shadow-lg mb-6'>
        Salah Tracker
      </h1>

      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Text Section */}
        <p className='text-sm sm:text-base text-green-800 text-shadow-green-600 leading-relaxed md:w-3/4'>
          In the Fid-Duniya Wal-Akhirah platform, you can set a prayer reminder
          to meet daily prayer goals. We have been working on this exciting
          feature to keep you aligned with the daily five times prayers. In
          order to accomplish the most important farz of the day, Salah, we have
          been launching this feature very soon!
        </p>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end w-full md:w-1/4'>
          <Image
            src='/daily.png'
            width={190}
            height={190}
            alt='salah tracker picture'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default SalahTracker
