import { fetchExperience } from "../lib/data"
import { Experience } from "../lib/definitions";

export default async function Page() {
    const { data, error } = await fetchExperience();
  
    return (
        <div className="min-h-screen">
            <div className="container flex items-center justify-center  min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-col text-sm w-[450px] sm:pl-2 sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="text-base sm:text-2xl mb-4 text-zinc-50">My whole experience</h2>
                        <p className="text-base sm:text-lg text-zinc-400"> I specialize in Next.js, React.js, web development, UI/UX, and product design. I'm always looking for new challenges and opportunities to learn!</p>

                    </div>

                    <hr className=" border-neutral-100 dark:border-neutral-800" />

                    {data && data.map((d: Experience) => (
                            <div className="flex flex-col " key={d.id}>
                                <h2 className="text-base sm:text-xl text-zinc-300">{d.title}</h2>
                                <p className="mb-4 md:mb-4 text-base text-zinc-400 ">{d.date}</p>
                                <p className="text-sm sm:text-base text-zinc-500 mb-5">{d.description}</p>
                            </div>
                    ))
                    }



                    




                </div>
            </div>
        </div>
    )
}