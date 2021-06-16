import { Fragment } from 'react'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const BlogSection = dynamic(() =>
  import('../modules/blog/components/section').then(o => o.BlogSection)
)
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
