import MegaMenu from '@/components/Frontend/MegaMenu'
import Navbar from '@/components/Frontend/Navbar'
import React from 'react'

export default function Layout(
    { children }: {
        children: React.ReactNode
    }) {
    return (
        <div>
            <Navbar />
            {/* <div className="border-t border-gray-400/30 bg-blue-950 right-0 py-4
            fixed top-[3.9rem] md:top-16 lg:top-20 px-5 z-10 mx-auto 
            w-full md:px-60">
                <MegaMenu />
            </div> */}
            <div className="mt-[80px]">
            {children}
            </div>
        </div>
    )
}
