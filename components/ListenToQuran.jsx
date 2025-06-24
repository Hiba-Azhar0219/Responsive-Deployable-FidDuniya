import React from 'react'
import Link from 'next/link'

const ListenToQuran = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center w-full px-2 sm:px-2 md:px-2'>
      {/* Quran Quote Section */}
      <div className='flex gap-4 justify-center items-center w-full px-2 sm:px-2 md:px-3 py-20 mt-10 mb-10 bg-gradient-to-r from-green-400/40 to-white text-green-900 text-center rounded-md'>
        <h1 className='text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed'>
          "This is a blessed Book which We have revealed to you O Prophet so
          that they may contemplate its verses, and people of reason may be
          mindful." — **Sad 38:29**
        </h1>
        <h1 className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed'>
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
