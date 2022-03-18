import { Fragment } from 'react'

import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'

import { BlogSection } from '../modules/blog/components/section'
import { Blog } from '../core/@types/Blog'
import { APIResult } from '../core/@types/APIResult'

const ProjectSection = dynamic(() =>
  import('../modules/project/components/section').then(o => o.ProjectSection)
)

interface Props {
  blogs: Blog[]
}

const Page: NextPage<Props> = props => {
  const { blogs } = props

  return (
    <Fragment>
      <BlogSection blogs={blogs} />
      <ProjectSection />
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const { default: axios } = await import('axios')

  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=7200'
  )

  const { data } = await axios.get<APIResult<Blog[]>>(
    'https://blog.rayriffy.com/api/author/rayriffy?page=1'
  )

  return {
    props: {
      blogs: data.data,
    },
  }
}

export default Page
