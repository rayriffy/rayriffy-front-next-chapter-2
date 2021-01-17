import useSWR from 'swr'

import { APIResult } from '../../../core/@types/APIResult'
import { Blog } from '../../../core/@types/Blog'

export const useBlog = () => {
  const { data, error } = useSWR<APIResult<Blog[]>>(
    'https://blog.rayriffy.com/api/author/rayriffy?page=1',
    url => fetch(url).then(r => r.json())
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
