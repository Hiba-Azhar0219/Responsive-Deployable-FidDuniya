import React from 'react'

const QuranHeroSection = () => {
  return (
    <div className=' flex min-w-[100vw] min-h-[20vh] text-green-900 justify-center items-center bg-linear-to-r from-green-400/40 to-white drop-shadow-lg text-shadow-sm'>
      <div>
        <h1 className='italic font-bold text-lg'>
          "This is the book about which there is no doubt, A guidance for those
          of conscious of Allah"
        </h1>
        <div className='ref'>
          <h1 className='text-right text-sm'>Al-Quran 2:2</h1>
        </div>
      </div>
    </div>
  )
}

export default QuranHeroSection
