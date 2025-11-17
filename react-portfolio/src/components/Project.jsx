import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import { cn } from '@/lib/utils';

export default function Project() {
  const [projects] = useState(projectsJSON);

  const projectCards = projects.map((project) => (
    <article
      key={project.slug}
      className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      {project.screenshots?.[0]?.url && (
        <img
          src={project.screenshots[0].url}
          alt={project.screenshots[0].caption || project.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4 flex-1 flex flex-col">
        <header className="mb-2">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <time className="text-sm text-muted-foreground">{project.date}</time>
        </header>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                  'bg-muted text-muted-foreground'
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Live
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  ));

  return (
    <section id="project" className="py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Projects I have worked on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projectCards}
        </div>
      </div>
    </section>
  );
}