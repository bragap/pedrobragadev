import { Nav } from "@/ui/Nav";
import Image from "next/image";
import staff from '@/public/images/home/staff.jpg';
import Link from "next/link";
import { MoveUpRight, Github } from "lucide-react";


export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Nav />
            <div className="container flex items-center justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-wrap text-sm w-[450px] sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="text-base sm:text-xl mb-4 text-zinc-500">Featured projects</h2>
                        <p className="text-sm sm:text-base text-zinc-300 mb-5"> Here are some of the selected projects that showcase my passion for front-end development.</p>

                    </div>

                    <div className="flex md:flex-row flex-col gap-4 mb-6">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={staff}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover w-full md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Promotional landing page for our favorite show</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] border-b-zinc-400 text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px]  border-b-zinc-400 justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>




                    <div className="flex md:flex-row flex-col gap-4 mb-6 ">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={staff}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover w-full md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Promotional landing page for our favorite show</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={staff}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover w-full md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Promotional landing page for our favorite show</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6 ">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={staff}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover w-full md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Promotional landing page for our favorite show</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}