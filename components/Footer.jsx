import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' flex flex-col mt-3 bg-linear-to-r from-green-800/90 to-green-800 text-white'>
      <div className=' text-sm h-90 gap-2 px-2  flex justify-around items-center '>
        <div className='fid-duniya-description flex flex-col  max-w-[30vw] gap-5 text-base '>
          <div className='copyright-div flex gap-4 items-center'>
            <Image
              className=' bg-white rounded-full'
              src='/logo.png'
              height={20}
              width={50}
              alt='logo'
            ></Image>
            <div className='text-2xl font-bold '>Fid-Duniya Wal-Akhirah</div>
          </div>
          <p>
            Discover Seerat, in-depth Tafseer, a smart Salah Tracker, Daily
            Duas, and more — all in one place. Stay spiritually connected and
            organized with our easy-to-use mobile app, designed to support your
            Islamic journey anytime, anywhere.
          </p>
        </div>
        <div className='Link flex flex-col gap-2'>
          <h1 className='font-bold text-lg mb-2'>Quick Links</h1>
          <Link href='/'>Home</Link>
          <Link href='/Quran'>Quran</Link>
          <Link href='/Duas'>Duas</Link>
          <Link href='/Features'>Features</Link>
          <Link href='/About'>About</Link>
        </div>
        <div className='supplicationsLinks flex flex-col flex-wrap gap-2'>
          <h1 className='font-bold text-lg mb-2'>Features</h1>
          <Link href='/'>Quran</Link>
          <Link href='/'>Morning Supplications</Link>
          <Link href='/'>Daily Supplications</Link>
          <Link href='/'>Protection Supplications</Link>
          <Link href='/Duas'>More Supplications</Link>
        </div>

        <div className='flex flex-col items-start gap-5'>
          <h1 className='text-lg mb-2'>Social Media Platforms</h1>

          <div className='flex gap-2 items-center'>
            <Image
              src='/footerEmail.svg'
              height={4}
              width={26}
              alt='email'
            ></Image>

            <Link href='https://mail.google.com/mail/u/0/#inbox'>
              <p className='underline '>fid.dunya.wal.akhira@gmail.com</p>
            </Link>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <Image
              src='/youtube.png'
              height={5}
              width={25}
              alt='youtube'
            ></Image>
            <Link
              className='underline justify-center items-center'
              href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'
            >
              Youtube Channel
            </Link>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <Image
              src='/mobileIcon.svg'
              height={4}
              width={20}
              alt='mobileIcon'
            ></Image>
            <Link
              className='underline justify-center items-center'
              href='https://play.google.com/store/apps/details?id=com.islamic.fiddunya_wal_akhirah'
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
      {/* links and logo part ends */}

      <hr className='max-w-[100vw] h-0.5 bg-white/60 border-none ' />
      <div className=' flex copyright-div py-3 px-4  items-center justify-center'>
        <h3 className='text-lg font-bold'>
          © 2025 Fid-Duniya WalAkhirah | All Rights Reserved
        </h3>
      </div>
    </footer>
  )
}

export default Footer
