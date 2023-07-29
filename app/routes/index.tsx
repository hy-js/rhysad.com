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
  const latestProjects = [
    {
      name: "cryptixle",
      desc: "A Cryptic Crossword Wordle Game",
      html_url: "https://github.com/hy-js/cryptixle"
    }
  ]

  // useLoaderData()

  const projects = [
    {
      name: "cryptixle",
      src: "cryptixle.png",
      desc: "A Cryptic Crossword Wordle Game",
      link: "https://github.com/hy-js/cryptixle",
      year: "2022"
    },
    {
      name: "book-ok",
      src: "bookok.png",
      desc: "Collect, shelf, search and share books",
      link: "https://github.com/hy-js/book-ok",
      year: "2022"
    },
    {
      name: "parallel-reader",
      src: "parallel.jpg",
      desc: "Experimental crowd-sourced translation and flash card app",
      link: "https://github.com/hy-js/parallelreader",
      year: "2021"
    }
  ]

  return (
    <>
      <section className='mb-4'>
        <div>
          {latestProjects.length > 0
            ? latestProjects.map((project: any) => (
                <div className='mb-10 border-b-2'>
                  <a href={project.link} target='none'>
                    <div className='rounded-lg card aspect-video'>
                      <div className='text-3xl uppercase text-gray-400 italic flex flex-col justify-center items-center h-full'>
                        coming soon
                      </div>
                    </div>
                    <div className='m-2'>
                      <h2 className='text-5xl uppercase'>{project.name}</h2>
                      <p className='text-2l'>
                        {moment(project.pushed_at).fromNow()}
                      </p>
                      <h5 className='text-2l text-gray-400 '>{project.desc}</h5>
                    </div>
                  </a>
                </div>
              ))
            : null}
        </div>
      </section>

      <section className='mb-4'>
        <div>
          {projects.length > 0
            ? projects.map((project: any) => (
                <>
                  <div className='mb-10 border-b-2'>
                    <a href={project.link} target='none'>
                      <div className='rounded-lg'>
                        <img
                          src={project.src}
                          alt='image'
                          className='rounded-lg bg-cover aspect-video'
                        />
                      </div>
                      <div className='m-2'>
                        <h2 className='text-5xl uppercase'>{project.name}</h2>
                        <p className='text-2l'>{project.year}</p>
                        <h5 className='text-2l text-gray-400 '>
                          {project.desc}
                        </h5>
                      </div>
                    </a>
                  </div>
                </>
              ))
            : null}
        </div>
      </section>
    </>
  )
}
