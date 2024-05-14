"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/trpc/react'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Register = () => {
    const [form, setForm] = useState({ name: '', phone: '', location: '' })
    const [error, setError] = useState('')
    const [succeed, setSucceed] = useState("")
    const createVolunteer = api.post.add.useMutation({
        onSuccess: (data) => {
            setSucceed(data.msg)
      
            setForm({ name: '', phone: '', location: '' })
        },
        onError: (error) => {
            setError(error.message)
        }
    })

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!form.name || !form.phone || !form.location) {
            setError('All fields are required')
            return
        }
        if (form.name.length <3 || form.name.length > 150){
            setError('Invalid Name. Name should be between 3 and 150 characters long')
            return
        }
        if (form.location.length <3 || form.location.length > 150){
            setError('Invalid Location. Location should be between 3 and 150 characters long')
            return
        }

        const phoneNumberRegex = /^\d{10}$/ 
        if (!phoneNumberRegex.test(form.phone)) {
            setError('Please enter a valid phone number')
            return
        }

        console.log(form)
        createVolunteer.mutate(form)
        setError('')

    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Register Now</h1>
            <p className='text-gray-500'>Fill in the form below to register as a volunteer</p>
            <div className='flex gap-4 mt-4'>
                <Input
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                />
                <Input
                    name='phone'
                    placeholder='Phone Number'
                    type='number'
                    onChange={handleChange}
                />
                <Input
                    name='location'
                    placeholder='Location'
                    onChange={handleChange}
                />
                <Button  disabled={createVolunteer.isPending} onClick={handleSubmit}>Submit</Button>
            </div>
            {error && <p className="text-red-500 p-4 animate-pulse">{error}</p>}
            {succeed && <p className="p-4">{succeed}</p>}
        </div>
    )
}

export default Register
