"use client"
import {
    AlarmClock,
    Bell,
    Home,
    Mail,
    Package2,
    Settings,
    Users,
} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";

export default function Sidebar({session}:{session:Session}) {
    const {user} = session
    const role = user?.role
    const pathname = usePathname()
    const roles = {
        USER: [
            {title: "Dashboard", path:"/dashboard", icon: Home},
            { title: "My Appointments", path: "/dashboard/user/appointments", icon: AlarmClock },
            { title: "Settings", path: "/dashboard/user/settings", icon: Settings },
        ],
        ADMIN:[
            { title: "Dashboard", path: "/dashboard", icon: Home },
            { title: "Doctors", path: "/dashboard/doctors", icon: Users },
            { title: "Patients", path: "/dashboard/patients", icon: Users },
            { title: "Appointments", path: "/dashboard/appointments", icon: AlarmClock },
            { title: "Settings", path: "/dashboard/settings", icon: Settings },
        ],
        DOCTOR:[
            { title: "Dashboard", path: "/dashboard/doctor", icon: Home },
            { title: "Patients", path: "/dashboard/doctor/patients", icon: Users },
            { title: "Appointments", path: "/dashboard/doctor/appointments", icon: AlarmClock },
            { title: "Tasks", path: "/dashboard/doctor/tasks", icon: Users },
            { title: "Inbox", path: "/dashboard/doctor/inbox", icon: Mail },
            { title: "Settings", path: "/dashboard/doctor/settings", icon: Settings },
        ]
    } 
    let sideBarLinks = roles[role] || []
    // const sideBarLinks = [
    //     {
    //         title: "Dashboard",
    //         icon: <Home className="h-4 w-4" />,
    //         path: "/dashboard",
    //     },
    //     {
    //         title: "Orders",
    //         icon: <ShoppingCart className="h-4 w-4" />,
    //         path: "/dashboard/orders",
    //         badge: 6,
    //     },
    //     {
    //         title: "Products",
    //         icon: <Package className="h-4 w-4" />,
    //         path: "/dashboard/products",
    //     },
    //     {
    //         title: "Customers",
    //         icon: <Users className="h-4 w-4" />,
    //         path: "/dashboard/customers",
    //     },
    //     {
    //         title: "Analytics",
    //         icon: <LineChart className="h-4 w-4" />,
    //         path: "/dashboard/analytics",
    //     },
    //     {
    //         title: "Settings",
    //         icon: <Settings className="h-4 w-4" />,
    //         path: "/dashboard/settings",
    //     }
    // ]
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">Acme Inc</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {
                            sideBarLinks.map((item, i) => {
                                return (
                                    <Link key={i} href={item.path} 
                                    className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    ,pathname === item.path ? "bg-muted text-primary " : ""
                                    )}>
                                        {React.createElement(item.icon, { className: "h-4 w-4" })}
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}