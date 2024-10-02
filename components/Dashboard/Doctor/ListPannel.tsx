import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { Briefcase, Dot } from 'lucide-react'

const tags = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `name - ${i + 1}`
}))
export default function ListPannel() {
    return (
        <ScrollArea className="h-screen w-full">
            <div className="">
                {tags.map((tag,i) => (
                    <div key={i}>
                        <Link href='/dashboard/doctor/appointments/view/1' className='border text-sm bg-slate-100 dark:bg-slate-900 py-3 px-2
                            inline-block w-full rounded-md'>
                            <div className="flex justify-between items-center">
                                <h2>Some Thing</h2>
                                <span>4:00 PM</span>
                            </div>
                            <div className="flex gap-3 text-sm">
                                <div className=" flex items-center">
                                    <Dot className="w-4 h-4 mr-2" />
                                    <span>Follow Up</span>
                                </div>
                                <div className=" flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    <span>Exam</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}
