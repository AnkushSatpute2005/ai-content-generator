"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

const UsageTrack = () => {

    
    
  return (
    <div className='m-5'>
        <div className='bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-white rounded-lg p-3'>
            <h2 className='font-medium'>Credits</h2>
            <div className='bg-white h-3 w-full rounded-full mt-3 flex items-center p-1'>
                <div className='h-1.5 rounded-full bg-green-400 '
                style={{
                    width:'35%'
                }}></div>
            </div>
            <h2 className='text-sm my-1'>350/10,000 Credit Used</h2>
        </div>
        <Button className="w-full my-3">Upgrade</Button>
    </div>
  )
}

export default UsageTrack