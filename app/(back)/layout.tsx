import React from 'react'

export default function Layout(
    { children }: {
        children: React.ReactNode
    }) {
    return (
        <div>
            <h2>
                front dashboard only pages layout
            </h2>
            {children}
        </div>
    )
}
