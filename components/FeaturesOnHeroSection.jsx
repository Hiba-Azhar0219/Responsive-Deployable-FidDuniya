import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturesOnHeroSection = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center pt-10 bg-white w-full px-4 sm:px-8'>
      <h1 className='text-2xl sm:text-3xl text-green-900 pb-2 text-shadow-lg text-center'>
        Features
      </h1>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl'>
        {/* Tafseer Card */}
        <Link
          href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'
          className='w-full'
        >
          <div className='flex flex-col gap-2 justify-center items-center w-full h-60 rounded-2xl bg-gradient-to-bl from-green-500/50 to-white shadow-xl'>
            <Image
              src='/tafseer.svg'
              width={70}
              height={60}
              alt='tafseerIcon'
              className='drop-shadow-lg'
            />
            <h2 className='text-lg text-green-900 font-bold'>Tafseer</h2>
            <p className='text-center text-gray-700 text-sm px-3'>
              Offers insightful and thorough explanations of Quranic verses
            </p>
          </div>
        </Link>

        {/* Seerat Card */}
        <Link
          href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'
          className='w-full'
        >
          <div className='flex flex-col gap-2 justify-center items-center w-full h-60 rounded-2xl bg-gradient-to-bl from-green-500/50 to-white shadow-xl'>
            <Image
              src='/seerat.svg'
              width={70}
              height={60}
              alt='seeratIcon'
              className='drop-shadow-lg'
            />
            <h2 className='text-lg text-green-900 font-bold'>Seerat</h2>
            <p className='text-center text-gray-700 text-sm px-3'>
              Provide the knowledge and confidence to understand, read and
              recite the Holy Qur&apos;an
            </p>
          </div>
        </Link>

        {/* Salah Tracker Card */}
        <div className='flex flex-col gap-2 justify-center items-center w-full h-60 rounded-2xl bg-gradient-to-bl from-green-500/50 to-white shadow-xl'>
          <Image
            src='/salahTracker.svg'
            width={70}
            height={60}
            alt='SalahTrackerIcon'
            className='drop-shadow-lg'
          />
          <h2 className='text-lg text-green-900 font-bold'>Salah Tracker</h2>
          <p className='text-center text-gray-700 text-sm px-3'>
            Help organize and keep you in check with Namaz
          </p>
          <h6 className='text-xs text-green-700'>Coming Soon!</h6>
        </div>

        {/* Planner Card */}
        <div className='flex flex-col gap-2 justify-center items-center w-full h-60 rounded-2xl bg-gradient-to-bl from-green-500/50 to-white shadow-xl'>
          <Image
            src='/planner.svg'
            width={70}
            height={60}
            alt='plannerIcon'
            className='drop-shadow-lg'
          />
          <h2 className='text-lg text-green-900 font-bold'>Planner</h2>
          <p className='text-center text-gray-700 text-sm px-3'>
            Assist integrating your ibadaah into daily routine
          </p>
          <h6 className='text-xs text-green-700'>Coming Soon!</h6>
        </div>
      </div>

      {/* About Button */}
      <Link href='/Features'>
        <button className='mt-3 px-6 py-2 text-white bg-gradient-to-br from-green-600/60 to-green-700/70 hover:from-green-600 hover:to-green-700 hover:text-white font-semibold rounded shadow-xl transition-all duration-300'>
          About Features
        </button>
      </Link>
    </div>
  )
}

export default FeaturesOnHeroSection
