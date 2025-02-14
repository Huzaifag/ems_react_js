import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[40%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>20 Feb 2023</h4>
        </div>
        <h2 className='mt-3 text-2xl font-semibold'>Make a Website</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium officiis placeat facilis. Nostrum, suscipit!</p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>20 Feb 2023</h4>
        </div>
        <h2 className='mt-3 text-2xl font-semibold'>Make a Website</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium officiis placeat facilis. Nostrum, suscipit!</p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>20 Feb 2023</h4>
        </div>
        <h2 className='mt-3 text-2xl font-semibold'>Make a Website</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium officiis placeat facilis. Nostrum, suscipit!</p>
      </div>
      <div className='flex-shrink-0 p-5 h-full w-[300px] bg-gray-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h2 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h2>
          <h4 className='text-sm'>20 Feb 2023</h4>
        </div>
        <h2 className='mt-3 text-2xl font-semibold'>Make a Website</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium officiis placeat facilis. Nostrum, suscipit!</p>
      </div>
    </div>
  )
}

export default TaskList