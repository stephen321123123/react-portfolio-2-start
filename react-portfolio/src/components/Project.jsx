import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';

export default function Project() {
  const [projects] = useState(projectsJSON);

  return (
    <section id="project" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
        {/* Section header */}
        <div className="space-y-6 sm:space-y-8 lg:col-span-2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extralight text-slate-900">Projects</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Some of the projects I have worked on recently.
          </p>
        </div>

        {/* Project cards */}
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {project.screenshots?.[0]?.url && (
              <img
                src={project.screenshots[0].url}
                alt={project.screenshots[0].caption || project.title}
                className="w-full h-56 sm:h-64 object-cover"
              />
            )}

            <div className="p-6 flex flex-col flex-1">
              <header className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <time className="text-sm text-slate-400">{project.date}</time>
              </header>

              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border rounded-full border-slate-300 text-slate-700 bg-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
