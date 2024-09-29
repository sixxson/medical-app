"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import BioDataForm from './BioDataForm';
import ContactInfo from './ContactInfo';
import ProfileInfoForm from './ProfileInfoForm';
import EducationInfo from './EducationInfo';
import PracticeInfo from './PracticeInfo';
import AdditionalForm from './AdditionalForm';
import { useOnBoardingContext } from '@/context/context';

export default function OnboardingSteps({ id }: { id: string }) {
    const parmas = useSearchParams()
    const page = parmas.get('page') ?? 'bio-data'
    const {
        truckingNumber,
        doctorProfileId,
        saveDbData
    } = useOnBoardingContext()
    const steps = [
        {
            title: 'Bio Data',
            page: 'bio-data',
            component: <BioDataForm
                userId={id}
                title='Bio Data'
                description='Please fill in your Bio Data Info '
                page={page}
                nextPage='profile'
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        {
            title: 'Profile Information',
            page: 'profile',
            component: <ProfileInfoForm
                title='Profile Information'
                description='Please fill in your Profile Information'
                page={page}
                nextPage='contact'
                userId={id}
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        {
            title: 'Contact Information',
            page: 'contact',
            component: <ContactInfo
                title='Contact Information'
                description='Please fill in your Contact Information'
                page={page}
                nextPage='education'
                userId={id}
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        {
            title: 'Education Information',
            page: 'education',
            component: <EducationInfo
                title='Education Information'
                description='Please fill in your Education Information'
                page={page}
                nextPage='practice'
                userId={id}
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        {
            title: 'Practice Information',
            page: 'practice',
            component: <PracticeInfo
                title='Practice Information'
                description='Please fill in your Practice Information'
                page={page}
                nextPage='additional'
                userId={id}
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        {
            title: 'Additional Information',
            page: 'additional',
            component: <AdditionalForm
                title='Additional Information'
                description='Please fill in your Additional Information'
                page={page}
                nextPage='final'
                userId={id}
                formId={doctorProfileId ? doctorProfileId : saveDbData.id}
            />
        },
        // {
        //     title: 'Availability',
        //     page: 'availability',
        //     component: <Availability
        //         title='Availability'
        //         description='Please fill in your Availability Information'
        //         page={page}
        //         userId={id}
        //         formId={doctorProfileId}
        //     />
        // },
    ]
    const currentStep = steps.find(step => step.page === page)
    console.log(currentStep);
    return (
        <div className='grid grid-cols-12 mx-auto rounded-lg shadow-inner overflow-hidden
            min-h-screen bg-slate-100 dark:bg-slate-950'>
            <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200 bg-slate-300 h-full dark:bg-slate-900">
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
                    ))}
            </div>
            <div className="col-span-full sm:col-span-9  p-4">
                { truckingNumber ||
                    (saveDbData.id && (
                        <p className='border-b border-gray-200 text-teal-400'>
                            Your this Trucking Number is {" "}
                            <span className='font-bold'>
                                { truckingNumber ? truckingNumber : saveDbData.id}
                            </span> {" "}
                            <span className='text-sm'>
                                ( Use this to check status or resume application)
                            </span>
                        </p>
                    ))}
                {currentStep?.component}
            </div>
        </div>
    )
}
