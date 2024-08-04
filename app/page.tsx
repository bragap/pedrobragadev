import Link from "next/link";

const links = [
  {
    id: 1,
    link: "/about",
    name: "About"
  },
  {
    id: 2,
    link: "/experience",
    name: "Experience"
  },
  {
    id: 3,
    link: "/projects",
    name: "Projects"
  },
  {
    id: 4,
    link: "/contact",
    name: "Contact"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black space-y-3">
      <ul className="flex items-center justify-center gap-4">
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className=" text-zinc-400 hover:text-zinc-200 duration-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
      <div className=" w-screen h-px block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-200 bg-white cursor-default text-edge-outline font-display sm:text-3xl md:text-5xl whitespace-nowrap bg-clip-text select-none">
        Hey! I'm Pedro Braga 👋
      </h1>
      <div className=" w-screen h-px block  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="text-center px-10 md:mx-0">
        <h2 className="text-sm text-zinc-400 ">
          I’m a Software Engineer and FullStack Developer focused in UI/UX and Interaction Design.
        </h2>
      </div>
    </div>
  );

}