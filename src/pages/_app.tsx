import { Fragment } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { AppLayout } from '../app/components/layout'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <Fragment>
      <Head>
        <title>rayriffy</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  )
}

export default NextApp
