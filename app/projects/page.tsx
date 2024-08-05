import Image from "next/image";
import net from '@/public/images/projects/netflix.png';
import depinho from '@/public/images/projects/depinho.png';
import puc from '@/public/images/projects/puc.png';
import healthassist from '@/public/images/projects/healthassist.png';
import foodie from '@/public/images/projects/foodie.png';
import nlw from '@/public/images/projects/nlw.png';
import Link from "next/link";
import { MoveUpRight, Github } from "lucide-react";


export default function Page() {
    return (
        <div className="min-h-screen">
            <div className="container flex items-center justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-wrap  w-[450px] sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="text-base sm:text-2xl mb-4 text-zinc-50">Featured projects</h2>
                        <p className="text-base sm:text-lg text-zinc-400 "> Here are some of the selected projects that showcase my passion for front-end development.</p>
                    </div>

                    <hr className=" w-full border-neutral-100 dark:border-neutral-800" />

                    <div className="flex md:flex-row flex-col gap-4 mb-6">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={net}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Netflix interface with React.js and Tailwind</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This Netflix interface project deepened my knowledge of Tailwind CSS, React, and TypeScript, using Mobile First for a fully responsive experience. I integrated The Movie DB's free API for real movie and series data.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] border-b-zinc-400 text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px]  border-b-zinc-400 justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6 ">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={depinho}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">E-commerce for the company De Pinho Multimídia</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This project was developed for a client who needed a website for his company. The site was developed using Javascript, Java and PostresSQL.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={puc}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Digital Technologies Postgraduate PUC Minas website</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This project was developed for the Digital Technologies Postgraduate course at PUC Minas. The site was developed using React.js and Node.js</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={foodie}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Foodie - Landing Page with React.js and Material Design</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This project was developed to practice my skills with React.js and Material Design. The project is a landing page for a fictional restaurant.</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6 ">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={nlw}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">Rocketseat - NLW Journey</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This project was developed during the NLW Journey event, promoted by Rocketseat. The project is a web application with React.js, Typescript and Tailwind.css</p>
                            <div className="flex flex-row gap-4 text-sm">
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] text-sm text-zinc-400 gap-1 hover:text-zinc-200 transition duration-300">LIVE DEMO <MoveUpRight /></Link>
                                <Link href="https://github.com/bragap" target="_blank" className="flex  border-b-[1px] justify-center text-sm text-zinc-400 gap-2 hover:text-zinc-200 transition duration-300">SEE ON GITHUB <Github /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 mb-6 ">
                        <Image
                            alt="Me speaking on stage at React tis3 about the future of Next.js"
                            src={healthassist}
                            width={300}
                            height={213}
                            sizes="(max-width: 768px) 213px, 33vw"
                            className="rounded-lg object-cover  md:w-1/3"
                        />
                        <div className="flex-shrink">
                            <h2 className="text-base sm:text-xl text-zinc-300 mb-2">HealthAssist</h2>
                            <p className="text-sm sm:text-base text-zinc-500 mb-5">This project was developed for the discipline of Software Engineering at PUC Minas. The project is a web application that aims to assist in the management of health clinics.</p>
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