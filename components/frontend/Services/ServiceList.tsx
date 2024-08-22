
import React from 'react'
import { ServicesProps } from '@/types/types'
import ServiceCard from './ServiceCard'

export default function ServiceList({services}: {services: ServicesProps[]}) {
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        gap-6'>
            {services.map((service, index) => (
                <ServiceCard key={index} services={service} />
            ))}
        </div>
    )
}
