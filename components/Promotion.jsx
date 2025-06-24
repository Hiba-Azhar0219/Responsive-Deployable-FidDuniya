import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Promotion = () => {
  return (
    <div className='promotion-div flex flex-col mt-30 justify-center items-center min-w-[100vw] gap-10'>
      <h1 className='text-3xl text-green-900 text-shadow-lg text-center '>
        The Mobile Application is finally here
      </h1>
      <div className='promotion-screens-info flex justify-around p-5 gap-15  min-w-[70vw] items-center'>
        <div className='mobile-app-info flex flex-col gap-8 flex-wrap'>
          <h1 className='text-2xl text-green-900'>Fid-Duniya Wal-Akhirah</h1>
          <p className='break-normal w-100 text-green-800 text-shadow-emerald-800'>
            Stay connected to your faith anytime, anywhere. Our all-in-one
            Fid-Duniya Wal-Akhirah Mobile App offers the Holy Quran, daily duas,
            Salah Tracker (coming soon) and more — all at your fingertips.
            Whether you're at home or on the go, let your spiritual journey grow
            stronger every day. Download now and bring barakah into your daily
            routine.
          </p>
          <Link href='https://play.google.com/store/apps/details?id=com.islamic.fiddunya_wal_akhirah'>
            <button className='text-white bg-linear-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2 px-4 m-2 rounded shadow-xl cursor-pointer'>
              Download App
            </button>
          </Link>
        </div>
        <Image
          className='rounded-2xl drop-shadow-2xl'
          src='/mobileStructure.PNG'
          width={200}
          height={200}
          alt='mob screen with structure'
        />
      </div>
    </div>
  )
}

export default Promotion
