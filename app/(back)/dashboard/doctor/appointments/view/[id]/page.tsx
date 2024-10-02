import HomeDisplayCard from '@/components/Dashboard/Doctor/HomeDisplayCard'
import ListPannel from '@/components/Dashboard/Doctor/ListPannel'
import NewButton from '@/components/Dashboard/Doctor/NewButton'
import PannelsHeader from '@/components/Dashboard/Doctor/PannelsHeader'
import { Calendar } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div>
            {/* Header  */}
            {/* 2 Pannels */}
            <div className="grid grid-cols-12 justify-center">
                {/* List Pannels */}
                <div className="col-span-4 py-3 border-r border-gray-100">
                    <div className='py-3 border-b border-gray-200 flex justify-between items-center'>
                        <Calendar className='w-4 h-4 flex-shrink-0' />
                        <p className=''>Appointments</p>
                        <span className='bg-white/50 w-6 h-6 rounded-full flex items-center justify-center shadow-lg '>11</span>
                    </div>
                    <div className="px-3">
                        <ListPannel />
                    </div>
                </div>
                <div className="col-span-8 ">
                    <div className='py-3 border-b border-gray-200 flex justify-end items-center'>
                        <NewButton title='New Appointment' href='#' />
                    </div>
                    <div>
                        Detail page
                    </div>
                </div>
            </div>
            Appointment View
        </div>
    )
}
