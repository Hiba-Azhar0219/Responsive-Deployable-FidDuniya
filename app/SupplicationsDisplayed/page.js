'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import SupplicationCard from '@/components/SupplicationCard'

const page = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  return (
    <div className='mt-10 text-center'>
      <h1 className='text-3xl text-green-900  text-shadow-lg mb-5'>
        {category} Supplications
      </h1>
      <div className='list-of-supplications bg-linear-to-r from-green-400/40 to-white drop-shadow-lg min-h-[85vh]'>
        <SupplicationCard category={category} />
      </div>
      <Link href='/AddSupplication'>
        <button className='text-white bg-linear-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2 px-4 m-2 rounded shadow-xl cursor-pointer mt-10'>
          Add Supplication
        </button>
      </Link>
    </div>
  )
}

export default page
