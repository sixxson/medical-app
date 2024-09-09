"use client"
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import Link from 'next/link'
import { ArrowUpRight, Map } from 'lucide-react'
import DoctorsListCarousel from './DoctorListCarousel'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Switch } from "@/components/ui/switch"

export default function DoctorsList({
    title = 'TeleHealth visit',
    isInPreson,
    className = 'bg-pink-100 dark:bg-blue-700 py-8 lg:py-24',
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
                    {isInPreson ? (
                        <Link
                            className='text-blue-700 font-semibold px-4 py-2 rounded-md
                        flex items-center'
                            href='#'>
                            <Map className='mr-2 flex-shrink-0 w-5 h-5' />
                            <span>Map View</span>
                        </Link>
                    ) : (
                        <div>
                            <div className="flex items-center space-x-2">
                                <Switch className=''/>
                                <Label>Within 2 hours</Label>
                            </div>
                        </div>
                    )}
                    <Button asChild>
                        <Link href="#">
                            See All
                            <ArrowUpRight className='ms-2 w-4 h-4' />
                        </Link>
                    </Button>
                </div>
                <div className="py-6">
                    <DoctorsListCarousel doctors={doctors} isInPreson={isInPreson} />
                </div>
            </div>
        </div>
    )
}
