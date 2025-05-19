import React from 'react'

const AddSupplicationForm = () => {
  return (
    <div className='flex flex-col items-center min-h-[60vh] mt-5'>
      <h1 className='text-green-900 text-2xl text-shadow-2xs text-center'>
        Add Supplication
      </h1>

      <div className='supplicationCategoryFormDiv flex flex-col gap-4 justify-center items-center min-h-[40vh] mt-10 text-green-900 min-w-[40vw]'>
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter Arabic Supplication'
        />
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter English Translation'
        />
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter Roman Translation'
        />
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter Reference Text'
        />
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter Reference Type'
        />
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl min-w-[40vw]'
          type='text'
          placeholder='Enter Reference Chapter'
        />
        <button className='text-white bg-linear-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2 px-4 m-2 rounded shadow-xl cursor-pointer'>
          Add Supplication
        </button>
      </div>
    </div>
  )
}

export default AddSupplicationForm
