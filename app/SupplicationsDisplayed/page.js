import React from 'react'
import SupplicationCard from '@/components/SupplicationCard'
import SupplicationDisplay from '@/components/SupplicationDisplay'

const page = () => {
  return (
    <div className='mt-10 text-center'>
      <h1 className='text-3xl text-green-900  text-shadow-lg mb-5'>
        Supplications
      </h1>
      <div className='list-of-supplications bg-linear-to-r from-green-400/40 to-white drop-shadow-lg'>
        <SupplicationCard />
      </div>
    </div>
  )
}

export default page
;<div></div>
