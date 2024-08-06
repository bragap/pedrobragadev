import { LinkedinIcon, Mail, Github } from "lucide-react";
import Link from "next/link";
import { Card } from "@/ui/Card";

const socials = [
    {
        icon: <LinkedinIcon size={20} />,
        id:1,
        href: "https://www.linkedin.com/in/pedrobragadecastro/",
        label: "Linkedln",
        handle: "Connect whit me,",
    },
    {
        icon: <Mail size={20} />,
        id:2,
        href: "mailto:pedrohbcastro2002@gmail.com",
        label: "Email",
        handle: "send me an email,",
    },
    {
        icon: <Github size={20} />,
        id:3,
        href: "https://github.com/bragap",
        label: "Github",
        handle: "and see my projects!",
    },
];

export default function Example() {
    return (
        <div className="min-h-screen ">
            <div className="container flex items-start justify-center  min-h-screen px-10  mx-auto sm:pt-40 ">
                <div className="flex flex-wrap text-sm w-[450px] pl-2 sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="pb-8 font-medium tracking-tighter text-2xl  text-zinc-50">Let's make contact</h2>
                        <p className="text-base sm:text-lg text-zinc-400"> I don't use social media anymore. So, here are the ways that you can reach me. Feel free to use! </p>
                    </div>

                    <hr className=" w-full border-neutral-100 dark:border-neutral-800" />

                    <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 ">
                        {socials.map((s) => (
                            <Card key={s.id}>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    
                                    className=" relative flex flex-col items-center gap-4 duration-800 group md:gap-8 py-14 "
                                >
                                    <span
                                        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-200 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {s.icon}
                                    </span>{" "}
                                    <div className="z-10 flex flex-col items-center">
                                        <span className="text-sm md:text-base xl:text-lg text-zinc-400 group-hover:text-zinc-300 duration-200 font-display text-center">
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
        </div>
    );
}