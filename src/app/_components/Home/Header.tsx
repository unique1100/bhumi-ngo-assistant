"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter()
  const donate = () => {
    router.push('https://buy.stripe.com/test_cN2eWobWO0eA53ObII')
  }
const getInvolved = () =>{
    router.push('/get-involved')
  }
  return (
    <div className='h-screen flex justify-between'>
        <div className='max-w-2xl mt-20'>
        <h2 className='text-2xl font-bold text-[#E18A22] font-mono'>
          volunteer, lead, inspire</h2>

        <h1 className='text-5xl font-bold mt-4'>Empowering Children and Youth Across the India</h1>
        <h4 className='text-gray-600 font-bold mt-4'>Give from the heart, Give  the gift of life</h4>
        <div className='flex gap-3 mt-12'>
            <Button className='bg-[#E18A22] hover:bg-[#e48209]' onClick={donate}>Donate Now</Button>
            <Button variant={"ghost"} className='flex gap-2' onClick={getInvolved}><p>Get Involved</p>     <MoveRight size={18} />
</Button>

        </div>
        </div>

        <div>
            <Image src='/welcome.svg' alt="Welcome" height={300} width={400} />
        </div>
    </div>
  )
}

export default Header