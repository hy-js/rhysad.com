import moment from "moment"
import { json } from "@remix-run/node" // or cloudflare/deno
import { useLoaderData } from "@remix-run/react"
import Seperator from "~/components/Seperator"


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
      name: "Ten Dolla Wordz",
      src: "tendollawordz.png",
      desc: "Vocabulary Building Game",
      // link: "https://github.com/hy-js/cryptixle",
      year: "2023"
    },
    {
      name: "Cryptixle",
      src: "cryptixle.png",
      desc: "A Cryptic Crossword Wordle Game",
      link: "https://github.com/hy-js/cryptixle",
      year: "2022"
    },
    {
      name: "Book Ok",
      src: "bookok.png",
      desc: "Collect, shelf, search and share books",
      link: "https://github.com/hy-js/book-ok",
      year: "2022"
    },
    {
      name: "Parallel Reader",
      src: "parallel.jpg",
      desc: "Experimental crowd-sourced translation and flash card app",
      link: "https://github.com/hy-js/parallelreader",
      year: "2021"
    }
  ]

  return (
    <>
      {latestProjects.length > 0
        ? latestProjects.map((project: any) => (
          <>
            <section className="section">
              <a href={project.html_url} target='none'>
                <div className=''>
                  <div className='border-2 border-black rounded-lg card aspect-video hover:cursor-pointer hover:opacity-75'>
                    <div className='text-2xl uppercase text-gray-400 italic flex flex-col justify-center items-center h-full'>
                      currently coding...
                    </div>
                  </div>
                  <div className='pt-8'>
                    <h2 className='text-4xl uppercase'>{project.name}</h2>
                    <p>{moment(project.pushed_at).fromNow()}</p>
                    <h5 className=' text-gray-400 '>Latest project</h5>
                  </div>
                </div>
              </a>
            </section>
            <Seperator/>
            </>
          ))
        : null}

      {projects.length > 0
        ? projects.map((project: any) => (
          <>
            <section className="section">
              <div className=''>
                <a href={project.link} target='none'>
                  <div className='rounded-lg'>
                    <img
                      src={project.src}
                      alt='image'
                      className='border-2 border-black rounded-lg bg-cover aspect-video hover:cursor-pointer hover:opacity-75'
                    />
                  </div>
                  <div className='mt-8 p-2 text-2xl font-bold  '>
                    <h2 className='text-4xl uppercase link link-underline link-underline-black text-black card'>
                      {project.name}
                    </h2>
                    <p>{project.year}</p>
                    <h5 className=' text-gray-400 '>{project.desc}</h5>
                  </div>
                </a>
              </div>
            </section>
            <Seperator/>
            </>
          ))
        : null}
    </>
  )
}
