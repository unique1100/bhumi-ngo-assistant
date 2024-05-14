"use client"
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <div className='max-w-2xl mt-20 space-y-4'>
                <h1 className='text-4xl font-bold'>Join the Movement: Help Build a Brighter Future for India
</h1>
<h3 className='text-xl'>Welcome to Volunteering with Bhumi - where adventure meets purpose!</h3>
<div className='border p-3 w-[75%]'>
    <ul>
<li>Are you a young passionate individual ?</li>
<li>You've come to the right place.</li>
<li>Bhumi is your chance to make a positive impact.</li>
</ul>

</div>
            </div>
            <Image src="/india.png" alt="India" width={800} height={400} />
        </div>
    </div>
  )
}

export default Header