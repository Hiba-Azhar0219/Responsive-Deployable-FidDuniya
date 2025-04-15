import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between h-16 bg-linear-to-r from-cyan-800 to-blue-900 px-10 py-5 text-white'>
      <h1 className='text-2xl'>Fid-dunya Wal-Akhirah</h1>

      <ul className='flex gap-4 text-xl '>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <Link href='/Duas'>
          <li>Duas</li>
        </Link>
        <Link href='/Quran'>
          <li>Quran</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
