import React from 'react'

const ListenToQuran = () => {
  return (
    <div className='upperDiv flex flex-col gap-10 justify-center items-center '>
      <div className='ListenToQuranDiv flex justify-around items-center gap-20  text-green-900 text-bold max-w-[100vw] mt-10 min-w-[100vw] min-h-[20vh]  bg-linear-to-r from-green-300/10 to-green-300/30'>
        <h1 className='text-3xl'>Listen to the Quran. SubhanAllah!</h1>
        <div className='audio-div flex flex-col justify-center items-center gap-1'>
          <h1 className='text-green-900 text-md '>Surah Fatiha</h1>
          <audio
            className='bg-green-700/50 p-1 rounded-4xl shadow-xl'
            src='/1.mp3'
            controls
          ></audio>
        </div>
      </div>

      <button className=' h-10 w-35 text-white bg-linear-to-br from-green-600/60 to-green-700/70 hover:from-green-600 to-green-700 hover:text-white hover:font-bold py-2  rounded shadow-xl cursor-pointer'>
        Recite Quran
      </button>
    </div>
  )
}

export default ListenToQuran
