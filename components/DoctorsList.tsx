"use client"
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { ToggleSwitch } from 'flowbite-react'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorsListCarousel from './DoctorListCarousel'

export default function DoctorsList({
    title = 'TeleHealth visit',
    isInPreson,
    className = 'bg-pink-100 py-8 lg:py-24',
}: {
    title?: string,
    isInPreson: boolean,
    className?: string
}) {

    const doctors = [
        {
            name: 'Dr. John Doe',

        },
        {
            name: 'Dr. Jane Doe',

        },
        {
            name: 'Dr. John Doe',

        },
        {
            name: 'Dr. Jane Doe',

        },
        {
            name: 'Dr. John Doe',
        },
        {
            name: 'Dr. Jane Doe',
        },
        {
            name: 'Dr. John Doe',
        },
        {
            name: 'Dr. Jane Doe',
        }
    ]

    const [switch1, setSwitch1] = useState(false)
    return (
        <div className={className}>
            <div className="max-w-6xl mx-auto">
                <SectionHeading title={title} />
                <div className="py-4 flex justify-between items-center">
                    {isInPreson &&
                        <Link
                            className='text-blue-700 font-semibold px-4 py-2 rounded-md
                        flex items-center'
                            href='#'>
                            <Map className='mr-2 flex-shrink-0 w-5 h-5' />
                            <span>Map View</span>
                        </Link>
                    }
                    <Link
                        href='#'
                        className='py-3 px-6 border border-blue-600 bg-white text-blue-600 rounded-md'
                    >See All <span aria-hidden="true">&rarr;</span> </Link>
                </div>
                <div className="py-6">
                    <DoctorsListCarousel doctors={doctors} isInPreson={isInPreson} />
                </div>
            </div>
        </div>
    )
}
