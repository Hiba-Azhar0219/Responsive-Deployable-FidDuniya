'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

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
    </div>
  )
}

export default page
