'use client'
import React from 'react'
import Data from './data.json'

const SupplicationCard = ({ category }) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-10x py-4'>
      {Data.filter((supplication) => supplication.type === category).map(
        (supplication) => (
          <div
            key={supplication.id}
            className='card flex flex-col bg-white/40 shadow-gray-400 text-green-900 p-4 h-auto justify-center items-center rounded-lg gap-4 max-w-[80vw]'
          >
            <h1 className='font-bold text-lg'>{supplication.arabic}</h1>
            <h2 classname='text-justify'>{supplication.translation}</h2>
          </div>
        )
      )}
    </div>
  )
}

export default SupplicationCard
