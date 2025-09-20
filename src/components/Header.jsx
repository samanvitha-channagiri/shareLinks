import React from 'react'
import { HeaderData } from '../utils/HeaderData'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[20px] px-4'>
      <img src={HeaderData.image} alt="Profile" 
        className='rounded-full h-[100px] w-[100px] border-4 border-white shadow-lg'
      />
      <h3 className='mt-[16px] text-[22px] font-bold text-white text-center'>
       {HeaderData.name}
      </h3>
      <p className='text-center text-[14px] text-gray-400 mt-[6px] px-2'>
        {HeaderData.title}
      </p>
    </div>
  )
}

export default Header