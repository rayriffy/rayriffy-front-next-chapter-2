import { Fragment, ReactElement, ReactText } from 'react'

interface Project {
  slugs: {
    title: string
    span: string
  }[]
  href: string
  name: string
  subtitle: ReactElement | ReactText
}

export const projects: Project[] = [
  {
    slugs: [
      {
        title: 'Web',
        span: 'bg-blue-100 text-blue-800',
      },
      {
        title: 'Arcade',
        span: 'bg-orange-100 text-orange-800',
      },
    ],
    href: 'https://praditnet.rayriffy.com',
    name: 'PraditNET',
    subtitle:
      'All-in-one web application for checking play records on Pradit Amusement server',
  },
  {
    slugs: [
      {
        title: 'Swift',
        span: 'bg-rose-100 text-rose-800',
      },
    ],
    href: 'https://github.com/rayriffy/taka',
    name: 'タカ (Taka)',
    subtitle: 'iPadOS video player, built for practicing rhythm games.',
  },
  {
    slugs: [
      {
        title: 'Web',
        span: 'bg-blue-100 text-blue-800',
      },
      {
        title: 'Arcade',
        span: 'bg-orange-100 text-orange-800',
      },
    ],
    href: 'https://mirai.rayriffy.com',
    name: 'Mirai',
    subtitle:
      'My thesis, and my personal project. Aiming to provide an alternative method to inserting coin into arcade machines...digitally.',
  },
  {
    slugs: [
      {
        title: 'Web',
        span: 'bg-blue-100 text-blue-800',
      },
    ],
    href: 'https://sekai.rayriffy.com',
    name: 'セカイ Wiki',
    subtitle: (
      <Fragment>
        There's an repository that contains all data dumps for the game{' '}
        <b>プロジェクトセカイ カラフルステージ！ feat. 初音ミク</b>. So, I use
        them to visualize the data and made them as a wiki for the game.
      </Fragment>
    ),
  },
  {
    slugs: [
      {
        title: 'Web',
        span: 'bg-blue-100 text-blue-800',
      },
    ],
    href: 'https://blog.rayriffy.com',
    name: 'New! Riffy Blog',
    subtitle: `My old blog is too hard to maintain. So, why not make a new one?`,
  },
  {
    slugs: [
      {
        title: 'Arcade',
        span: 'bg-orange-100 text-orange-800',
      },
    ],
    href: 'https://github.com/rayriffy/rayriffy-cron/tree/master/apps/maimai-tracker',
    name: 'maimai Progress Tracker',
    subtitle: `It's super hard to keep tracking which tracks in 3000+ tracks has not been achived with 100% score yet. So, I made an automate script to track my progress and visualize them via AirTable.`,
  },
]
