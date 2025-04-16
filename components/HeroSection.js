import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div
      className='hero overflow-x-hidden;
 flex max-w-[100vw] min-w-[100vw]'
    >
      <Image
        src='/heroSectionImage.jpg'
        height={100}
        width={1550}
        alt='heroSectionImage'
        className='drop-shadow-xl/20'
      ></Image>
      <div className='title-statement drop-shadow-lg max-w-[100vw] min-w-[100vw] overflow-x-hidden bg-white/40 flex flex-col gap-5 py-10 justify-center items-center'>
        <h1 className='first-line text-6xl text-green-800 text-shadow-lg'>
          Take Hold of Your Imaan,
        </h1>
        <h1 className='second-line text-4xl text-shadow-lg/20'>
          Don't Give it to Shaitan
        </h1>
        <h3 className='text-xl font-semibold mt-3 bg-green-900/30 rounded-md p-2'>
          Islamic Content, Dawah, Deen, Battle Against Shaitan
        </h3>
        <div className='buttons '>
          <span>
            <button className=' bg-linear-to-br from-green-900 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
              Quran
            </button>
          </span>
          <span>
            <button className='bg-linear-to-br from-slate-200 to-white/40 hover:bg-green-900 text-green-900 hover:text-white font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
              Duas
            </button>
          </span>
        </div>
      </div>
      <div className='times flex font-bold min-w-[99vw] max-w-[100vw] drop-shadow-xl/20 bg-black/20  text-green-800 justify-around items-center '>
        <h1 id='day' className='text-xl '>
          <Script>{`
          //day
          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = new Date();
let currentDay = weekday[day.getDay()];
document.querySelector("#day").innerHTML = currentDay;

//date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
let date = document.querySelector("#todayDate");
date.innerHTML = today;

//time

 const currentDate = new Date();
const timestamp = currentDate.toLocaleTimeString();
let time = document.querySelector("#todayTime");
time.innerHTML = timestamp;
`}</Script>
          day
        </h1>
        <h1 id='todayDate' className='text-xl'>
          date
        </h1>
        <h1 id='todayTime' className='text-xl'>
          time
        </h1>
        <h1 className='text-xl'>17-Shawwal 1446 AH</h1>
      </div>
    </div>
  )
}

export default HeroSection
