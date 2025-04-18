import React from 'react'
import Link from 'next/link'

const ListenToQuran = () => {
  return (
    <div className='upperDiv flex flex-col gap-10 justify-center items-center  '>
      <div className='ListenToQuranDiv flex justify-center items-center gap-10 py-10 px-20 text-green-900 text-bold max-w-[100vw] mt-10 min-w-[100vw] min-h-[20vh]  bg-linear-to-r from-green-300/10 to-green-300/30'>
        <h1 className='text-base w-250 flex justify-center items-center'>
          "This is a blessed Book which We have revealed to you O Prophet so
          that they may contemplate its verses, and people of reason may be
          mindful." Sad 38:29
        </h1>
        <h1 className='text-xl w-250 flex justify-center items-center'>
          كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكٞ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ
          وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ ٢٩
        </h1>
      </div>

      <Link href='/Quran'>
        <button className=' h-10 w-35 text-white bg-linear-to-br from-green-600/60 to-green-700/70 hover:from-green-600 to-green-700 hover:text-white hover:font-bold py-2  rounded shadow-xl cursor-pointer'>
          Recite Quran
        </button>
      </Link>
    </div>
  )
}

export default ListenToQuran
