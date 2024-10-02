
import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Dashboard/Sidebar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function Layout({ children } : { children: ReactNode }) {
        const session = await getServerSession(authOptions);
        if(!session){
            redirect("/login")
        }
        const user = session.user
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar session={session} />
            <div className="flex flex-col">
                <Navbar session={session} />
                <div className=''>
                {children}
                    </div>
                </div>
        </div>
    )
}
