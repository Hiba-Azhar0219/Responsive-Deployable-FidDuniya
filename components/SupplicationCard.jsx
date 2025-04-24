'use client'
import React from 'react'
import Data from './data.json'

const SupplicationCard = ({ category }) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-10x'>
      {Data.filter((supplication) => supplication.type === category).map(
        (supplication) => (
          <div
            key={supplication.type}
            className='card flex flex-col bg-white/60 shadow-gray-400 text-green-900 p-4 h-auto justify-center items-center rounded-lg gap-4'
          >
            <h1 className='font-bold text-lg'>{supplication.arabic}</h1>
            <h2>{supplication.translation}</h2>
          </div>
        )
      )}
    </div>
  )
}

export default SupplicationCard
