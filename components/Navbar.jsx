// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// const Navbar = () => {
//   return (
//     <div
//       className='flex justify-between items-center overflow-hidden
//  h-16  px-10 py-4 text-green-900 drop-shadow-md'
//     >
//       <div className='flex gap-2 justify-center items-center '>
//         <Image
//           className='py-0 '
//           src='/logo.png'
//           width={50}
//           height={120}
//           alt='logo'
//         ></Image>
//         <h1 className='text-2xl font-bold '>Fid-Dunya Wal-Akhirah</h1>
//       </div>

//       <ul className='flex gap-10 text-base text-shadow-sm'>
//         <Link href='/'>
//           <li>Home</li>
//         </Link>

//         <Link href='/About'>
//           <li>About</li>
//         </Link>
//         <Link href='/Quran'>
//           <li>Quran</li>
//         </Link>
//         <Link href='/Duas'>
//           <li>Duas</li>
//         </Link>
//         <Link href='/Features'>
//           <li>Features</li>
//         </Link>
//         <Link href='/Login'>
//           <button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'>
//             Login
//           </button>
//         </Link>
//       </ul>
//     </div>
//   )
// }

// export default Navbar
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHasMounted(true) // confirms hydration
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem('token')
    signOut({ redirect: false })
    setIsLoggedIn(false)
    window.location.href = '/Login'
  }

  // ⛔ Prevent hydration error by not rendering navbar until client mounts
  if (!hasMounted) return null

  return (
    <div className='flex justify-between items-center h-16 px-10 py-4 text-green-900 drop-shadow-md'>
      <div className='flex gap-2 items-center'>
        <Image src='/logo.png' width={50} height={120} alt='logo' />
        <h1 className='text-2xl font-bold'>Fid-Dunya Wal-Akhirah</h1>
      </div>

      <ul className='flex gap-10 text-base'>
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

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded'
          >
            Logout
          </button>
        ) : (
          <Link href='/Login'>
            <button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'>
              Login
            </button>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Navbar
