import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import  MainNav  from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import ModeToggle  from "@/components/ModeToggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight, LogIn, Mail } from "lucide-react"

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                {/* <MobileNav /> */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>
                    <nav className="flex items-center gap-2">
                        <Button asChild>
                            <Link href="/login">
                            Login<LogIn size={16} className="ml-2" />
                            </Link>
                        </Button>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}