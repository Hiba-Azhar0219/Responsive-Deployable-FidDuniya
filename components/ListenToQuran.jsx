// export default ListenToQuran
import React from 'react'
import Link from 'next/link'

const ListenToQuran = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full px-2 sm:px-2 md:px-2 '>
      {/* Quran Quote Section */}
      <div className='flex flex-col-reverse md:flex-row gap-4 justify-center items-center w-full px-2 sm:px-2 md:px-3 py-10 lg:py-20 my-5 lg:my-7 bg-gradient-to-r from-green-400/40 to-white text-green-900 text-center rounded-md'>
        {/* English Line */}
        <h1 className='text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed'>
          "This is a blessed Book which We have revealed to you O Prophet so
          that they may contemplate its verses, and people of reason may be
          mindful." — <strong>Sad 38:29</strong>
        </h1>

        {/* Arabic Line */}
        <h1 className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed'>
          كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكٞ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ
          وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ ٢٩
        </h1>
      </div>

      <Link href='/Quran'>
        <button className='px-6 py-2 text-white bg-gradient-to-br from-green-600/60 to-green-700/70 hover:from-green-600 hover:to-green-700 hover:text-white font-semibold rounded shadow-xl transition-all duration-300'>
          Recite Quran
        </button>
      </Link>
    </div>
  )
}

export default ListenToQuran
