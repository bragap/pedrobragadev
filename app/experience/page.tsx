import { Nav } from "@/ui/Nav";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Nav />
            <div className="container flex items-center justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
                <div className="flex flex-col text-sm w-[450px] sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
                    <div className="flex flex-col items-start">
                        <h2 className="text-base sm:text-xl mb-4 text-zinc-500">My fucking experience</h2>
                        <p className="text-sm sm:text-base text-zinc-300 mb-5"> I specialize in Next.js, React.js, web development, UI/UX, and product design. But I am always learning new things. See my experience below.</p>

                    </div>
                    <div className="flex flex-col ">
                        <h2 className="text-base sm:text-xl text-zinc-300">Software Engineering</h2>
                        <p className="mb-4 md:mb-4 text-base text-zinc-400 ">Jan 2023 - Dec 2026</p>
                        <p className="text-sm sm:text-base text-zinc-500 mb-5">In this experience, I am learning to become a professional capable of dealing with code, collecting requirements from clients, managing projects and making secure and scalable software.</p>
                    </div>



                    <div className="flex flex-col ">
                        <h2 className="text-base sm:text-xl text-zinc-300">Techlead in WebTech</h2>
                        <p className="mb-4 md:mb-4 text-base text-zinc-400 ">Jul 2023 - Jan 2024</p>
                        <p className="text-sm sm:text-base text-zinc-500 mb-5">A PUC Minas extension project that aims to create a workspace for students and teachers to jointly create applications, tools and content for those interested in creating digital solutions and products. On that occasion, I was active in front-end development and took on the leadership of the team as techlead, developing projects in react.js.</p>
                    </div>




                    <div className="flex flex-col ">
                        <h2 className="text-base sm:text-xl text-zinc-300">Monitor in Developing Web Interfaces</h2>
                        <p className="mb-4 md:mb-4 text-base text-zinc-400 ">Aug 2023 - Dec 2024</p>
                        <p className="text-sm sm:text-base text-zinc-500 mb-5"> I started my first internship in the area , and I was honored to be assigned as a Monitor for the Web Interface Development course. My work focused on the essential tools and languages, including
                            HTML, CSS, JavaScript, Bootstrap and jQuery. Also, while acting as a monitor, I had the opportunity to teach
                            a workshop for students on PUC's Information Technology courses. The workshop covered
                            topics related to Git, Github and Gitflow.</p>
                    </div>



                    <div className="flex flex-col ">
                        
                            <h2 className="text-base sm:text-xl text-zinc-300">Hackathon of AlfaEngenharia</h2>
                            <p className="mb-4 md:mb-4 text-base text-zinc-400 ">Aug 2023</p>
        
                        <p className="text-sm sm:text-base text-zinc-500 mb-5"> I took part in the AlfaEngenharia Hackathon. At this event, I deepened myknowledge of FrontEnd and was responsible for its complete development during the
                            activity. I used the following tools: JavaScript, HTML, CSS, Bootstrap.</p>
                    </div>




                </div>
            </div>
        </div>
    )
}