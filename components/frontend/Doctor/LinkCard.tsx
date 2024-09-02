import React from 'react'
import Link from 'next/link'

export default function LinkCard({ className }: { className?: string }) {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
        gap-6">
            <Link
                href='#'
                className={`flex gap-4  text-slate-50 rounded-md py-3 px-6 ${className}`}>
                <h2>SomeThing</h2>
                <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
                href='#'
                className={`flex gap-4  text-slate-50 rounded-md py-3 px-6 ${className}`}>
                <h2>SomeThing</h2>
                <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
                href='#'
                className={`flex gap-4  text-slate-50 rounded-md py-3 px-6 ${className}`}>
                <h2>SomeThing</h2>
                <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
                href='#'
                className={`flex gap-4  text-slate-50 rounded-md py-3 px-6 ${className}`}>
                <h2>Anyone</h2>
                <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
                href='#'
                className={`flex gap-4  text-slate-50 rounded-md py-3 px-6 ${className}`}>
                <h2>SomeThing</h2>
                <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    )
}
