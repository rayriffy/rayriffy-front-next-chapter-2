import { IAPIResult } from "../@types/IAPIResult"
import { IBlog } from "../@types/IBlog"

const cardBuilder = (title: string, subtitle: string, url?: string, noExternal?: boolean): string => {
  return `
    <div class="py-2">
      ${url ? `<a href="${url}"${noExternal ? '' : 'target="_blank" rel="noopener"'}>` : ''}
        <div class="bg-gray-100 p-4 rounded-md group">
          <div class="text-xl font-semibold group-hover:underline">${title}</div>
          <div class="text-gray-700">${subtitle}</div>
        </div>
        ${url ? '</a>' : ''}
    </div>
  `
}

const fetchBlog = async () => {
  const el = document.querySelector('#blog-content')
  try {
    // Get data from Riffy Blog
    const raw: IAPIResult<IBlog[]> = await fetch('https://blog.rayriffy.com/api/author/rayriffy/1.json')
      .then(async o => await o.json())
      .catch(e => {
        throw e
      })
    
      el.innerHTML = raw.data.map(blog => cardBuilder(blog.title, blog.subtitle, blog.url)).join('')
  } catch {
    el.innerHTML = 'Failed to load blogs from API'
  }
}

const fetchLink = async () => {
  const el = document.querySelector('#link-content')
  try {
    const links = [
      {
        title: 'Riffy Blog',
        subtitle: 'The Nerdy Blogger',
        url: 'https://blog.rayriffy.com',
      },
      {
        title: 'Curriculum Vitae',
        subtitle: 'My curriculum vitae built with TypeScript',
        url: 'https://cv.rayriffy.com',
      },
    ]

    el.innerHTML = links.map(link => cardBuilder(link.title, link.subtitle, link.url)).join('')
  } catch {
    el.innerHTML = 'Failed to load links'
  }
}

const fetchSocial = async () => {
  const el = document.querySelector('#social-content')
  try {
    const links = [
      {
        title: 'Facebook',
        subtitle: 'fb.me/rayriffy',
        url: 'https://fb.me/rayriffy',
      },
      {
        title: 'Twitter',
        subtitle: '@rayriffy',
        url: 'https://twitter.com/rayriffy',
      },
      {
        title: 'GitHub',
        subtitle: 'github.com/rayriffy',
        url: 'https://github.com/rayriffy',
      },
    ]

    el.innerHTML = links.map(link => cardBuilder(link.title, link.subtitle, link.url)).join('')
  } catch {
    el.innerHTML = 'Failed to load socials'
  }
}

fetchBlog()
fetchLink()
fetchSocial()