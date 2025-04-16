import React from 'react'

const ListenToQuran = () => {
  return (
    <div className='ListenToQuranDiv flex justify-around items-center gap-20  text-green-900 text-bold max-w-[100vw] mt-10 min-w-[100vw] min-h-[20vh]  bg-linear-to-r from-white to-green-400/40'>
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
  )
}

export default ListenToQuran
