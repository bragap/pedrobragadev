"use client"

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/images/home/logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
    {
        id: 1,
        url: "/about",
        name: "About"
    },
    {
        id: 2,
        url: "/experience",
        name: "Experience"
    },
    {
        id: 3,
        url: "/projects",
        name: "Projects"
    },
    {
        id: 4,
        url: "/contact",
        name: "Contact"
    }
];



export const Nav = () => {

    const [nav, setNav] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 968) {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pathname = usePathname();

    return (
        <header>
            <div className="hidden sm:flex absolute top-10 w-full  justify-center">
                <div className="container w-[450px] px-10 lg:px-0 sm:w-[800px] flex justify-between">

                    <Link
                        href="/"
                        className="duration-200  select-none" onClick={() => setNav(nav => !nav)}
                    >
                        <Image src={logo} alt="Perfil" width={50} height={40} />
                    </Link>
                    <ul className="flex items-center gap-4">
                        {links && links.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}

                                className={` font-medium text-xs sm:text-base ${pathname === item.url ? "text-white hover:text-zinc-400" : "text-zinc-400 hover:text-zinc-100"}  transition duration-300`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="sm:hidden absolute top-5 w-full justify-center">
                <div className="container px-10 md:px-4 lg:px-0 flex justify-between items-center">
                    <Link
                        href="/"
                        className=""
                    >
                        <Image src={logo} alt="Perfil" width={50} height={40} />
                    </Link>
                    <div
                        onClick={() => setNav(nav => !nav)}
                        className="flex cursor-pointer text-gray-500 focus:ring sm:hidden">
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </div>

            

            {nav && (
                <ul className="sm:hidden transition duration-200 p-2 flex flex-col items-left absolute z-30 top-16 right-0 w-[200px] rounded-xl bg-zinc-950  ">
                    {links && links.map(({ id, url, name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-3 text-base duration-200 text-zinc-300 hover:text-white"
                        >
                            <Link onClick={() => setNav(!nav)} href={url}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
           

        </header >
    );
};

