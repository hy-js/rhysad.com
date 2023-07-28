import { Socials } from "~/components/Socials"

import moment from "moment"
import { json } from "@remix-run/node" // or cloudflare/deno
import { useLoaderData } from "@remix-run/react"

export async function loader() {
  const res = await fetch(
    "https://api.github.com/users/hy-js/repos?sort=pushed&per_page=1&direction=desc",
    {
      headers: {
        authorization: `${process.env.GITHUB_TOKEN}`
      }
    }
  )
  return json(await res.json())
}

export default function About() {
  const latestProjects = useLoaderData()
  const techs = [
    "TypeScript",
    "JavaScript",
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
  const projects = [
    {
      name: "cryptixle",
      src: "cryptixle.png",
      desc: "A Cryptic Crossword Wordle Game",
      link: "https://github.com/hy-js/cryptixle"
    },
    {
      name: "book-ok",
      src: "bookok.png",
      desc: "Collect, shelf, search and share books",
      link: "https://github.com/hy-js/book-ok"
    },
    {
      name: "parallel-reader",
      src: "parallel.jpg",
      desc: "Experimental crowd-sourced translation and flash card app",
      link: "https://github.com/hy-js/parallelreader"
    }
  ]

  return (
    <>
      <header className='mb-4 '>
        <div className=' flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-5xl italic font-vollkorn'>Rhys Dawson</h1>
            <img
              alt='Me'
              className='rounded-full w-12 h-12 ml-2'
              src='/profile.png'
            />
          </div>
          <Socials />
        </div>
        <h2 className=''>Web Developer</h2>
        <div className='flex flex-wrap gap-2 mt-2 mb-2'>
          {techs.map((tech, i) => (
            <button
              className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-white text-black'
              key={i}
              type='button'>
              {tech}
            </button>
          ))}
        </div>
      </header>

      <section className='mb-4'>
        <div>
          {latestProjects.length > 0
            ? latestProjects.map((project: any) => (
                <>
                  {/* <h2 className='text-4xl'>Latest Work</h2> */}
                  <div
                    key={project.id}
                    className='card border-2 border-black my-4 '>
                    <a href={project.html_url} target='none'>
                      <div className='flex bg-black text-white'>
                        <span className='sr-only'>GitHub</span>
                        <svg
                          className='h-5 w-5 mx-1'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <h5>hy-js/{project.name}</h5>
                      </div>
                    </a>
                    <div className=' p-2 flex items-center justify-between'>
                      <div>
                        <a
                          href={project.homepage || project.html_url}
                          target='none'>
                          <h4 className='text-xl tracking-tight sm:text-2xl text-black'>
                            {project.name}
                          </h4>{" "}
                        </a>
                        <p className='text-black'>
                          {moment(project.pushed_at).fromNow()}
                        </p>
                      </div>
                      <button
                        className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-white text-black'
                        type='button'>
                        {project.language}
                      </button>
                    </div>
                    <div className='prose lg:prose-xl mx-2'>
                      <p className='body-text'>{project.description}</p>
                    </div>
                  </div>
                </>
              ))
            : null}
        </div>
      </section>

      <section className='mb-4'>
        {/* <h2 className='text-4xl mb-4'>Previous Work</h2> */}
        <div>
          {projects.length > 0
            ? projects.map((project: any) => (
                <>
                  {/* <h5>{project.desc}</h5> */}
                  <div className='mb-8 border-2 border-black'>
                    <a href={project.link} target='none'>
                      <div className='flex bg-black text-white'>
                        <span className='sr-only'>GitHub</span>
                        <svg
                          className='h-5 w-5 mx-1'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <h5>hy-js/{project.name}</h5>
                      </div>
                    </a>
                    <img src={project.src} alt='image' />
                  </div>
                </>
              ))
            : null}
        </div>
      </section>

      <hr />
    </>
  )
}
