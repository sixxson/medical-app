import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DoctorCard({
    isInPreson = false }: {
        isInPreson: boolean
    }) {

    const timeStamps = [
        {
            time: "9:00 ",
            period: "Am"
        },
        {
            time: "10:00",
            period: "Am"
        },
        {
            time: "11:00",
            period: "Am"
        },
        {
            time: "2:00",
            period: "Pm"
        },
        {
            time: "3:00",
            period: "Pm"
        },
        {
            time: "4:00",
            period: "Pm"
        },
        {
            time: "5:00",
            period: "Pm"
        }
    ]

    return (
        <div
            className="border border-gray-200 dark:border-gray-500 bg-white dark:bg-slate-800 inline-flex flex-col
            py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all">
            <Link
                href="/doctors/slug">
                <h2 className="uppercase font-bold text-2xl tracking-widest">Name Doctor</h2>
                {isInPreson &&
                <p className="py-3">Description</p>  
                }
                <div className="flex items-center gap-4 py-4">
                    <div className="relative">
                        <Image
                            src="/Something.jpg"
                            alt="doctor"
                            width={243}
                            height={207}
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        {!isInPreson &&
                            <p 
                            className="bg-blue-200 w-10 h-10 flex
                            justify-center items-center rounded-full
                            absolute -bottom-2 right-1 text-blue-700">
                                <Video className="w-6 h-6" />
                            </p>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center">
                            <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>Family Medicine</span>
                        </p>    
                        <p className="bg-green-400 dark:text-slate-900 py-3 px-6 uppercase">Avilable today</p>
                    </div>
                </div>
            </Link>
            <div className="pt-6 border-t border-gray-400 dark:border-gray-600">
                <h3 className="flex flex-col gap-4 justify-center ">
                    <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Tue, Mar 12 </span>
                        <span className="text-xl font-semibol ">$100</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-3">
                        {timeStamps.slice(0, 5).map((item, index) => (
                            <Link className="px-3 py-4 text-center text-white 
                            rounded-md bg-purple-700 text-sm hover:bg-purple-800"
                                href="/doctors/slug"
                                key={index}>
                                {item.time}
                                {item.period}
                            </Link>
                        ))}
                        <Link
                            className="px-3 py-4 text-center text-sm text-purple-500 
                            rounded-md bg-purple-100 truncate hover:border-purple-500"
                            href="#">
                            Show More
                        </Link>
                    </div>
                </h3>

            </div>
        </div>
    );
}
