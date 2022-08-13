import { useState } from "react"
import { NavLink } from "remix"
import useScrollPosition from "~/hooks/useScrollPosition"

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ")
}
export default function Nav({}) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 10 ? "shadow " : "shadow-none",
          classNames(
            "transition-shadow bg-purple-50 sticky top-0 flex flex-wrap items-center justify-between py-3"
          )
        )}>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='flex justify-center items-center'>
              <NavLink
                to='/'
                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'>
                Rhys Dawson
              </NavLink>

              <a
                href='https://LinkedIn/hy-js'
                target='none'
                className='hover:text-orange-300'>
                <span className='sr-only'>LinkedIn</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mx-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                </svg>
              </a>
              <a
                href='https://github.com/hy-js'
                target='none'
                className=' hover:text-orange-300'>
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
              </a>
              <a
                href='https://twitter.com/rhysad_dev'
                target='none'
                className='hover:text-orange-300'>
                <span className='sr-only'>Twitter</span>
                <svg
                  className='h-5 w-5 mx-1'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>
            </div>
            <button
              className=' cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive
                      ? "py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 "
                      : " py-2 flex items-center text-xs uppercase  leading-snug  hover:opacity-75 "
                  }>
                  <span className='ml-2'>About</span>
                </NavLink>
              </li>
              {/* <li className='nav-item'>
                <NavLink
                  to='/projects'
                  className={({ isActive }) =>
                    isActive
                      ? "current  py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 "
                      : " py-2 flex items-center text-xs uppercase  leading-snug  hover:opacity-75 "
                  }>
                  <span className='ml-2'>Projects</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/blog'
                  className={({ isActive }) =>
                    isActive
                      ? "current  py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 "
                      : " py-2 flex items-center text-xs uppercase leading-snug  hover:opacity-75 "
                  }>
                  <span className='ml-2'>Blog</span>
                </NavLink>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 mx-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                </svg>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
