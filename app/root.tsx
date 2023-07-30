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

import Accent from "~/components/Accent"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => {
  return { title: "Rhys Dawson" }
}

export default function App() {
  const { color } = Accent()
  const css = `
    .card {
        background-color: ${color};
    }
    .accent {
      color: ${color};
    }
    .hov:hover {
        color: ${color};
    }
    ::selection {
      background: ${color};
    }

`
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='h-100 bg-orange-50'>
        <div>
          <div className='max-w-7xl mx-auto animate-fade-in-up h-100 bg-orange-50'>
            <main className='flex flex-col justify-center px-4 sm:px-6 md:px-8 mt-4 h-100 '>
              <Header />
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
        <Scripts />
        <ScrollRestoration />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
      <style>{css}</style>
    </html>
  )
}
