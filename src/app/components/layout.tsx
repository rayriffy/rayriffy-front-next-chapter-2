import { Fragment, FunctionComponent } from 'react'

import Image from 'next/image'

import { Footer } from './footer'
import { ServiceWorker } from './serviceWorker'

import { Logo } from './logo'

export const AppLayout: FunctionComponent = props => {
  const { children } = props

  return (
    <Fragment>
      <header className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0">
                  <div className="flex items-center w-full">
                    <a href="#">
                      <span className="sr-only">rayriffy</span>
                      <Logo className="h-8 w-auto sm:h-10" />
                    </a>
                    <div className="mx-4 h-6 sm:h-8 border-l-2 border-gray-300"></div>
                    <div>
                      <a
                        href="https://webring.wonderful.software#rayriffy.com"
                        title="webring"
                      >
                        <img
                          alt="webring"
                          src="/webring.svg"
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline pr-2">Hey all!</span>
                  <span className="block text-blue-600 xl:inline">
                    Riffy here
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Welcome to the front frontier of rayriffy.com! You can find
                  various projects that I made and my information here.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://facebook.com/rayriffy"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://github.com/rayriffy"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          id="next-image-override"
        >
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/rayriffy.jpg"
            width={1620}
            height={1080}
            layout="responsive"
            priority
            alt="rayriffy"
          />
        </div>
      </header>
      {children}
      <Footer />
      <ServiceWorker />
    </Fragment>
  )
}
