import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='flex flex-col max-w-[70vw] m-auto justify-center mt-10 p-10 bg-linear-to-r from-green-300/10 to-green-300/30 rounded-2xl gap-5'>
      <h1 className='heading text-2xl text-green-900 text-shadow-lg'>
        Contact Us
      </h1>

      <div className='email-youtube flex gap-15 justify-center '>
        <Link href='id.dunya.wal.akhira@gmail.com'>
          <div className='email-div flex gap-2 py-2 px-4 bg-white/60 items-center rounded-2xl'>
            <Image src='/email.png' width={30} height={20} alt='email'></Image>
            <h2>Email Address</h2>
          </div>
        </Link>

        <Link href='https://www.youtube.com/@fid-dunya.wal-akhira'>
          <div className='youtube-div flex gap-2 py-2 px-4 bg-white/60 items-center rounded-2xl'>
            <Image
              src='/youtube.png'
              width={30}
              height={20}
              alt='youtube'
            ></Image>
            <h2>Youtube Channel</h2>
          </div>
        </Link>
      </div>
      {/* email and youtube channel ended */}
      <div className='app-and-message flex gap-35 mt-5 justify-center'>
        <div className='app flex flex-col'>
          <Link href='/app-debug.apk' download>
            <h1 className='py-3 text-green-900 text-lg text-shadow-2xs'>
              Download our App
            </h1>
            <Image
              className='rounded-2xl'
              src='/shadowMobileIcon.png'
              width={150}
              height={200}
              alt='mobile icon'
            ></Image>
          </Link>
        </div>
        {/* mobile-app ends */}

        <div className='send-message-div flex flex-col gap-4'>
          <input
            className='bg-white/70 py-2 px-5 rounded-xl
            '
            type='text'
            height={10}
            width={30}
            placeholder='Enter your name'
          />
          <input
            className='bg-white/70 py-2 px-5 rounded-xl'
            type='text'
            height={50}
            width={100}
            placeholder='Enter your email address'
          />
          <textarea
            className='bg-white/70 py-2 px-5 w-100 h-40 rounded-xl'
            type='text'
            placeholder='Enter your message'
          />
          <span>
            <button className=' bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
              <Link href='/'>Submit</Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
