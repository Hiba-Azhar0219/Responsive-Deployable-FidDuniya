import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div
      className='flex justify-between items-center overflow-hidden
 h-16  px-10 py-4 text-green-900 drop-shadow-md'
    >
      <div className='flex gap-2 justify-center items-center '>
        <Image
          className='py-0 '
          src='/logo.png'
          width={50}
          height={120}
          alt='logo'
        ></Image>
        <h1 className='text-2xl font-bold '>Fid-dunya Wal-Akhirah</h1>
      </div>

      <ul className='flex gap-15 text-base text-shadow-sm'>
        <Link href='/'>
          <li>Home</li>
        </Link>

        <Link href='/About'>
          <li>About</li>
        </Link>
        <Link href='/Services'>
          <li>Services</li>
        </Link>
        <Link href='/Contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
