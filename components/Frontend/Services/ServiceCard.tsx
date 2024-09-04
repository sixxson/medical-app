import { ServicesProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServiceCard({services}: {services: ServicesProps}) {
    return (
        <Link
            href={`/services/${services.slug}`}
            className='rounded-md bg-slate-400 hover:bg-slate-200 
            duration-300 flex gap-4 overflow-hidden'>
            <Image
                src={services.image}
                alt={services.title}
                width={1920}
                height={1080}
                className='rounded-md w-1/3 object-cover'
            />
            <div className="flex flex-col w-2/3 py-4">
                <h2 className='text-2xl font-bold'>{services.title}</h2>
                <p className='text-xl'>00000 Doctor Available</p>
            </div>
        </Link>
    )
}
