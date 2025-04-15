import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex gap-2 bg-white min-h-[20vh] min-w-[100] justify-center items-center'>
      <div className='Tafseer flex flex-col gap-2 bg-blue-900'>
        <Image src='/file.svg' width={30} height={30}></Image>
        <h2>Tafseer</h2>
      </div>
      <div className='Seerat flex flex-col gap-2 bg-blue-900'>
        <Image src='/file.svg' width={30} height={30}></Image>
        <h2>Seerat</h2>
      </div>
      <div className='Salah Tracker flex flex-col gap-2 bg-blue-900'>
        <Image src='/file.svg' width={30} height={30}></Image>
        <h2>Salah Tracker</h2>
      </div>
      <div className='Planner flex flex-col gap-2 bg-blue-900'>
        <Image src='/file.svg' width={30} height={30}></Image>
        <h2>Planner</h2>
      </div>
    </div>
  )
}

export default Services
