import Sidebar from '@/components/Dashboard/Sidebar'
import Footer from '@/components/Frontend/Footer'
import MegaMenu from '@/components/Frontend/MegaMenu'
import Navbar from '@/components/Frontend/Navbar'
import SiteHeader from '@/components/site-header'
import React from 'react'

export default function Layout(
    { children }: {
        children: React.ReactNode
    }) {
    return (
        <div>
            <SiteHeader />
            {children}
            <Footer />
        </div>
    )
}
