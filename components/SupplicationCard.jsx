import React from 'react'

const SupplicationCard = ({ arabic, translation }) => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-10x'>
      <div className='card flex flex-col bg-white/60 shadow-gray-400 text-green-900 p-4 h-auto justify-center items-center rounded-lg gap-4'>
        <h1 className='font-bold text-lg'>{arabic}</h1>
        <h2>{translation}</h2>
      </div>
    </div>
  )
}

export default SupplicationCard
