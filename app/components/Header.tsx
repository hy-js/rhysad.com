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
      <header className='border-b-2 mb-4 p-2'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-center '>
            <h1
              className='text-5xl italic font-vollkorn
             font-bold transition-all hover:-translate-y-[2px] md:block
            '>
              Rhys Dawson
            </h1>
          </div>
          <Socials />
        </div>

        <h2 className='text-xl  font-bold leading-tight'>
          JavaScript Web Developer
        </h2>
        <div className='flex flex-wrap gap-2 mb-2'>
          <p className=''>Works with:</p>
          {techs.map((tech, i) => (
            <p
              className='rounded-md px-2 py-1 text-sm  underline text-black'
              key={i}>
              {tech}
            </p>
          ))}
        </div>
      </header>
    </>
  )
}
