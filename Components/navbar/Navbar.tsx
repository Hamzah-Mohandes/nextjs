import Link from "next/link";
import React from "react";

function Navbar() {

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

    return (
        <div>
            <nav className="flex justify-start p-4 bg-lime-900 text-white font-bold fixed top-0 w-full">
                <ul className="flex gap-4">
                    {navs.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href} className="hover:text-lime-500 transition-colors">{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar