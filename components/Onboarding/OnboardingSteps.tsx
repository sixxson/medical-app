"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import BioDataForm from './BioDataForm';
import ContactInfo from './ContactInfo';
import ProfessionInfo from './ProfessionInfo';
import ProfileInfoForm from './ProfileInfoForm';
import EducationInfo from './EducationInfo';
import PracticeInfo from './PracticeInfo';
import AdditionalForm from './AdditionalForm';
import Availability from './Availability';

export default function OnboardingSteps({ id }: { id: string }) {

    const parmas = useSearchParams()
    const page = parmas.get('page') ?? 'bio-data'
    console.log(page);
    const steps = [
        {
            title: 'Bio Data',
            page: 'bio-data',
            component: <BioDataForm
                title='Bio Data'
                description='Please fill in your Bio Data Info '
                page={page}
            />
        },
        {
            title: 'Profile Information',
            page: 'profile',
            component: <ProfileInfoForm
                title='Profile Information'
                description='Please fill in your Profile Information'
                page={page}
            />
        },
        {
            title: 'Contact Information',
            page: 'contact',
            component: <ContactInfo
                title='Contact Information'
                description='Please fill in your Contact Information'
                page={page}
            />
        },
        // {
        //     title: 'Professional Information',
        //     page: 'professional',
        //     component: <ProfessionInfo
        //         title='Professional Information'
        //         description='Please fill in your Professional Information'
        //         page={page}
        //     />
        // },
        {
            title: 'Education Information',
            page: 'education',
            component: <EducationInfo
                title='Education Information'
                description='Please fill in your Education Information'
                page={page}
            />
        },
        {
            title: 'Practice Information',
            page: 'practice',
            component: <PracticeInfo
                title='Practice Information'
                description='Please fill in your Practice Information'
                page={page}
            />
        },
        {
            title: 'Additional Information',
            page: 'additional',
            component: <AdditionalForm
                title='Additional Information'
                description='Please fill in your Additional Information'
                page={page}
            />
        },
        {
            title: 'Availability',
            page: 'availability',
            component: <Availability
                title='Availability'
                description='Please fill in your Availability Information'
                page={page}
            />
        },
    ]
    const currentStep = steps.find(step => step.page === page)
    console.log(currentStep)

    return (
        <div className='grid grid-cols-12 mx-auto rounded-lg shadow-inner overflow-hidden
            border border-slate-200 min-h-screen bg-slate-100 '>
            <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200 bg-slate-300 h-full">
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
