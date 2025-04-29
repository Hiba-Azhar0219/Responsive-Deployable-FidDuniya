import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SupplicationCategory = (props) => {
  return (
    <Link
      href={{
        pathname: '/SupplicationsDisplayed',
        query: { category: props.categoryName },
      }}
      className='flex flex-col border-1 border-solid border-green-700 h-55 w-50 justify-center items-center p-3 text-green-900 text-lg gap-2 rounded-2xl text-shadow-2xs bg-green-700/30 hover:scale-110 hover:transition duration-150 ease-in-out shadow-md shadow-gray-400 hover:shadow-green-700 hover:shadow-sm cursor-pointer'
    >
      <Image
        src={props.ImageSrc}
        width={170}
        height={200}
        alt='dressing'
      ></Image>
      <h1>{props.categoryName}</h1>
    </Link>
  )
}

export default SupplicationCategory
