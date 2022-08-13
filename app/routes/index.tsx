import Image from "remix-image"
import { Socials } from "~/components/Socials"
import moment from "moment"
import { json } from "@remix-run/node" // or cloudflare/deno
import { Link, useLoaderData } from "@remix-run/react"

export async function loader() {
  const res = await fetch(
    "https://api.github.com/users/hy-js/repos?sort=updated&per_page=3",
    {
      headers: {
        authorization: `${process.env.GITHUB_TOKEN}`
      }
    }
  )
  return json(await res.json())
}

export default function About() {
  const projects = useLoaderData()
  return (
    <>
      <header className='mb-8'>
        <Image
          loaderUrl='/api/image'
          className='rounded-full '
          src='/profile.png'
          responsive={[
            {
              size: {
                width: 120,
                height: 120
              },
              maxWidth: 300
            }
          ]}
          dprVariants={[1, 3]}
        />
        <div className='flex flex-col justify-center '>
          <h1 className='text-5xl font-extrabold  tracking-tight sm:text-8xl '>
            Hy, I'm Rhys Dawson 👋
          </h1>
          <h2 className='text-2xl tracking-tight sm:text-5xl'>
            JS developer & instructor
          </h2>
        </div>
        <Socials />
      </header>

      <section className='mb-8 '>
        <div className=' prose lg:prose-xl mb-8'>
          <p className='body-text mt-8 '>
            I'm a junior software engineer specialising in single page
            applications and currently working as a full-stack bootcamp
            instructor.
          </p>
          <p className='body-text'>
            I am passionate about exploring language, aesthetics, and logic in
            everyday and innovative web applications that positively impact
            users.
          </p>
          <h3 className='text-2xl tracking-tight sm:text-4xl'>Working with:</h3>

          <div className='flex flex-wrap gap-2 '>
            <button
              className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-neutral-100'
              type='button'>
              TypeScript
            </button>
            <button
              className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-neutral-100'
              type='button'>
              NextJS
            </button>
            <button
              className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-neutral-100'
              type='button'>
              TailwindCSS
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className=''>
          <div className='prose lg:prose-xl '>
            <h3 className='text-2xl tracking-tight sm:text-4xl'>
              Latest Projects:
            </h3>
          </div>
          {projects.length > 0 &&
            projects.map((project: any) => (
              <div
                key={project.id}
                className='border border-gray-500 my-4 bg-neutral-100'>
                <div className='bg-black  p-2 flex items-center justify-between'>
                  <div>
                    <a href={project.html_url}>
                      <h4 className='text-xl tracking-tight sm:text-2xl text-white mx-2'>
                        {project.name}
                      </h4>
                    </a>
                    <p className='mx-2 text-white'>
                      {moment(project.updated_at).fromNow()}
                    </p>
                  </div>
                  <button
                    className='rounded-md px-2 py-1 text-sm border border-gray-500 bg-neutral-100'
                    type='button'>
                    {project.language}
                  </button>
                </div>
                <div className='prose lg:prose-xl mx-2'>
                  <p className='body-text'>{project.description}</p>
                  <a href={project.html_url}>Source Code</a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}
