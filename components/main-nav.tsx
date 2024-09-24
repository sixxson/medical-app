"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Microscope } from "lucide-react"

export default function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
                <Microscope className="h-6 w-6 space-x-reverse" />
                <span className="hidden font-bold lg:inline-block">
                    B0oKing D0ctoR
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <Link
                    href="/"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Home
                </Link>
                <Link
                    href="/join/doctors"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/join/doctors") &&
                            !pathname?.startsWith("/join/doctors")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Find Doctor
                </Link>
                <Link
                    href="/telehealthvisit"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/telehealthvisit")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Telehealth Visit
                </Link>
                <Link
                    href="/inpresonvisit"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/inpresonvisit")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Inpreson Visit
                </Link>
                <Link
                    href="/about"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/about") ||
                            pathname?.startsWith("/about")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    About
                </Link>
                <Link
                    href="/besevice"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/besevice")
                            ? "text-foreground"
                            : "text-foreground/60"
                    )}
                >
                    Be Sevice Provider
                </Link>
            </nav>
        </div>
    )
}