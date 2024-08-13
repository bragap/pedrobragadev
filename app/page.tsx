import Link from "next/link";


export default function Home() {
    return (
        <div className=" flex flex-col justify-between">
            <div className="container flex justify-center  px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-wrap w-[450px] sm:w-[800px] pl-2 mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h1 className="animate-in-slow pb-8 font-medium tracking-tighter text-2xl text-zinc-50 select-none" style={{ "--index": 1 } as React.CSSProperties}>
                            Hey, I'm Pedro Braga!
                        </h1>
                        <p className="animate-in-slow text-base sm:text-lg font-medium text-zinc-400 mb-8" style={{ "--index": 1 } as React.CSSProperties}>
                            I'm a software engineer and frontend developer focused in UI/UX and interaction design.
                            I specialize in Next.js, React.js and web development.
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 flex-wrap" >
                            <div className="animate-in-slow flex justify-start items-center sm:justify-center bg-zinc-900 py-1 px-3 rounded-3xl hover:bg-zinc-800 transition duration-300 " style={{ "--index": 1.5 } as React.CSSProperties}>
                                <Link href="https://www.linkedin.com/in/pedrobragadecastro/" target="_blank" className=" flex items-center text-zinc-300 gap-1" >
                                    LinkedIn
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-zinc-500">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className=" animate-in-slow flex justify-start items-center sm:justify-center bg-zinc-900 py-1 px-3 rounded-3xl hover:bg-zinc-800 transition duration-300" style={{ "--index": 2 } as React.CSSProperties}>
                                <Link href="https://api.whatsapp.com/send?phone=5535999482180" target="_blank" className="flex items-center text-zinc-300 gap-1">
                                    WhatsApp
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-zinc-500">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="animate-in-slow flex justify-start items-center sm:justify-center bg-zinc-900 py-1 px-3 rounded-3xl hover:bg-zinc-800 transition duration-300" style={{ "--index": 2.5 } as React.CSSProperties}>
                                <Link href="https://github.com/bragap" target="_blank" className="flex items-center text-zinc-300 gap-1">
                                    GitHub
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 text-zinc-500">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
