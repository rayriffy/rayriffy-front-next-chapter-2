import { Fragment } from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { BlogSection } from '../modules/blog/components/section'

const ProjectSection = dynamic(() =>
  import('../modules/project/components/section').then(o => o.ProjectSection)
)

const Page: NextPage = () => {
  return (
    <Fragment>
      <BlogSection />
      <ProjectSection />
    </Fragment>
  )
}

export default Page
