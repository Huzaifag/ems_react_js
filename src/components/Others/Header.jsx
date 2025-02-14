import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h2 className='text-2xl font-medium'>Hello, <br /> <span className='text-4xl font-semibold text-emerald-600'>Huzaifa 👋🏻</span></h2>
      <button className='bg-red-500 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header