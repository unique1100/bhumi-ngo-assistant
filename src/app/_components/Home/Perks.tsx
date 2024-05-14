"use client"
import React from 'react'
import { ArrowDownToLine, CheckCircle, Leaf, Star, Upload, BarChart2, Layers } from 'lucide-react';


  
const Perks = () => {
    const perks = [
        {
          name: '12000+',
          Icon: Star,
          description:
            'Volunteers Engaged.',
        },
        {
          name: '17+',
          Icon: Upload,
          description:
            'Years of Voluntary Service.',
        },
        {
          name: '37000+',
          Icon: BarChart2, 
          description:
            'Children and Youth Impacted.',
        },

      ];      
  return (
    <div className='px-10'>
                  
                <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-[#E18A22] text-white'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium dark:text-white text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Perks