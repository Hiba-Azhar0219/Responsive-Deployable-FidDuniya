import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeaturesOnHeroSection = () => {
  return (
    <div className='services flex flex-col gap-5 justify-center items-center pt-10 bg-white'>
      <h1 className=' text-3xl text-green-900 pb-4 text-shadow-lg'>Features</h1>
      <div className='flex gap-8  min-h-[28vh] min-w-[100vw] justify-center items-center text-white'>
        <Link href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'>
          <div className='Tafseer flex flex-col gap-2 justify-center items-center w-80 h-60 rounded-2xl  bg-linear-to-bl from-green-500/50 to-white shadow-xl/20'>
            <Image
              className='fill-white drop-shadow-lg drop-shadow-white/50'
              src='/tafseer.svg'
              width={70}
              height={60}
              alt='tafseerIcon'
            ></Image>
            <h2 className='text-[18px] text-green-900 font-bold'>Tafseer</h2>
            <p className='text-center text-gray-700 text-sm p-2'>
              Offers insightful and thorough explanations of Quranic verses
            </p>
          </div>
        </Link>
        <Link href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'>
          <div className='Seerat flex flex-col gap-2  justify-center items-center  w-80 h-60 rounded-2xl bg-linear-to-bl  from-green-500/50 to-white shadow-xl/20'>
            <Image
              className='drop-shadow-lg drop-shadow-white/50'
              src='/seerat.svg'
              width={70}
              height={60}
              alt='seeratIcon'
            ></Image>
            <h2 className='text-[18px] text-green-900 font-bold'>Seerat</h2>
            <p className='text-center text-gray-700 text-sm p-2'>
              Provide the knowledge and confidence to understand, read and
              recite the Holy Qur'an
            </p>
          </div>
        </Link>
        <div className='Salah Tracker flex flex-col gap-2 justify-center items-center w-80 h-60 rounded-2xl bg-linear-to-bl  from-green-500/50 to-white shadow-xl/20'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/salahTracker.svg'
            width={70}
            height={60}
            alt='SalahTrackerIcon'
          ></Image>
          <h2 className='text-[18px] text-green-900 font-bold'>
            Salah Tracker
          </h2>
          <p className='text-center text-gray-700 text-sm px-2'>
            Help organized and keep you in check with Namaz
          </p>
          <h6 className='text-xs text-green-700'>Coming Soon!</h6>
        </div>
        <div className='Planner flex flex-col gap-2 justify-center items-center w-80 h-60 rounded-2xl bg-linear-to-bl  from-green-500/50 to-white shadow-xl/20'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/planner.svg'
            width={70}
            height={60}
            alt='plannerIcon'
          ></Image>
          <h2 className='text-[18px] text-green-900 font-bold'>Planner</h2>
          <p className='text-center text-gray-700 text-sm px-2'>
            Assist integrating your ibadaah into daily routine
          </p>
          <h6 className='text-xs text-green-700'>Coming Soon!</h6>
        </div>
      </div>
      <Link href='/Features'>
        <button className=' mt-8 h-10 w-35 text-white bg-linear-to-br from-green-600/60 to-green-700/70 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2  rounded shadow-xl cursor-pointer'>
          About Features
        </button>
      </Link>
    </div>
  )
}

export default FeaturesOnHeroSection
