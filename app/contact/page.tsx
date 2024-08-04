"use client";
import { LinkedinIcon, Mail, Github } from "lucide-react";
import Link from "next/link";
import { Card } from "@/ui/Card";
import {Nav} from "@/ui/Nav";

const socials = [
    {
        icon: <LinkedinIcon size={20} />,
        href: "https://www.linkedin.com/in/pedrobragadecastro/",
        label: "Linkedln",
        handle: "You can connect whit me,",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:pedrohbcastro2002@gmail.com",
        label: "Email",
        handle: "send me an email,",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/bragap",
        label: "Github",
        handle: "and see my projects!",
    },
];

export default function Example() {
    return (
        <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Nav/>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-36 sm:mt-0 sm:grid-cols-3 lg:gap-16 ">
                    {socials.map((s) => (
                        <Card>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-800 group md:gap-8 md:py-24 lg:pb-48"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-200 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-sm md:text-base xl:text-xl text-zinc-400 group-hover:text-zinc-300 duration-200 font-display text-center">
                                        {s.handle}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-200  text-zinc-400 group-hover:text-zinc-200">
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}