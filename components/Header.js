import React from 'react'

export const Header = () => {
  return (
    <div className='fixed md:h-16 h-14 w-screen bg-[#ae7100]'>
      <ul className='flex flex-row items-center justify-end w-full h-full p-4'>
        <li className='p-6 text-lg cursor-pointer text-white'>
          Home
        </li>
        <li className='p-6  text-lg cursor-pointer text-white'>
          Products
        </li>
        <li className='p-6  text-lg cursor-pointer text-white'>
          About
        </li>
      </ul>
    </div>
  )
}
