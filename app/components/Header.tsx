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
      <header className='border-b-2 mb-4'>
        <div className=' flex  justify-between'>
          <div className='flex  flex-wrap '>
            <h1
              className='text-5xl italic font-vollkorn
             font-bold transition-all hover:-translate-y-[2px] md:block
            '>
              Rhys Dawson
            </h1>
          </div>
          <Socials />
        </div>

        <h2 className='text-xl'>JavaScript Web Developer</h2>
        {/* <div className='flex flex-wrap  mb-2'>
          {techs.map((tech, i) => (
            <p
              className='rounded-md px-1 text-sm  underline text-black'
              key={i}>
              {tech}
            </p>
          ))}
        </div> */}
      </header>
    </>
  )
}
