import React from 'react'
import Image from 'next/image'

const MotivationForQuran = () => {
  return (
    <div
      className='motivationForQuranDiv flex gap-2  min-w-[100vw] max-w-[100vw] justify-between
 mt-10'
    >
      <Image
        src='/shape_2.png'
        height={350}
        width={170}
        alt='left side image'
      ></Image>
      <div className='motivationForQuranText flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-5xl text-green-900 italic font-bold text-shadow-lg'>
          Allah Makes Impossible Possible
        </h1>
        <h3 className='text-2xl text-shadow-lg'>
          Once you make a decision, put your trust in Allah. Surely Allah loves
          those who trust in Him.
        </h3>
      </div>
      <Image
        src='/shape_1.png'
        height={350}
        width={170}
        alt='left side image'
      ></Image>
    </div>
  )
}

export default MotivationForQuran
