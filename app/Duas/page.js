import SupplicationCategory from '@/components/SupplicationCategory'
import React from 'react'
import Image from 'next/image'

const Duas = () => {
  return (
    <div className='mt-10 text-center bg-[url("/mosqueOpacity.png")] bg-cover relative'>
      <div className='lamp absolute left-12 '>
        <Image src='/glow.png' width={100} height={700} alt='lamp'></Image>
      </div>
      <h1 className='text-3xl text-green-900  text-shadow-lg mb-5 '>
        Supplications
      </h1>
      <div className='supplication-categories-div flex gap-10 p-5 max-w-[90vw] flex-wrap justify-center items-center m-auto'>
        <SupplicationCategory
          categoryName='Sleeping'
          ImageSrc='/sleeping.png'
        />
        <SupplicationCategory categoryName='Morning' ImageSrc='/morning.png' />
        <SupplicationCategory categoryName='Daily' ImageSrc='/daily.png' />
        <SupplicationCategory categoryName='Prayer' ImageSrc='/prayer.png' />
        <SupplicationCategory
          categoryName='Protection'
          ImageSrc='/protection.png'
        />
        <SupplicationCategory categoryName='Travel' ImageSrc='/travel.png' />
        <SupplicationCategory categoryName='Evening' ImageSrc='/evening.png' />
        <SupplicationCategory categoryName='Trials' ImageSrc='/trials.png' />
        <SupplicationCategory
          categoryName='Dressing'
          ImageSrc='/dressing.png'
        />
        <SupplicationCategory
          categoryName='Occasion'
          ImageSrc='/occasion.png'
        />
        <SupplicationCategory categoryName='Fasting' ImageSrc='/fasting.png' />
        <SupplicationCategory
          categoryName='Gratitude'
          ImageSrc='/gratitude.png'
        />
        <SupplicationCategory
          categoryName='Repentance'
          ImageSrc='/repentance.png'
        />
        <SupplicationCategory categoryName='Illness' ImageSrc='/illness.png' />
        <SupplicationCategory
          categoryName='Wellness'
          ImageSrc='/wellness.png'
        />
        <SupplicationCategory
          categoryName='Condolence'
          ImageSrc='/condolence.png'
        />
        <SupplicationCategory categoryName='Azkar' ImageSrc='/azkar.png' />
        <SupplicationCategory categoryName='Quranic' ImageSrc='/quranic.png' />
        <SupplicationCategory
          categoryName='Dua Excellence'
          ImageSrc='/dua_excellence.png'
        />
        <SupplicationCategory
          categoryName='Time of Dua'
          ImageSrc='/time_of_dua.png'
        />
        <SupplicationCategory categoryName='Salah' ImageSrc='/salah.png' />
      </div>
    </div>
  )
}

export default Duas
