import { Calendar } from 'lucide-react'
import React from 'react'
import NewButton from './NewButton'

export default function PannelsHeader() {
    return (
        <div className='py-3 px-6 border-b border-gray-200 flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <Calendar className='w-4 h-4 flex-shrink-0' />
                <p className=''>Appointments</p>
                <span className='bg-white/50 w-6 h-6 rounded-full flex items-center justify-center shadow-lg '>11</span>
            </div>
            <div className="flex items-center gap-4">
                <NewButton title='New Appointment' href='#' />
            </div>
        </div>
    )
}
