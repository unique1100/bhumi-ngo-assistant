"use client"
import React from 'react'
import Image from 'next/image';
import { Flame,Handshake } from 'lucide-react';
import DisplayCard from './DisplayCard';
  

const Programs = () => {
  return (
    <div className='mt-10'>
        <h1 className='font-bold text-2xl'>Our <span className='text-[#E18A22]'>Programs</span></h1>
        <h6 className='mb-5'>How change happens</h6>
        <div className='flex justify-between'>

            <Image src="/students-image.jpg" alt="Image" height={300} width={700} />
            <div className='w-full px-5'>
                <DisplayCard icon={<Flame />} title='Ignite Program' description='Ignite is a transformational journey that enables children to discover their potential and develop their skills.' />
                <div  className='h-4'/>
                <DisplayCard icon={<Handshake />} title='Catalyse Program' description='Catalyse is a program that aims to develop leadership skills and social responsibility among youth.' />

            </div>

        </div>
        
    </div>
  )
}

export default Programs