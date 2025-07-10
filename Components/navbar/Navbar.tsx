'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

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
    ];

    const handleClick = () => {
        router.back();
    };

    // Don't render anything on the server
    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <nav className="flex justify-start p-4 bg-lime-900 text-white font-bold fixed top-0 w-full z-50">
                <ul className="flex gap-4">
                    {navs.map((nav) => (
                        <li key={nav.name}>
                            <Link 
                                href={nav.href} 
                                className={pathname === nav.href 
                                    ? "text-lime-500" 
                                    : "hover:text-lime-500 transition-colors"}
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button 
                    className="ml-auto hover:text-lime-500 transition-colors" 
                    onClick={handleClick}
                >
                    Back
                </button>
            </nav>
        </div>
    );
}

export default Navbar