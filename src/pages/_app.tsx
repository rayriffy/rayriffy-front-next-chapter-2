import React from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { AppLayout } from '../app/components/layout'

import '../styles/tailwind.css'

const NextApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <title>rayriffy</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </React.Fragment>
  )
}

export default NextApp
