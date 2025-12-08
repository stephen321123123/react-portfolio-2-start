import { Link } from "react-router-dom";
import projects from "@/assets/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="fade-up space-y-10">
      <h2 className="text-4xl font-semibold text-center">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/project/${project.slug}`}
            className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-card"
          >
            <img
              src={project.screenshots?.[0]?.url}
              className="w-full h-48 object-cover"
              alt={project.title}
            />

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-sm underline">View details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
