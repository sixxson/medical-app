"use client"
import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import Link from 'next/link'

export default function Availability() {

    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    const GMT = bookDate?.toString().split('GMT')[1].split(' ')[0]
    const formattedDate = `${bookDate
        ?.toString()
        .split(' ')
        .slice(0, 3)
        .join(' ')} -GMT ${GMT}`
    const timeStamps = [
        {
            time: "9:00 ",
            period: "Am"
        },
        {
            time: "10:00",
            period: "Am"
        },
        {
            time: "11:00",
            period: "Am"
        },
        {
            time: "2:00",
            period: "Pm"
        },
        {
            time: "3:00",
            period: "Pm"
        },
        {
            time: "4:00",
            period: "Pm"
        },
        {
            time: "5:00",
            period: "Pm"
        }
    ]

    return (
        <div className='mb-[100px]'>
            <h2 className='font-bold py-4 text-2xl uppercase text-gray-500
            tracking-wider'>
                Select a date and time
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:gap-0">
                <div className="sm:col-span-1 col-span-full">
                    <Calendar
                        mode="single"
                        selected={bookDate} 
                        onSelect={setBookDate}
                        className="rounded-md border"
                    />
                </div>
                <div className="sm:col-span-1 col-span-full mx-3">
                    <h2 className='text-center text-blue-900 font-semibold
                    px-4 py-3 border border-blue-700'>
                        {formattedDate}
                    </h2>
                    <div className="grid grid-cols-3 gap-2 py-3">
                        {timeStamps.slice(0, 5).map((item, index) => (
                            <button className="px-3 py-4 text-center text-white 
                            rounded-md bg-purple-700 text-sm hover:bg-purple-800"
                                key={index}>
                                {item.time}
                                {item.period}
                            </button>
                        ))}
                        <button
                            className="px-3 py-4 text-center text-sm text-purple-500 
                            rounded-md bg-purple-100 truncate hover:border-purple-500"
                            >
                            Show More
                        </button>
                    </div>
                </div>
            </div>
            {/* Calender  */}
            {/* Avaibility */}
        </div>
    )
}
