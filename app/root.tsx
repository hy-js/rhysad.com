import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix"

import type { MetaFunction } from "remix"
import styles from "./tailwind.css"

import Theme from "~/components/Theme"
import Nav from "~/components/Nav"
import Footer from "~/components/Footer"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },

  ]
}

export const meta: MetaFunction = () => {
  return { title: "Rhys A. D. - Developer" }
}

export default function App() {
  const { color, color2, reload, setReload } = Theme()
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={
            {
              // background: "linear-gradient(#e66465, #9198e5);"
              // background: "linear-gradient(cfefdc, #9198e5);"
              // background: `linear-gradient(to bottom,  ${color} 0%,${color2} 100%)`
            }
          }
          className='h-100 bg-gradient-to-b from-orange-50'>
          <Nav />

          <div className='max-w-3xl mx-auto z-50'>
            <main className='flex flex-col justify-center px-4 sm:px-6 md:px-8 mt-8'>
              <Outlet />
            </main>
          </div>
          <div style={{ background: color2 }}>
            <Footer />
          </div>
        </div>
        <Scripts />
        <ScrollRestoration />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
