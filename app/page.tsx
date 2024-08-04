

export default function Home() {
  return (

    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="container flex  justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
        <div className="flex flex-wrap text-sm w-[450px] sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
          <div className="flex flex-col items-start">
            <h1 className="pb-8 z-10 text-2xl text-white  md:text-3xl select-none">
              Hey! I'm Pedro Braga 👋
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 mb-5">Welcome to my portfolio! I'm a software engineer and frontend developer focused in UI/UX and interaction design. I'm passionate about creating beautiful and functional interfaces, and I'm always looking for new challenges and opportunities to learn and grow.</p>
          </div>
        </div>
      </div>
    </div>

  );

}