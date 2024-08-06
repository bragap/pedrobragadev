import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, Github } from "lucide-react";
import { fetchProjects } from "../lib/data";


export default async function Page() {
    const { data, error } = await fetchProjects();

    return (
        <div className="min-h-screen">
            <div className="container flex items-center justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-wrap  w-[450px] sm:pl-2 sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="text-base sm:text-2xl mb-4 text-zinc-50">Featured projects</h2>
                        <p className="text-base sm:text-lg text-zinc-400 "> Here are some of the selected projects that showcase my passion for front-end development!</p>
                    </div>
                    <hr className=" w-full border-neutral-100 dark:border-neutral-800" />
                    {data && data.map((d) => (
                        <div className="flex md:flex-row flex-col gap-4 mb-6">
                            <Image
                                alt="Me speaking on stage at React tis3 about the future of Next.js"
                                src={d.img_url}
                                width={300}
                                height={213}
                                sizes="(max-width: 768px) 213px, 33vw"
                                className="rounded-lg object-cover  md:w-1/3"
                            />
                            <div className="flex-shrink">
                                <h2 className="text-base sm:text-xl text-zinc-300 mb-2">{d.title}</h2>
                                <p className="text-sm sm:text-base text-zinc-500 mb-5">{d.description}</p>
                                <div className="flex flex-row gap-4 text-sm">
                                    <div className="flex gap-4">
                                        {d.deploy.length > 0 && (
                                            <div className=" flex items-center bg-zinc-900 py-1 px-3 rounded-3xl hover:bg-zinc-800 transition duration-300">
                                                <Link href={d.deploy} target="_blank" className="flex items-center text-zinc-300 gap-1 ">Live demo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-zinc-500 "><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"></path></svg></Link>
                                            </div>
                                        )}
                                        {d.github.length > 0 && (
                                            <div className="flex items-center bg-zinc-900 py-1 px-3 rounded-3xl hover:bg-zinc-800 transition duration-300">
                                                <Link href={d.github} target="_blank" className="flex items-center text-zinc-300 gap-1">See on Github <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-zinc-500"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd"></path></svg></Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}