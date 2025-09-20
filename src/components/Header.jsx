import React from 'react'
import { HeaderData } from '../utils/HeaderData'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[20px] sm:mt-[30px] md:mt-[40px] px-4 pt-[35px]'>
      <img src={HeaderData.image} alt="Profile" 
        className='rounded-full h-20 w-20 sm:h-24 sm:w-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 border-2 border-pink transition-all hover:shadow-lg duration-300 ease-linear'
      />
      <h3 className='mt-[10px] sm:mt-[15px] text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] text-center font-bold'>
       {HeaderData.name}
      </h3>
      <p className='text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-2'>
        {HeaderData.title}
      </p>
    </div>
  )
}

export default Header