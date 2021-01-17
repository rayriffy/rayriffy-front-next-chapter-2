import React from 'react'

import Image from 'next/image'

import { Blog } from '../../../core/@types/Blog'

interface Props {
  blog: Blog
}

export const Card: React.FC<Props> = React.memo(props => {
  const { categoryCollection, title, subtitle, banner, slug } = props.blog

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          src={banner.url}
          width={banner.width}
          height={banner.height}
          layout="responsive"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            {categoryCollection.items[0].name}
          </p>
          <a href={`https://blog.rayriffy.com/${slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{subtitle}</p>
          </a>
        </div>
      </div>
    </div>
  )
})
