import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' text-sm mt-3 h-60 gap-3 py-3 px-2 bg-linear-to-r from-green-500/40 to-green-600/30 text-green-900  flex  justify-around items-center '>
      <div className='copyright-div flex gap-2 items-center'>
        <Image
          className=' bg-white rounded-full'
          src='/logo.png'
          height={20}
          width={50}
          alt='logo'
        ></Image>
        <div className='text-xl'>
          © 2025 FidDuniya WalAkhirah | All Rights Reserved
        </div>
      </div>
      <div className='Link flex flex-col gap-2'>
        <Link href='/'>Home</Link>
        <Link href='/Quran'>Quran</Link>
        <Link href='/Duas'>Duas</Link>
        <Link href='/Features'>Features</Link>
        <Link href='/About'>About</Link>
      </div>
      <div className='supplicationsLinks flex flex-col flex-wrap gap-2'>
        <Link href='/'>Sleeping Supplications</Link>
        <Link href='/'>Morning Supplications</Link>
        <Link href='/'>Daily Supplications</Link>
        <Link href='/'>Protection Supplications</Link>

        <Link href='/Duas'>More Supplications</Link>
      </div>
      <div className='flex flex-col justify-center items-start gap-3'>
        <div className='flex gap-2'>
          <Image src='/email.png' height={4} width={26} alt='email'></Image>

          <Link href='id.dunya.wal.akhira@gmail.com'>
            <p className='font-bold underline '>Email Address</p>
          </Link>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <Image src='/youtube.png' height={5} width={25} alt='youtube'></Image>
          <Link
            className='underline font-bold  justify-center items-center'
            href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'
          >
            Youtube Channel
          </Link>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <Image
            src='/mobileIcon.png'
            height={5}
            width={25}
            alt='mobileIcon'
          ></Image>
          <Link
            className='underline font-bold  justify-center items-center'
            href='/app-debug.apk'
            download
          >
            Download App
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
