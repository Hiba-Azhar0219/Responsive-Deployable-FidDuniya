import React from 'react'
import Script from 'next/script'

const Parahs = () => {
  return (
    // bg-linear-to-r from-green-200/10 to-green-400/20
    <div className='flex flex-col mt-7 justify-center items-center'>
      <h1 className='text-3xl text-green-900  text-shadow-lg'>Parahs</h1>
      <div className='parahList text-green-900 w-[80vw]  mt-7 bg-[url("/azkarOpacity.png")] bg-no-repeat bg-center'>
        <div
          id='parahContainer'
          className=' flex gap-6 flex-wrap justify-center items-center  p-3'
        ></div>
      </div>
      {/*Parah list ends */}
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

    const urlsOfParahs = [
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter01.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter02.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter03.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter04.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter05.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter06.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter07.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter08.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter09.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter10.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter11.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter12.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter13.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter14.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter15.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter16.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter17.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter18.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter19.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter20.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter21.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter22.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter23.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter24.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter25.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter26.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter27.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter28.pdf",
      "https://quran-online.ca/wp-content/uploads/2021/07/Chapter29.pdf", "https://quran-online.ca/wp-content/uploads/2021/07/Chapter30.pdf"
    ];

    const arabicParahNames = [
      "الٓمّٓ", "سَيَقُولُ", "تِلْكَ ٱلرُّسُلُ", "لَنْ تَنَالُوا", "وَٱلْمُحْصَنَاتُ",
      "لَا يُحِبُّ ٱللَّهُ", "وَإِذَا سَمِعُوا", "وَلَوْ أَنَّنَا", "قَدْ أَفْلَحَ", "وَٱعْلَمُوا",
      "يَعْتَذِرُونَ", "وَمَا مِن دَابَّةٍ", "وَمَا أُبَرِّئُ", "رُبَمَا", "سُبْحَانَ ٱلَّذِى",
      "قَالَ أَلَمْ", "ٱقْتَرَبَتِ", "قَدْ أَفْلَحَ", "وَقَالَ ٱلَّذِينَ", "أَمَّنْ خَلَقَ",
      "ٱتْلُ مَا أُوحِىَ", "وَمَنْ يَّقْنُتْ", "وَمَا لِىَ", "فَمَنْ أَظْلَمُ", "إِلَيْهِ يُرَدُّ",
      "حمٓ", "قَالَ فَمَا خَطْبُكُمْ", "قَدْ سَمِعَ ٱللَّهُ", "تَبَارَكَ ٱلَّذِى", "عَمَّ يَتَسَاءَلُونَ"
    ];

    const container = document.getElementById("parahContainer");

    parahNames.forEach((name, index) => {
      const url = urlsOfParahs[index];
      const arabic = arabicParahNames[index];
      const html = \`
        <a href="\${url}" target="_blank" rel="noopener noreferrer" class="no-underline text-inherit">
          <div class='parah-div flex mb-2  items-center gap-2'>
            <div class='eachParah text-sm bg-gradient-to-r w-80 h-15 justify-between from-green-300/20 to-green-300/40 h-13 w-60 flex border border-green-900 rounded-lg shadow-lg gap-2 px-3 py-2 items-center hover:bg-green-600/70 hover:text-white transition duration-200 ease-in-out'>
              <div class='flex gap-1'>
                <h1 class='serialNumber font-semibold'>\${index + 1}.</h1>
                <h2 class='parahName'>\${name}</h2>
              </div>
              <h1 class='arabicParahName text-right text-green-800 text-sm font-bold'>\${arabic}</h1>
            </div>
          </div>
        </a>
      \`;
      container.innerHTML += html;
    });
  `}
      </Script>
    </div>
  )
}

export default Parahs
