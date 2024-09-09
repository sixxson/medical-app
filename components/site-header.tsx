"use client";
import Link from "next/link"
import { CommandMenu } from "@/components/command-menu"
import MainNav from "@/components/main-nav"
import ModeToggle from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import {
    LogIn,
    LogOut
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "./ui/avatar"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { Session } from "next-auth"

export default function SiteHeader(
    { session }: { session: Session }
) {
    const user = session?.user;
    const router = useRouter();
    async function handleLogout() {
        await signOut();
        router.push("/");
    }
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
                        {
                        session && session.user && user?.email
                            ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="secondary" size="icon" className="rounded-full">
                                        {/* <CircleUser className="h-5 w-5" /> */}
                                        <Avatar>
                                            {user.image ? (
                                                <AvatarImage src="/avatars/01.png" />
                                            ) : (
                                                <AvatarFallback>{user.name}</AvatarFallback>
                                            )}
                                        </Avatar>
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel className="text-center">{user.name}</DropdownMenuLabel>
                                    <DropdownMenuLabel className="text-center font-light text-sm text-slate-500">{user.email}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem><Link href='/dashboard'>Dashboard</Link></DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => handleLogout()}>Logout <LogOut size={15} className="ml-2" /></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            ) : (
                            <Button asChild>
                                <Link href="/login">
                                    Login<LogIn size={16} className="ml-2" />
                                </Link>
                            </Button>
                            )
                        }
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}