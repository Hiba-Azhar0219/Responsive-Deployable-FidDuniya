import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LoginPortion = () => {
  return (
    <div className='main-login-portion flex justify-center items-center min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl text-green-900  text-shadow-lg'>Login</h1>
        <input
          className='mt-5 p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='email'
          id='email'
          placeholder='Email Address'
        />
        <input
          className='p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl  rounded-md'
          type='text'
          name='password'
          id='password'
          placeholder='Password'
        />
        <button className=' mt-4 bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
          <h4>Login</h4>
        </button>
        <div className='askingForSignUp flex mt-3 gap-2'>
          <h3>Don't have an account? </h3>
          <Link href='/Signup' className='text-green-900 underline'>
            Sign Up
          </Link>
        </div>
        <hr className=' border-green-600/40  min-w-[40vw]' />
        <Link
          href='/Signup'
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

export default LoginPortion
