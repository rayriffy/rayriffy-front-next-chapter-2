import { FunctionComponent, memo } from 'react'
import { projects } from '../constants/projects'

export const ProjectSection: FunctionComponent = memo(props => (
  <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Recent projects
        </h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          I made personal project regularly, sometime web applications, sometime
          arcade stuff.
        </p>
      </div>
      <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {projects.map((project, i) => (
          <div key={`project-item-${i}`}>
            <div className="space-x-2">
              {project.slugs.map(slug => (
                <div
                  className="inline-block"
                  key={`project-${i}-slug-${slug.title}`}
                >
                  <span
                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${slug.span}`}
                  >
                    {slug.title}
                  </span>
                </div>
              ))}
            </div>
            <a href={project.href} className="block mt-4">
              <p className="text-xl font-semibold text-gray-900">
                {project.name}
              </p>
              <p className="mt-3 text-base text-gray-500">{project.subtitle}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
))
