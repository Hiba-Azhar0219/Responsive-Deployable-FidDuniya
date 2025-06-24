import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='w-full  min-w-[100vw] max-w-[100vw]'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-gradient-to-r from-green-400/40 to-white drop-shadow-lg w-full min-w-[100vw] max-w-[100vw] mx-auto '>
        {/* Text Section */}
        <div className='flex flex-col gap-4 py-10 px-6 sm:px-10 md:px-16 lg:px-10 w-full md:w-1/2'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-green-800 text-shadow-sm'>
            Take Hold of Your Imaan,
          </h1>
          <h1 className='text-lg sm:text-xl md:text-2xl text-shadow-md'>
            Don't Give it to Shaitan
          </h1>
          <h3 className='text-sm sm:text-base rounded-md text-shadow-sm'>
            Islamic Content, Dawah, Deen, Battle Against Shaitan
          </h3>

          <div className='flex flex-wrap gap-4 mt-4'>
            <Link href='/Quran'>
              <button className='bg-gradient-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-600 font-bold py-2 px-6 rounded shadow-xl cursor-pointer transition-all duration-300'>
                Quran
              </button>
            </Link>
            <Link href='/Duas'>
              <button className='bg-gradient-to-br from-slate-200 to-white/40 hover:bg-green-900 text-green-900 hover:text-white font-bold py-2 px-6 rounded shadow-xl cursor-pointer transition-all duration-300'>
                Duas
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <Image
            src='/heroSectionnewImage.png'
            height={450}
            width={450}
            alt='heroSectionImage'
            className='w-full max-w-[320px] sm:max-w-[350px] md:max-w-[450px] drop-shadow-xl'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
