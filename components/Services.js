import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='services flex flex-col gap-5 justify-center items-center pt-10 bg-white'>
      <h1 className=' text-3xl text-green-900 pb-4 text-shadow-lg'>Services</h1>
      <div className='flex gap-8  min-h-[28vh] min-w-[100vw] justify-center items-center text-white'>
        <div className='Tafseer flex flex-col gap-2 justify-center items-center w-80 h-60 rounded-2xl  bg-linear-to-bl from-green-700/80 to-yellow-800/30 shadow-xl/30'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/tafseer.svg'
            width={90}
            height={80}
            alt='tafseerIcon'
          ></Image>
          <h2 className='text-2xl text-green-900 font-bold'>Tafseer</h2>
          <p className='text-center'>
            Offers insightful and thorough explanations of Quranic verses
          </p>
        </div>
        <div className='Seerat flex flex-col gap-2  justify-center items-center  w-80 h-60 rounded-2xl bg-linear-to-bl from-green-700/80 to-yellow-800/30 shadow-xl/30'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/seerat.svg'
            width={90}
            height={80}
            alt='seeratIcon'
          ></Image>
          <h2 className='text-2xl text-green-900 font-bold'>Seerat</h2>
          <p className='text-center'>
            Provide the knowledge and confidence to understand, read and recite
            the Holy Qur'an
          </p>
        </div>
        <div className='Salah Tracker flex flex-col gap-2 justify-center items-center w-80 h-60 rounded-2xl bg-linear-to-bl from-green-700/80 to-yellow-800/30 shadow-xl/30'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/salahTracker.svg'
            width={90}
            height={80}
            alt='SalahTrackerIcon'
          ></Image>
          <h2 className='text-2xl text-green-900 font-bold'>Salah Tracker</h2>
          <p className='text-center'>
            Help organized and keep you in check with Namaz
          </p>
          <h6 className='text-xs text-green-900'>Coming Soon</h6>
        </div>
        <div className='Planner flex flex-col gap-2  justify-center items-center w-80 h-60 rounded-2xl bg-linear-to-bl from-green-700/80 to-yellow-800/30 shadow-xl/30'>
          <Image
            className='fill-white drop-shadow-lg drop-shadow-white/50'
            src='/planner.svg'
            width={90}
            height={80}
            alt='plannerIcon'
          ></Image>
          <h2 className='text-2xl text-green-900 font-bold'>Planner</h2>
          <p className='text-center'>
            Assist integrating your ibadaah into daily routine
          </p>
          <h6 className='text-xs text-green-900'>Coming Soon</h6>
        </div>
      </div>
    </div>
  )
}

export default Services
