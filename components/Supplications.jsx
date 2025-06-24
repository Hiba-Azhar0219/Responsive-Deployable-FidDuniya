import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Supplications = () => {
  return (
    <div className='flex flex-col gap-15 justify-center items-center pt-10'>
      <h1 className=' text-3xl text-green-900 pb-4 text-shadow-lg'>
        Supplications
      </h1>
      <div className='supplicaionsDiv flex flex-wrap justify-between gap-25 items-center'>
        <div className='flex flex-col justify-center items-center gap-4 cursor-pointer '>
          {/* sleeping */}
          <Image
            className='bg-[url("/supplicationPattern.png")] rounded-full '
            src='/sleeping.PNG'
            height={170}
            width={190}
            alt='sleeping'
          />
          <h1 className='text-green-900 text-shadow-sm text-lg'>Sleep</h1>
        </div>
        {/* excellence */}
        <div className='flex flex-col justify-center items-center gap-4 cursor-pointer'>
          <Image
            className='bg-[url("/supplicationPattern.png")] rounded-full '
            src='/dua_excellence.PNG'
            height={170}
            width={190}
            alt='excellence'
          />
          <h1 className='text-green-900 text-lg  text-shadow-sm'>Excellence</h1>
        </div>

        <div className='flex flex-col justify-center items-center gap-4 cursor-pointer '>
          {/* Repentance */}
          <Image
            className='bg-[url("/supplicationPattern.png")] rounded-full '
            src='/repentance.PNG'
            height={170}
            width={190}
            alt='repetance'
          />
          <h1 className='text-green-900 text-lg  text-shadow-sm'>Repentance</h1>
        </div>

        <div className='flex flex-col justify-center items-center gap-4 cursor-pointer '>
          {/* guidance */}
          <Image
            className='bg-[url("/supplicationPattern.png")] rounded-full '
            src='/guidance.PNG'
            height={170}
            width={190}
            alt='guidance'
          />
          <h1 className='text-green-900 text-lg  text-shadow-sm'>Guidance</h1>
        </div>
      </div>
      <Link href='/Duas'>
        <button className='text-white bg-linear-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2 px-4 m-2 rounded shadow-xl cursor-pointer'>
          More Supplications
        </button>
      </Link>
    </div>
  ) //Supplications div ends
}

export default Supplications
