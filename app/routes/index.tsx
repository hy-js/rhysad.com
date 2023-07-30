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
  // [
  //   {
  //     name: "cryptixle",
  //     desc: "A Cryptic Crossword Wordle Game",
  //     html_url: "https://github.com/hy-js/cryptixle"
  //   }
  // ]

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
      <section>
        {latestProjects.length > 0
          ? latestProjects.map((project: any) => (
              <a href={project.html_url} target='none'>
                <div className='border-b-2 mb-4'>
                  <div className='rounded-lg card aspect-video'>
                    <div className='text-2xl uppercase text-gray-400 italic flex flex-col justify-center items-center h-full'>
                      currently coding...
                    </div>
                  </div>
                  <div className=''>
                    <h2 className='text-4xl uppercase'>{project.name}</h2>
                    <p>{moment(project.pushed_at).fromNow()}</p>
                    <h5 className=' text-gray-400 '>Latest project</h5>
                  </div>
                </div>
              </a>
            ))
          : null}
      </section>

      <section>
        {projects.length > 0
          ? projects.map((project: any) => (
              <div className='border-b-2 mb-4'>
                <a href={project.link} target='none'>
                  <div className='rounded-lg'>
                    <img
                      src={project.src}
                      alt='image'
                      className='rounded-lg bg-cover aspect-video'
                    />
                  </div>
                  <div className=''>
                    <h2 className='text-4xl uppercase'>{project.name}</h2>
                    <p>{project.year}</p>
                    <h5 className=' text-gray-400 '>{project.desc}</h5>
                  </div>
                </a>
              </div>
            ))
          : null}
      </section>
    </>
  )
}
