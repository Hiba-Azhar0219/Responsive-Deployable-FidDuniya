import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Promotion = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full px-4 sm:px-6 py-12 gap-8 bg-white'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-green-900 font-bold text-center text-shadow-lg'>
        The Mobile Application is finally here
      </h1>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 max-w-6xl w-full'>
        {/* Left Section - Info */}
        <div className='flex flex-col gap-6 text-center lg:text-left'>
          <h1 className='text-xl sm:text-2xl text-green-900 font-semibold'>
            Fid-Duniya Wal-Akhirah
          </h1>
          <p className='text-sm sm:text-base text-green-800 leading-relaxed max-w-2xl'>
            Stay connected to your faith anytime, anywhere. Our all-in-one
            Fid-Duniya Wal-Akhirah Mobile App offers the Holy Quran, daily duas,
            Salah Tracker (coming soon) and more — all at your fingertips.
            Whether you're at home or on the go, let your spiritual journey grow
            stronger every day. Download now and bring barakah into your daily
            routine.
          </p>

          <Link href='https://play.google.com/store/apps/details?id=com.islamic.fiddunya_wal_akhirah'>
            <button className='text-white bg-gradient-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 font-semibold py-2 px-6 rounded shadow-xl transition-all duration-300'>
              Download App
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <Image
          src='/mobileStructure.PNG'
          width={240}
          height={400}
          alt='mob screen with structure'
          className='rounded-2xl drop-shadow-2xl object-contain'
        />
      </div>
    </div>
  )
}

export default Promotion
