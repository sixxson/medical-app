"use client"
import React, { useState } from 'react'
import Availability from './Availability'

export default function DoctorDetails() {

  const [isActive, setIsActive] = useState('availability')

  return (
    <div className="">
      <div className='flex justify-between  items-center uppercase tracking-widest'>
        <button
          onClick={() => setIsActive("service")}
          className={
            isActive === 'service'
              ? 'py-4 px-8 w-full bg-blue-500 text-white uppercase tracking-widest'
              : 'py-4 px-8 w-full bg-slate-200 text-slate-800'
          }>
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={
            isActive === 'availability'
              ? 'py-4 px-8 w-full bg-blue-500 text-white uppercase tracking-widest'
              : 'py-4 px-8 w-full bg-slate-200 text-slate-800'
          }>
          Availability
        </button>
      </div>
      <div className="py-8 px-6">
        {isActive === 'availability' ? (
          <div>
            <Availability />
          </div>
        ) : (
          <div>
            Service Details Component
          </div>
        )}
      </div>
    </div>
  )
}
