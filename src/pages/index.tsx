import React from 'react'

import { NextPage } from 'next'

import { BlogSection } from '../modules/blog/components/section'
import { ProjectSection } from '../modules/project/components/section'

const Page: NextPage = props => {
  return (
    <React.Fragment>
      <BlogSection />
      <ProjectSection />
    </React.Fragment>
  )
}

export default Page
