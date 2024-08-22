import DoctorDetails from '@/components/DoctorDetails'
import FixedBookButton from '@/components/FixedBookButton'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className="bg-white shadow-xl rounded-md max-w-4xl border 
      border-gray-200 mx-auto ">
        <div className="py-8 px-6">
          <div className="flex justify-between items-center">
            <div className="">
              <div className="flex flex-col">
                <h2 className='uppercase font-bold text-2xl tracking-widest'>Name Doctor</h2>
                <p className='text-gray-500 uppercase text-xs '>Adult Health</p>
              </div>
              <div className="py-3">
                <p>In-person doctor visit</p>
                <p>location</p>
              </div>
            </div>
            <Image
              src="/Something.jpg"
              alt="Picture of the doctor"
              width={243}
              height={207}
              className='w-36 h-36 rounded-full object-cover'
            />
          </div>

        </div>
        <div className="">
          <DoctorDetails />
        </div>
      </div>
      <FixedBookButton  />
    </div>
  )
}
