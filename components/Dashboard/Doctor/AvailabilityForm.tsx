"use client";
import React from 'react'
import { Tabs } from "flowbite-react";
import Monday from './AvailabilityDays/Monday';
import { DoctorProfile } from '@prisma/client';
import Tuesday from './AvailabilityDays/Tuesday';
import Wednesday from './AvailabilityDays/Wednesday';
import Thursday from './AvailabilityDays/Thursday';
import Friday from './AvailabilityDays/Friday';
import Saturday from './AvailabilityDays/Saturday';
import Sunday from './AvailabilityDays/Sunday';

export default function AvailabilityForm({ profile }: { profile: DoctorProfile | null | undefined }) {
    const tabs = [
        {
            title: "Monday",
            active: true,
            component: <Monday profile={profile} />
        },
        {
            title: "Tuesday",
            active: true,
            component: <Tuesday profile={profile}/>
        },
        {
            title: "Wednesday",
            active: true,
            component: <Wednesday  profile={profile}/>
        },
        {
            title: "Thursday",
            active: true,
            component: <Thursday  profile={profile}/>
        },
        {
            title: "Friday",
            active: true,
            component: <Friday  profile={profile}/>
        },
        {
            title: "Saturday",
            active: true,
            component:<Saturday  profile={profile}/>
        },
        {
            title: "Sunday",
            active: true,
            component:<Sunday  profile={profile}/>
        },
    ]
    return (
        <Tabs aria-label="Tabs with icons">
            {tabs.map((tab, index) => (
                <Tabs.Item key={index} active={tab.active} title={tab.title} className='border-gray-100'>
                    {tab.component}
                </Tabs.Item>
            ))}
        </Tabs>
    )
}
