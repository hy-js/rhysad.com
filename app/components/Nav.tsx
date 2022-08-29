import { useState } from 'react';
import { NavLink } from 'remix';
import useScrollPosition from '~/hooks/useScrollPosition';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
export default function Nav({}) {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 10 ? 'shadow ' : 'shadow-none',
          classNames(
            'z-50 transition-shadow bg-orange-50 sticky top-0 flex flex-wrap items-center justify-between py-3'
          )
        )}>
        <div className='container mx-auto flex flex-wrap items-center justify-between '>
          <div className='flex justify-between w-auto static'>
            <div className='flex justify-center items-center'>
              <NavLink
                to='/'
                className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase mx-2'>
                <span className='visible sm:invisible'>hy-js</span>
                <span className='invisible sm:visible'>Rhys Dawson</span>
              </NavLink>
            </div>
          </div>
          {/* <div className='flex flex-grow' id='example-navbar-danger'>
            <ul className='flex  flex-row  list-none ml-auto items-center '>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive
                      ? "py-2 flex items-center  text-xs uppercase font-bold leading-snug  hover:opacity-75 "
                      : " py-2 flex items-center  text-xs uppercase  leading-snug  hover:opacity-75 "
                  }>
                  <span>Now</span>
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      <aside
        className={classNames(
          scrollPosition < 100 ? 'hidden' : 'display',
          classNames(
            'transition-all bottom-0 fixed right-0 bg-white  cursor-pointer p-1 rounded-full m-4  '
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
  );
}

