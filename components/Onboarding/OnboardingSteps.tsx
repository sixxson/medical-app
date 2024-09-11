"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import BioDataForm from './BioDataForm';
import ContactInfo from './ContactInfo';
import ProfessionInfo from './ProfessionInfo';
import { log } from 'console';

export default function OnboardingSteps({id}:{id:string}) {

    const parmas = useSearchParams()
    const page = parmas.get('page')
    console.log(page);
    const steps = [
        {
            title: 'Bio Data',
            page: 'bio-data',
            component: <BioDataForm />
        },
        {
            title: 'Contact Information',
            page: 'contact',
            component: <ContactInfo />
        },
        {
            title: 'Professional Information',
            page: 'professional',
            component: <ProfessionInfo />
        },
        {
            title: 'Education Information',
            page: 'education',
            component: <></>
        },
        {
            title: 'Practice Information',
            page: 'practice',
            component: <></>
        },
        {
            title: 'Additional Information',
            page: 'additional',
            component: <></>
        },
        {
            title: 'Availability',
            page: 'availability',
            component: <></>
        },
    ]
    const currentStep = steps.find(step => step.page === page)
    console.log(currentStep)

    return (
        <div className='grid grid-cols-12 mx-auto rounded-lg shadow-inner overflow-hidden
            border border-slate-200 min-h-screen bg-slate-100 '>
            <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200">
                {
                    steps.map((step, i) => (
                        <Link 
                        href={`/onboarding/${id}?page=${step.page}`} 
                        key={i} 
                        className={cn(`block uppercase text-sm py-3 px-4 shadow-inner
                            hover:bg-teal-800 hover:text-slate-100`, 
                            step.page === page ? 'bg-teal-800 text-slate-100' : 'bg-slate-300 text-black')}
                        >
                            {step.title}
                        </Link>
                    ))
                }
            </div>
            <div className="col-span-full sm:col-span-9 bg-slate-100 p-4">
                {currentStep?.component}
            </div>
        </div>
    )
}
