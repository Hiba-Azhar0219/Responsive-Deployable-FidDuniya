import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex gap-8 bg-sky-400/20 min-h-[28vh] min-w-[100vw] justify-center items-center text-white'>
      <div className='Tafseer flex flex-col gap-2 bg-green-900 justify-center items-center w-30 h-35 rounded-2xl'>
        <Image
          src='/tafseer.svg'
          width={30}
          height={30}
          alt='tafseerIcon'
        ></Image>
        <h2>Tafseer</h2>
      </div>
      <div className='Seerat flex flex-col gap-2 bg-green-900 justify-center items-center  w-30 h-35 rounded-2xl'>
        <Image
          src='/seerat.svg'
          width={30}
          height={30}
          alt='seeratIcon'
        ></Image>
        <h2>Seerat</h2>
      </div>
      <div className='Salah Tracker flex flex-col gap-2 bg-green-900 justify-center items-center w-30 h-35 rounded-2xl'>
        <Image
          src='/salahTracker.svg'
          width={30}
          height={30}
          alt='SalahTrackerIcon'
        ></Image>
        <h2>Salah Tracker</h2>
        <h6 className='text-xs'>Coming Soon</h6>
      </div>
      <div className='Planner flex flex-col gap-2 bg-green-900 justify-center items-center w-30 h-35 rounded-2xl'>
        <Image
          src='/planner.svg'
          width={30}
          height={30}
          alt='plannerIcon'
        ></Image>
        <h2>Planner</h2>
        <h6 className='text-xs'>Coming Soon</h6>
      </div>
    </div>
  )
}

export default Services
