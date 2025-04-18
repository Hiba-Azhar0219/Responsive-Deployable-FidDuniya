import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='  text-sm mt-3 h-20 gap-8 py-3 px-2 bg-linear-to-r from-green-500/40 to-green-600/30 text-green-900  flex  justify-around items-center'>
      <div>© 2025 FidDuniya WalAkhirah | All Rights Reserved</div>

      <div className='flex flex-col jusify center items-start'>
        <div className='flex gap-2'>
          <Image src='/email.png' height={4} width={26} alt='email'></Image>
          <Link href='id.dunya.wal.akhira@gmail.com'>
            <p className='font-bold'>fid.dunya.wal.akhira@gmail.com</p>
          </Link>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <Image src='/youtube.png' height={5} width={25} alt='youtube'></Image>
          <a
            className='underline font-bold  justify-center items-center'
            href='https://youtube.com/@fid-dunya.wal-akhira?si=c5a9KeuQ_mG-U5s_'
          >
            @ Fid-Dunya.Wal-Akhira Youtube Channel
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
