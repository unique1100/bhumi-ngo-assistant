"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Menu } from 'lucide-react';
import Link from 'next/link';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-wrap justify-between items-center'>
      <Image src="https://bhumi.ngo/_next/static/media/BhumiNgoLogo.8431d033.svg" alt="logo" width={70} height={70} />
      
      <div className='block md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
        <Menu />
        </button>
      </div>

      <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex font-semibold  flex-col md:flex-row gap-4 md:pl-4 items-center
        '>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/blog'>Blogs</Link>
          <Link href='/chat-ai' className='font-bold gradient-bg'>Chat</Link>
          <Input placeholder='Search' className='h-1/5 ml-4' />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
