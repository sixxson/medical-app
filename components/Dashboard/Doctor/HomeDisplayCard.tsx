import { Calendar } from 'lucide-react'
import React from 'react'
import NewButton from './NewButton'

export default function HomeDisplayCard() {
  return (
    <div className='min-h-screen border-gray-100 shadow-md rounded-md flex justify-center items-center'>
      <div className=' flex flex-col items-center justify-center gap-3'>
        <Calendar size={150} className='text-purple-500 flex-shrink-0' />
        <p>You have 11 Appointmet today.</p>
        <p>11 New Patients, 3 Follow Ups, 4 Annual Physicals</p>
        <NewButton title="Add Appointment" href="/#" />
      </div>
    </div>
  )
}
