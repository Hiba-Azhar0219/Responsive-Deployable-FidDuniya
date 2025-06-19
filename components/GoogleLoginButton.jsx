'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const result = await signIn('google', { redirect: false })
    setTimeout(async () => {
      const sessionCheck = await fetch('/api/auth/session')
      const json = await sessionCheck.json()

      if (json?.user) {
        console.log('Google user:', json.user)
        await sendUserToBackend(json.user)

        // Optional: store in localStorage too
        localStorage.setItem('user', JSON.stringify(json.user))
        localStorage.setItem('token', 'next-auth') // Just a placeholder if needed

        window.location.href = '/'
      }
    }, 1000)
  }

  //       if (json?.user) {
  //         console.log('Google user:', json.user)
  //         await sendUserToBackend(json.user)
  //         window.location.href = '/'
  //       }
  //     }, 1000)
  //   }

  const sendUserToBackend = async (user) => {
    try {
      const res = await fetch('http://localhost:3001/users/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      if (!res.ok) throw new Error('Failed to send Google user to backend')
    } catch (error) {
      console.error('Error sending Google user:', error)
    }
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className='socialLogin flex gap-5 justify-center items-center bg-white shadow-xl py-2 px-10 rounded-xl'
    >
      <Image src='/google.svg' height={30} width={30} alt='google-icon' />
      <h1>Login with Google</h1>
    </button>
  )
}
export default GoogleLoginButton
