import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NewButton({ title, href }: { title: string, href: string }) {
    return (
        <Button type="button" className="text-sm" variant="outline" asChild>
            <Link href={href} className='bg-primary border rounded-md flex items-center justify-between px-6 py-3'>
                <Plus className='h-4 w-4 mr-2' />
                {title}
            </Link>
        </Button>
    )
}
