"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export default function FixedBookButton() {
    return (
        <div className="fixed bottom-0 w-full dark:bg-slate-700 shadow-2xl py-8 px-6 rounded-md
        bg-white mx-auto z-50">
            <div className="gap-4 max-w-4xl mx-auto flex justify-between items-center">
                <div className="w-full">
                    <p className='text-xl font-bold'> $ Price</p>
                    <p className='font-semibold text-sm'> Today, ... Time </p>
                </div>
                <Button
                    variant="outline"
                    className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-500 hover:text-white"
                >
                    <Plus size={24} className='mr-1'/>
                    Book
                </Button>
            </div>
        </div>
    )
}
