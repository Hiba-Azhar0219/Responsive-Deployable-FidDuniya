import React from 'react'

const AddSupplicationCategoryForm = () => {
  return (
    <div className='flex flex-col items-center min-h-[60vh] mt-5'>
      <h1 className='text-green-900 text-2xl text-shadow-2xs text-center'>
        Add Supplication Category
      </h1>

      <div className='supplicationCategoryFormDiv flex flex-col gap-4 justify-center items-center min-h-[40vh] mt-10 text-green-900'>
        <input
          className=' border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl '
          type='text'
          placeholder='Enter Category Name'
        />
        <input
          className='border-2 border-solid border-green-900/60 py-3 px-10 rounded-2xl'
          type='text'
          placeholder='Image URL'
        />
      </div>
      <button className='text-white bg-linear-to-br from-green-600/70 to-green-700/80 hover:from-green-600 hover:to-green-700 hover:text-white hover:font-bold py-2 px-4 m-2 rounded shadow-xl cursor-pointer'>
        Add Supplication Category
      </button>
    </div>
  )
}

export default AddSupplicationCategoryForm
