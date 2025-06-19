'use client'

import Link from 'next/link'
import { useState } from 'react'

const SignupPortion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
  })

  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:3001/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const contentType = res.headers.get('content-type')

      if (!res.ok) {
        const errorText = contentType?.includes('application/json')
          ? (await res.json())?.message || 'Unknown error'
          : await res.text()
        throw new Error(errorText)
      }

      setMessage('User created successfully!')
      setFormData({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
      })

      // optional: redirect or toast
      setTimeout(() => {
        window.location.href = '/About' // login page
      }, 1500)
    } catch (error) {
      setMessage(`Error: ${error.message}`)
    }
  }

  return (
    <div className='main-sinUp-portion flex justify-center items-center min-h-[100vh]'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center gap-5'
      >
        <h1 className='text-5xl text-green-900 text-shadow-lg'>SignUp</h1>

        <input
          className='mt-5 p-3 w-[300px] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='p-3 w-[300px] bg-emerald-100 shadow-xl rounded-md'
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className='p-3 w-[300px] bg-emerald-100 shadow-xl rounded-md'
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className='p-3 w-[300px] bg-emerald-100 shadow-xl rounded-md'
          type='text'
          name='phoneNumber'
          placeholder='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <select
          className='p-3 w-[300px] bg-emerald-100 shadow-xl rounded-md text-gray-500'
          name='gender'
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value=''>Select Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>

        <button
          type='submit'
          className='mt-4 bg-gradient-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'
        >
          Sign up
        </button>

        {message && (
          <p className='text-red-600 font-medium text-sm'>{message}</p>
        )}

        <div className='askingForSignUp flex mt-3 gap-2'>
          <h3>Already have an account? </h3>
          <Link href='/About' className='text-green-900 underline'>
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignupPortion
