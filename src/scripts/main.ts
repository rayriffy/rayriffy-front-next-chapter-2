import { IAPIResult } from '../@types/IAPIResult'
import { IBlog } from '../@types/IBlog'

const scroller = (target: string) => {
  const el = document.querySelector(target)

  if (el !== null) {
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

// Button event listener
document.querySelector('#button-more').addEventListener('click', () => scroller('#section-blog'))

// Fetch blogs
fetch('https://blog.rayriffy.com/api/author/rayriffy?page=1')
  .then(async o => await o.json())
  .then((res: IAPIResult<IBlog[]>) => {
    // Place items
    document.querySelector('#article-blogs').innerHTML = res.data.filter((_, i) => i < 4).map(blog => `
    <article class="xl:w-1/4 md:w-1/2 p-4">
      <a href="${blog.url}" rel="noopener noreferrer" target="_blank">
        <div class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="${blog.banner.url}" alt="Banner">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">${blog.categoryCollection.items[0].name}</h3>
          <h2 class="text-lg text-gray-900 dark:text-white font-medium title-font mb-2">${blog.title}</h2>
          <p class="leading-relaxed text-base">${blog.subtitle}</p>
        </div>
      </a>
    </article>
    `).join('')
  })
  .catch(e => {
    console.error(e)
  })
