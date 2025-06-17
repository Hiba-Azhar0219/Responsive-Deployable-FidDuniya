'use client'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const LoginPortion = () => {
  const { data: session } = useSession()

  const sendUserToBackend = async (user) => {
    try {
      const res = await fetch('http://localhost:3001/users/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username: user.name,
          email: user.email,
        }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Backend error: ${res.status} - ${errorText}`)
      }

      const contentType = res.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json()
        console.log('User saved to backend:', data)
      } else {
        console.warn('No JSON returned by backend')
      }
    } catch (error) {
      console.error('Error saving user to backend:', error.message)
    }
  }

  const handleGoogleLogin = async () => {
    const result = await signIn('google', { redirect: false })

    // After Google sign-in is triggered, wait for session to populate
    setTimeout(async () => {
      const sessionCheck = await fetch('/api/auth/session')
      const json = await sessionCheck.json()

      if (json?.user) {
        console.log('Google user:', json.user)
        await sendUserToBackend(json.user)
        window.location.href = '/' // Now redirect manually
      }
    }, 1000)
  }

  return (
    <div className='main-login-portion flex justify-center items-center min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl text-green-900 text-shadow-lg'>Login</h1>
        <input
          className='mt-5 p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='email'
          id='email'
          placeholder='Email Address'
        />
        <input
          className='p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='password'
          id='password'
          placeholder='Password'
        />

        <hr className='border-green-600/40 min-w-[40vw]' />
        <button
          onClick={handleGoogleLogin}
          className='socialLogin flex gap-5 justify-center items-center bg-white shadow-xl py-2 px-10 rounded-xl'
        >
          <Image src='/google.svg' height={30} width={30} alt='google-icon' />
          <h1>Login with Google</h1>
        </button>
        <div className='askingForSignUp flex mt-3 gap-2'>
          <h3>Don't have an account? </h3>
          <Link href='/Signup' className='text-green-900 underline'>
            Sign Up
          </Link>
        </div>
        <h3>Update Progress</h3>
      </div>
    </div>
  )
}

export default LoginPortion
