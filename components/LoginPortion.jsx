// 'use client'
// import { useState } from 'react'
// import { useSession } from 'next-auth/react'
// import Link from 'next/link'
// import GoogleLoginButton from './GoogleLoginButton'

// const LoginPortion = () => {
//   const { data: session } = useSession()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState(null)

//   const sendLoginRequest = async (email, password) => {
//     try {
//       const res = await fetch('http://localhost:3001/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       })

//       if (!res.ok) throw new Error('Invalid email or password')
//       const data = await res.text()
//       console.log(data)
//     } catch (error) {
//       setError('Invalid email or password')
//     }
//   }

//   const handleLoginSubmit = (e) => {
//     e.preventDefault()
//     sendLoginRequest(email, password)
//   }

//   return (
//     <div className='main-login-portion flex justify-center items-center min-h-[100vh]'>
//       <div className='flex flex-col justify-center items-center gap-5'>
//         <h1 className='text-5xl text-green-900 text-shadow-lg'>Login</h1>
//         <form onSubmit={handleLoginSubmit} className='flex flex-col gap-5'>
//           <input
//             className='mt-5 p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
//             type='text'
//             name='email'
//             id='email'
//             placeholder='Email Address'
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className='p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
//             type='password'
//             name='password'
//             id='password'
//             placeholder='Password'
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && <p className='text-red-500'>{error}</p>}
//           <button
//             type='submit'
//             className='bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'
//           >
//             Login
//           </button>
//         </form>

//         <hr className='border-green-600/40 min-w-[40vw]' />
//         <GoogleLoginButton />

//         <div className='askingForSignUp flex mt-3 gap-2'>
//           <h3>Don't have an account? </h3>
//           <Link href='/Signup' className='text-green-900 underline'>
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginPortion

'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import GoogleLoginButton from './GoogleLoginButton'

const LoginPortion = () => {
  const { data: session } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const sendLoginRequest = async (email, password) => {
    try {
      const res = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) throw new Error('Invalid email or password')

      const data = await res.json()

      // Store token and user info in localStorage
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      // 🔍 Confirmation logs
      console.log('JWT Token:', data.token)
      console.log('Session created ✅')

      window.location.href = '/' // or navigate programmatically
    } catch (error) {
      setError('Invalid email or password')
      console.error('Login Error:', error)
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    sendLoginRequest(email, password)
  }

  return (
    <div className='main-login-portion flex justify-center items-center min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl text-green-900 text-shadow-lg'>Login</h1>
        <form onSubmit={handleLoginSubmit} className='flex flex-col gap-5'>
          <input
            className='mt-5 p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='p-3 min-h-[20] w-[300] bg-emerald-100 shadow-xl rounded-md'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button
            type='submit'
            className='bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'
          >
            Login
          </button>
        </form>

        <hr className='border-green-600/40 min-w-[40vw]' />
        <GoogleLoginButton />

        <div className='askingForSignUp flex mt-3 gap-2'>
          <h3>Don't have an account? </h3>
          <Link href='/Signup' className='text-green-900 underline'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPortion
