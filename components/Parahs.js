import React from 'react'
import Script from 'next/script'

const Parahs = () => {
  return (
    <div className='flex flex-col mt-7 justify-center items-center'>
      <h1 className='text-3xl text-green-900  text-shadow-lg'>Parahs</h1>
      <div className='surahList text-green-900 w-[100vw] h-[60vh] mt-7 bg-linear-to-r from-green-600/10 to-green-200/30'>
        <div
          id='parahContainer'
          className=' flex gap-6 flex-wrap justify-center items-center p-3'
        ></div>
      </div>
      {/*Surah list ends */}
      <Script>
        {`
    const parahNames = [
      "Alif Lam Meem", "Sayaqool", "Tilkal Rusull", "Lan Tana Loo", "Wal Mohsanat",
      "La Yuhibbullah", "Wa Iza Samiu", "Wa Lau Annana", "Qad Aflaha", "Wa A'lamu",
      "Ya Ayyuha Allazina Amanu", "Wa Mamin Da'abat", "Wa Ma Ubrioo", "Rubama", "Subhanallazi",
      "Qal Alam", "Aqtarabat", "Qadd Aflaha", "Wa Qalallazina", "A'man Khalaq",
      "Utlu Ma Oohi", "Wa Manyaqnut", "Wa Masha Allah", "Faman Azlam", "Elahe Yuruddu",
      "Ha'a Meem", "Qala Fama Khatbukum", "Qadd Sami Allah", "Tabarakallazi", "Amma Yatasa'aloon"
    ];

    const container = document.getElementById("parahContainer");

    parahNames.forEach((name, index) => {
      const html = \`
        <div class='surah-div flex gap-4 '>
          <div class='eachSurah text-sm bg-linear-to-r from-green-300/10 to-green-300/20 h-13 w-40 flex border-1 border-solid border-green-900 rounded-lg shadow-lg h-6 w-50 gap-1 px-2 items-center hover:bg-green-600/70 hover:text-white'>
            <h1 class='serialNumber'>\${index + 1}.</h1>
            <h2 class='parahName'>\${name}</h2>
          </div>
        </div>
      \`;
      container.innerHTML += html;
    });
  `}
      </Script>
    </div>
  )
}

export default Parahs
