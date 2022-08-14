import { useState } from "react"
import { NavLink } from "remix"
import useScrollPosition from "~/hooks/useScrollPosition"

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ")
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
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
            "transition-shadow bg-orange-50 sticky top-0 flex flex-wrap items-center justify-between py-3"
          )
        )}>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='flex justify-center items-center'>
              {/* <img
                alt='Me'
                className={classNames(
                  scrollPosition > 10 ? "display" : "opacity-0",
                  classNames(
                    "rounded-full mx-2"
                  )
                )}
                src='/profile.png'
                width={25}
                height={25}
              /> */}
              <NavLink
                to='/'
                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'>
                Rhys Dawson
              </NavLink>
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
              </li> */}
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
              {/* <li>
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
      <aside
        className={classNames(
          scrollPosition < 100 ? "hidden" : "display",
          classNames(
            "transition-all bottom-0 fixed right-0 bg-white cursor-pointer p-1 rounded-full m-4 border border-gray-500"
          )
        )}>
        <a onClick={scrollToTop} rel='noopener noreferrer' target='_blank'>
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
              d='M5 15l7-7 7 7'
            />
          </svg>
        </a>
      </aside>
    </>
  )
}
