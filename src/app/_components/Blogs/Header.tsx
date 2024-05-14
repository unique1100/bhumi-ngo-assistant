import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='p-10 mt-20 max-w-3xl'>
            <h1 className='text-4xl font-bold'>BLOGS</h1>
            <h6 className='text-2xl mt-2'>Voices for Change: Sharing Stories that Inspire <span className='text-[#F9A826]'>Action</span></h6>
            </div>
            <img src='/blogs.png'alt='blogs' className='w-1/2 h-1/2' />
        </div>
    </div>
  )
}

export default Header