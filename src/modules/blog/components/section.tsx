import { FunctionComponent, Fragment, memo } from 'react'

import { useBlog } from '../services/useBlog'
import { Card } from './card'
import { Skeleton } from './skeleton'

export const BlogSection: FunctionComponent = memo(() => {
  const { isError, isLoading, data } = useBlog()

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            I usually write my stupid and interesting stuff on my personal blog
            as well. Here's some of them.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {isLoading ? (
            <Fragment>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Fragment>
          ) : isError ? (
            'Fail'
          ) : (
            <Fragment>
              {data.data.map(blog => (
                <Card key={`blog-${blog.slug}`} blog={blog} />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
})
