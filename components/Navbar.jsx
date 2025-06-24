'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Icon package

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white text-green-900 drop-shadow-md px-6 md:px-10 py-2'>
      <div className='flex justify-between items-center h-16'>
        {/* Logo and Title */}
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            width={50}
            height={120}
            alt='logo'
            className='py-0'
          />
          <h1 className='text-lg sm:text-sm md:text-2xl font-bold whitespace-nowrap'>
            Fid-Dunya Wal-Akhirah
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 lg:gap-10 text-lg font-bomediumld items-center'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/About'>
            <li>About</li>
          </Link>
          <Link href='/Quran'>
            <li>Quran</li>
          </Link>
          <Link href='/Duas'>
            <li>Duas</li>
          </Link>
          <Link href='/Features'>
            <li>Features</li>
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col gap-4 text-base mt-4'>
          <Link href='/'>
            <li onClick={() => setIsOpen(false)}>Home</li>
          </Link>
          <Link href='/About'>
            <li onClick={() => setIsOpen(false)}>About</li>
          </Link>
          <Link href='/Quran'>
            <li onClick={() => setIsOpen(false)}>Quran</li>
          </Link>
          <Link href='/Duas'>
            <li onClick={() => setIsOpen(false)}>Duas</li>
          </Link>
          <Link href='/Features'>
            <li onClick={() => setIsOpen(false)}>Features</li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
