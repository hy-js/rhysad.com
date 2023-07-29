import { Socials } from "~/components/Socials"

export default function Header({}) {
  const techs = [
    "TypeScript",
    "React",
    "NextJS",
    "Remix",
    "Node",
    "Express",
    "Svelte",
    "MongoDB",
    "Postgres",
    "Prisma",
    "Tailwind"
  ]
  return (
    <>
      <header className='mb-2 border-b-2'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-5xl italic font-vollkorn'>Rhys Dawson</h1>
          </div>
          <Socials />
        </div>
        <h2 className=''>Web Developer</h2>
        <div className='flex flex-wrap gap-2 mt-2 mb-2'>
          {techs.map((tech, i) => (
            <button
              className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-white text-black'
              key={i}>
              {tech}
            </button>
          ))}
        </div>
      </header>
    </>
  )
}
