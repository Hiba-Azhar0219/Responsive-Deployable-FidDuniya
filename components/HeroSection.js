import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className='hero rounded-2xl container flex justify-between min-h-[30vh] mx-5 my-5 bg-zinc-300'>
      <div className='flex flex-col w-60 gap-2 text-green-800 justify-center items-center px-5'>
        <h1 id='day' className='text-4xl '>
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

      {/* logo image */}
      <Image src='/logo.png' alt='logo' height={100} width={200}></Image>
    </div>
  )
}

export default HeroSection
