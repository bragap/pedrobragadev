import Image from "next/image";
import perfil from '@/public/images/home/perfil.jpg';
import tis3 from "@/public/images/home/tis3.jpg";
import staff from '@/public/images/home/staff.jpg';
import hack from '@/public/images/home/hack.jpg';
import webtech from '@/public/images/home/webtech.jpg';
import speak from '@/public/images/home/speak.jpg';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Pedro Braga",
    description: "Software Engineer and Front-End Developer.",
  };
  
export default function Page() {
    return (
        <div className="">
            
            <div className="container flex items-center justify-center min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-col text-sm w-[450px] pl-2 sm:w-[800px] mx-auto mt-28 sm:mt-0 lg:gap-12">
                    <div className="animate-in-slow flex flex-col items-start " style={{ "--index": 1 } as React.CSSProperties}>
                        <h2 className="pb-8 font-medium tracking-tighter text-2xl  text-zinc-50">Who I am</h2>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4">  I was born in Três Corações, MG, and I'm currently living in Belo Horizonte.</p>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4">I'm a passionate and dedicated Software Engineer in formation at PUC Minas. I specialize in front-end development and product design.</p>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4 ">When I'm not at my desk, I am probably lifting weights, playing soccer, or at a local coffee shop :)</p>
                        <p className="text-base sm:text-lg text-zinc-400 ">My family, my girlfriend, my friends and Jesus are my base.</p>
                    </div>
                    <div className=" grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 " >
                        <div className="relative h-40">
                            <Image
                                alt="staff with Rommel Carneiro"
                                src={staff}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover animate-in-slow"
                                style={{ "--index": 1.5 } as React.CSSProperties}
                            />
                        </div>
                        <div className="relative sm:row-span-2 row-span-1">
                            <Image
                                alt="hackathon alfa"
                                src={hack}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover  sm:object-center animate-in-slow"
                                style={{ "--index": 1.8 } as React.CSSProperties}
                            />
                        </div>
                        <div className="relative">
                            <Image
                                alt="webtech team"
                                src={webtech}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover animate-in-slow"
                                style={{ "--index": 2.1} as React.CSSProperties}
                            />
                        </div>
                        <div className="relative row-span-2">
                            <Image
                                alt="tis3"
                                src={tis3}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover object-right sm:object-center animate-in-slow"
                                style={{ "--index": 2.4} as React.CSSProperties}
                            />
                        </div>
                        <div className="relative row-span-2">
                            <Image
                                alt="my perfil"
                                src={perfil}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover animate-in-slow"
                                style={{ "--index": 2.7} as React.CSSProperties}

                            />
                        </div>
                        <div className="relative h-40">
                            <Image
                                alt="speak in alfa"
                                src={speak}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover animate-in-slow"
                                style={{ "--index": 3} as React.CSSProperties}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
