

export default function Home() {
  return (

    <div className="min-h-screen">
      <div className="container flex justify-center text-justify min-h-screen px-10 lg:px-4 mx-auto sm:pt-40">
        <div className="flex flex-wrap w-[450px] sm:w-[800px] mx-auto mt-28 sm:mt-0 gap-12">
          <div className="flex flex-col items-start">
            <h1 className="pb-8 font-medium tracking-tighter text-2xl  text-zinc-50  select-none">
              Hey! I'm Pedro Braga 👋
            </h1>
            <p className="text-base sm:text-lg font-medium text-zinc-400 mb-5"> I'm a software engineer and frontend developer focused in UI/UX and interaction design.
              I specialize in Next.js, React.js and web development.
            </p>
          </div>
        </div>
      </div>
    </div>

  );

}