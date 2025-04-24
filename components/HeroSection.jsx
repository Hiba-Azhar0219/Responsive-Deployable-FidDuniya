import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className=' overflow-x-hidden flex flex-col max-w-[100vw] min-w-[100vw] '>
      <div className='hero flex min-w-[100vw] justify-between bg-linear-to-r from-green-400/40 to-white drop-shadow-lg'>
        <div className='title-statement drop-shadow-lg justify-center overflow-x-hidden  flex flex-col gap-5 py-10 px-20 justify-left '>
          <h1 className='first-line text-3xl text-green-800 text-shadow-sm'>
            Take Hold of Your Imaan,
          </h1>
          <h1 className='second-line text-2xl text-shadow-md'>
            Don't Give it to Shaitan
          </h1>
          <h3 className='text-base rounded-md text-shadow-sm'>
            Islamic Content, Dawah, Deen, Battle Against Shaitan
          </h3>
          <div className='buttons '>
            <span>
              <button className=' bg-linear-to-br from-green-600 to-green-700 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
                <Link href='/Quran'>Quran</Link>
              </button>
            </span>
            <span>
              <button className='bg-linear-to-br from-slate-200 to-white/40 hover:bg-green-900 text-green-900 hover:text-white font-bold py-2 px-6 m-2 rounded shadow-xl cursor-pointer'>
                <Link href='/Duas'>Duas</Link>
              </button>
            </span>
          </div>
        </div>
        <Image
          src='/heroSectionnewImage.png'
          height={450}
          width={450}
          alt='heroSectionImage'
          className='drop-shadow-xl/20'
        ></Image>
      </div>

      {/* search bar */}
      {/* <div className='duaDropDown mt-15  flex flex-col min-w-[100vw] justify-center items-center relative hover: z-[2]'>
        <input
          type='text'
          className=' border-1 border-green-700/20 shadow-md h-10 w-80 bg-linear-to-t from-white to-green-400/20  p-2y px-4 rounded-3xl '
          placeholder='Search Dua for'
        />
        <div className='dropDownOfDua flex flex-col hidden z-[2]   top-10'>
          <Link href='#'>Morning</Link>
          <Link href='#'>Sleep</Link>
          <Link href='#'>Anxiety</Link>

          <Link href='#'>More</Link>
        </div>
      </div> */}

      {/* <div className='times flex font-bold min-w-[99vw] max-w-[100vw] drop-shadow-xl/20 bg-black/5  text-green-800 justify-around items-center mt-8 '>
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
      </div> */}
    </div>
  )
}

export default HeroSection
