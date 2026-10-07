"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { href: "/", label: "Home" },
    { href: "/resources", label: "Resources" },
    { href: "/bookings", label: "My bookings" },
]

export default function NavLinks() {
    const pathname = usePathname()

    return (
        <nav className="flex gap-4">
            {links.map((link) => {
                const active =
                link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)

                return (
                    <Link 
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={active ? "font-bold underline" : ""}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </nav>
    )
}