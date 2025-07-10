'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
function Navbar() {
    const pathname = usePathname(); // das ist der aktuelle Pfad der Seite
    const router = useRouter(); // das ist der Router der uns zurueck zur vorherigen Seite führt
    const navs = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Store",
            href: "/store"
        }
    ]
    const handelClick = () => {
        router.back()
    }
    return (
        <div>
            <nav className="flex justify-start p-4 bg-lime-900 text-white font-bold fixed top-0 w-full">
                <ul className="flex gap-4">
                    {navs.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href} className={pathname === nav.href ? "text-lime-500" : "hover:text-lime-500 transition-colors  "}>{nav.name}</Link>
                        </li>

                    ))}
                </ul>
                <button className="ml-auto " onClick={handelClick}>
                    Back
                </button>
            </nav>
        </div >
    )
}

export default Navbar