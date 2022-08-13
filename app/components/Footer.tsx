const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
export default function Footer({}) {
  return (
    <>
      <footer className='pt-10 mt-8 flex justify-between gap-2 text-center text-sm print:hidden md:mt-20  bg-blue-300 bg-opacity-10'>
        <div></div>
        <div>
          <p>Want to work together?</p>
          <a
            href='https://www.linkedin.com/in/hyjs/'
            rel='noopener noreferrer'
            target='_blank'>
            <p>Get in touch→</p>
          </a>
          <p>
            Built with <span className='hover:text-red-300'>♥</span> in
            Australia
          </p>
        </div>
        <div>
          <a
            onClick={scrollToTop}
            rel='noopener noreferrer'
            target='_blank'
            style={{ padding: "0px 1em", cursor: "pointer" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mx-8'
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
        </div>
      </footer>
    </>
  )
}
