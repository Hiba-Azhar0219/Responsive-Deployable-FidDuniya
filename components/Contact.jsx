import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='flex flex-col w-full max-w-[100vw] px-4 py-10 md:px-10 lg:px-20 bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-2xl gap-8 mt-5'>
      <h1 className='text-2xl sm:text-3xl text-green-900 text-shadow-lg text-center'>
        Contact Us
      </h1>

      <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
        {/* Location Map */}
        <div className='w-full lg:w-1/2 flex flex-col items-center'>
          <h1 className='text-green-900 text-xl text-shadow-2xs text-center mb-4'>
            Our Location
          </h1>
          <iframe
            className='w-full h-64 sm:h-80 lg:h-[400px] rounded-2xl shadow-xl'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1745308519444!5m2!1sen!2s'
            loading='lazy'
          />
        </div>

        {/* Message Form */}
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
          <Link href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>
            <div className='flex gap-2 py-2 px-4 bg-white/40 items-center rounded-2xl shadow-md'>
              <Image src='/email.png' width={30} height={20} alt='email' />
              <h2 className='text-sm sm:text-base'>
                Email: fid.dunya.wal.akhira@gmail.com
              </h2>
            </div>
          </Link>

          <input
            className='bg-white/70 py-2 px-5 rounded-lg shadow-sm text-sm'
            type='text'
            placeholder='Enter your name'
          />
          <input
            className='bg-white/70 py-2 px-5 rounded-lg shadow-sm text-sm'
            type='email'
            placeholder='Enter your email address'
          />
          <textarea
            className='bg-white/70 py-3 px-5 rounded-xl shadow-sm h-32 resize-none text-sm'
            placeholder='Enter your message'
          />

          <Link href='/'>
            <button className='w-full sm:w-auto bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-6 rounded shadow-xl transition-all duration-300'>
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
