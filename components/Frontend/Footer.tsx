"use client"
import { 
    Facebook, 
    icons, 
    Instagram, 
    Linkedin, 
    Twitter, 
    Youtube 
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function Footer() {

    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/join/doctors',
                    name: 'List your Services'
                }, 
                {
                    href: '#',
                    name: 'Blog'
                },
                {
                    href: '#',
                    name: 'Team'
                },
                {
                    href: '#',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: '#',
                    name: 'contact'
                },
                {
                    href: '#',
                    name: 'Support'
                },
                {
                    href: '#',
                    name: 'Docs'
                },
                {
                    href: '#',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: '#',
                    name: 'Terms'
                },
                {
                    href: '#',
                    name: 'License'
                },
                {
                    href: '#',
                    name: 'Privacy'
                },
                {
                    href: '#',
                    name: 'About US'
                },
            ]
        }
    ]

    const sociaLinks = [
        {
            title: 'Facebook',
            href: 'https://www.facebook.com/',
            icon: Facebook,
            color:'text-blue-500'
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/',
            icon: Twitter,
            color:'text-blue-400'
        },
        {
            title: 'YouTube',
            href: 'https://www.youtube.com/',
            icon: Youtube,
            color:'text-red-500'
        },
        {
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/',
            icon: Linkedin,
            color:'text-blue-700'
        },
        {
            title: 'Instagram',
            href: 'https://www.instagram.com/',
            icon: Instagram,
            color:'text-red-600'
        },
    ]

    return (
        <footer className="text-gray-500 bg-white dark:bg-slate-950 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt='' className="w-20" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="block pt-4 pb-2">
                            Stay up to date
                        </label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium dark:text-gray-300">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                    {
                        sociaLinks.map((item, i) => (
                            <li key={i} className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <Link
                                    href={item.href}
                                    className="text-gray-500 hover:text-indigo-600"
                                >
                                    <item.icon size={24} className={item.color} />
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </footer>
    )
}
