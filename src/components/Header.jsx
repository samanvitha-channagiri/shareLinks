import React from 'react'

const Header = () => {
  return (
  <div className='flex flex-col items-center justify-center mt-[30px]'>
         <img src="image2.png" alt="" 
         className='rounded-full h-20 w-20 sm:w-24 sm:h-24 border-2 border-pink transition-all hover:shadow-lg duration-300 ease-linear'
         />
         <h3 className='mt-[15px] text-[25px]'>Samanvitha Channagiri</h3>
         <p>Undergrad Student | Fullstack developer | Curious Human</p>

    </div>
   

  )
}

export default Header
