'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SignupPortion = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setSuccessMessage('')

    if (!name || !email || !password) {
      setError('Name, email, and password are required.')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        let errorMessage = 'Signup failed.'
        if (errorData && errorData.message) {
          errorMessage = errorData.message
        } else if (response.status === 409) {
          errorMessage = 'Email Already Exists'
        }
        setError(errorMessage)
        setLoading(false)
        return
      }

      console.log('Signup successful!')
      setName('')
      setEmail('')
      setPassword('')
      setLoading(false)
      setSuccessMessage('Signed Up Successfully!')
    } catch (err) {
      setError(err.message || 'An error occurred during signup.')
      setLoading(false)
    }
  }

  return (
    <div className='main-sinUp-portion flex justify-center items-center min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl text-green-900 text-shadow-lg'>SignUp</h1>
        <input
          className='mt-5 p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='name'
          id='name'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <input
          className=' p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='email'
          id='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          className='p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button
          className=' mt-4 bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className='text-red-500'>{error}</p>}
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
        <div className='askingForSignUp flex mt-3 gap-2'>
          <h3>Already have an account? </h3>
          <Link href='/About' className='text-green-900 underline'>
            Login
          </Link>
        </div>
        <hr className=' border-green-600/40  min-w-[40vw]' />
        <Link
          href='/'
          className='socialLogin flex gap-5 justify-center items-center bg-white shadow-xl py-2 px-10 rounded-xl'
        >
          <Image
            src='/google.svg'
            height={30}
            width={30}
            alt='google-icon'
          ></Image>
          <h1>Login with Google</h1>
        </Link>
      </div>
    </div>
  )
}

export default SignupPortion
