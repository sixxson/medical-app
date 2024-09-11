import OnboardingSteps from '@/components/Onboarding/OnboardingSteps'
import React from 'react'

export default function page(
    {
        params: { id }
    }: {
        params: { id: string }
    }
) {
    return (
        <div className='bg-teal-200 dark:bg-slate-800'>
            <div className='max-w-6xl mx-auto py-8 min-h-screen'>
                <OnboardingSteps id={id} />
            </div>
        </div>
    )
}
