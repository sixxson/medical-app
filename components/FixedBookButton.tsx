"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export default function FixedBookButton() {
    return (
        <div className="fixed bottom-0 w-full shadow-2xl py-8 px-6 rounded-md
        bg-white border border-gray-200 mx-auto z-50">
            <div className="gap-4 max-w-4xl mx-auto flex justify-between items-center">
                <div className="w-full">
                    <p className='text-xl font-bold'> $ Price</p>
                    <p className='font-semibold text-sm'> Today, ... Time </p>
                </div>
                <Button
                    variant="outline"
                    className="inline-flex items-center justify-center w-full uppercase tracking-widest px-4 py-3
                    text-sm font-semibold leading-5 text-white transition-all duration-200
                    bg-blue-600 border border-transparent rounded-lg focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500
                    hover:text-slate-50"
                >
                    Booking
                </Button>
            </div>
        </div>
    )
}
