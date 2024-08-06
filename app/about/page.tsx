import Image from "next/image";
import perfil from '@/public/images/home/perfil.jpg';
import tis3 from "@/public/images/home/tis3.jpg";
import staff from '@/public/images/home/staff.jpg';
import hack from '@/public/images/home/hack.jpg';
import webtech from '@/public/images/home/webtech.jpg';
import speak from '@/public/images/home/speak.jpg';

export default function Page() {
    return (
        <div className="">
            
            <div className="container flex items-center justify-center min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-col text-sm w-[450px] pl-2 sm:w-[800px] mx-auto mt-28 sm:mt-0 lg:gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="pb-8 font-medium tracking-tighter text-2xl  text-zinc-50">Who I am</h2>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4">  I was born in Três Corações, MG, and I'm currently living in Belo Horizonte.</p>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4">I'm a passionate and dedicated Software Engineer in formation at PUC Minas. I specialize in front-end development and product design.</p>
                        <p className="text-base sm:text-lg text-zinc-400 mb-4 ">When I'm not at my desk, I am probably lifting weights, playing soccer, or at a local coffee shop :)</p>
                        <p className="text-base sm:text-lg text-zinc-400 ">My family, my girlfriend, my friends and Jesus are my base.</p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
                        <div className="relative h-40">
                            <Image
                                alt="Me speaking on stage at React tis3 about the future of Next.js"
                                src={staff}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative sm:row-span-2 row-span-1">
                            <Image
                                alt="Me standing on stage at staff delivering the keynote"
                                src={hack}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover  sm:object-center"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                alt="Me and Guillermo Rauch on stage for Vercel alfa, answering questions from the Next.js community"
                                src={webtech}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative row-span-2">
                            <Image
                                alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                                src={tis3}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover object-right sm:object-center"
                            />
                        </div>
                        <div className="relative row-span-2">
                            <Image
                                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                                src={perfil}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-40">
                            <Image
                                alt="Me standing on stage at perfilConf giving a talk about my optimism for the web"
                                src={speak}
                                fill
                                sizes="(max-width: 768px) 213px, 33vw"
                                priority
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
