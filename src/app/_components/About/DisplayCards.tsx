"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const DisplayCard = (props:any) => {
  return (
    <div className='mt-4'>
        <Card className='w-full'>
  <CardHeader>
    <CardTitle className='text-center font-bold text-2xl'>{props.title}</CardTitle>
    <CardDescription className='text-black text-md'>{props.description}</CardDescription>
  </CardHeader>


</Card>
    </div>
  )
}

export default DisplayCard