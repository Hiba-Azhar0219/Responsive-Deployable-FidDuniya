import React from 'react'
import Link from 'next/link'

const ListenToQuran = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center w-full px-4 sm:px-6 md:px-20 mt-10'>
      {/* Quran Quote Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 py-8 w-full bg-gradient-to-r from-green-300/10 to-green-300/30 rounded-xl shadow-sm'>
        <h1 className='text-sm sm:text-base md:text-lg text-green-900 text-center lg:text-left max-w-xl font-medium'>
          "This is a blessed Book which We have revealed to you O Prophet so
          that they may contemplate its verses, and people of reason may be
          mindful." — **Sad 38:29**
        </h1>
        <h1 className='text-lg sm:text-xl text-green-900 text-center lg:text-left max-w-xl font-semibold leading-relaxed'>
          كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكٞ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ
          وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ ٢٩
        </h1>
      </div>

      {/* Button */}
      <Link href='/Quran'>
        <button className='px-6 py-2 text-white bg-gradient-to-br from-green-600/60 to-green-700/70 hover:from-green-600 hover:to-green-700 hover:text-white font-semibold rounded shadow-xl transition-all duration-300'>
          Recite Quran
        </button>
      </Link>
    </div>
  )
}

export default ListenToQuran
