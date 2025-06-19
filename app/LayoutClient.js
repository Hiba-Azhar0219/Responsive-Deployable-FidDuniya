'use client'

import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export default function LayoutClient({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      console.log('✅ Session Active on', pathname, '| JWT Token:', token)
    } else {
      console.log('❌ No Session Found on', pathname)
    }
  }, [pathname])

  return <SessionProvider>{children}</SessionProvider>
}
