import React from 'react'

const DailySupplications = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 justify-center items-center w-full px-2 sm:px-2 md:px-3 py-10 lg:py-20 my-5 lg:my-7 bg-gradient-to-r px-2 sm:px-2 from-green-400/40 to-white text-green-900 text-center rounded-md'>
      {/* English Line */}
      <h1 className='text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed'>
        "Praise be to Allah for all the blessings. Oh Allah, forgive all our
        sins, give us all that is good and keep us away from all that is bad".
      </h1>

      {/* Arabic Line */}
      <h1 className='text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed'>
        اَلْحَمْدُ لِلَّهِ عَلٰی كُلِّ نِعْمَةٍ وَ اَسْتَغْفِرُالله مِنْ كُلِّ
        ذَنْبٍ وَ اَسْئَلُهُ مِنْ كُلِّ خَيْرٍ وَ أَعُوذُ بِاللَّهِ مِنْ كُلِّ
        شَرٍّ
      </h1>
    </div>
  )
}

export default DailySupplications
