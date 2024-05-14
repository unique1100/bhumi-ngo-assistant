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
    <div>
        <Card className='w-full'>
  <CardHeader>
    <CardTitle className='flex gap-3 font-bold'>{props.icon} {props.title}</CardTitle>
    <CardDescription className='text-black text-md'>{props.description}</CardDescription>
  </CardHeader>


</Card>
    </div>
  )
}

export default DisplayCard