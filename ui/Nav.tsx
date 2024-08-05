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
        link: "/about",
        name: "About"
    },
    {
        id: 2,
        link: "/experience",
        name: "Experience"
    },
    {
        id: 3,
        link: "/projects",
        name: "Projects"
    },
    {
        id: 4,
        link: "/contact",
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
                        className="duration-200  select-none"
                    >
                        <Image src={logo} alt="Perfil" width={50} height={40} />
                    </Link>
                    <ul className="flex items-center gap-4">
                        {links.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}

                                className={` font-medium text-xs sm:text-base ${pathname === item.link ? "text-white hover:text-zinc-400" : "text-zinc-400 hover:text-zinc-100"}  transition duration-300`}
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
                        onClick={() => setNav(!nav)}
                        className="flex cursor-pointer text-gray-500 focus:ring sm:hidden">
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </div>

            {nav && (
                <ul className="sm:hidden duration-200 flex flex-col items-center absolute z-30 top-16 right-0 w--[px] bg-zinc-900 bg-gradient-to-t from-zinc-900/0 via-zinc-900 to-zinc-900/0 ">
                    {links.map(({ id, link, name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-3 text-base duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header >
    );
};
