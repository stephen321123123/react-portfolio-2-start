import { useParams, Link } from "react-router-dom";
import projects from "@/assets/data/projects.json";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-40 text-center text-xl text-muted-foreground">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-animated text-foreground pt-28 px-6">
      
      {/* Back link */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
        >
          <span className="text-xl">←</span>
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      {/* Project Title */}
      <header className="max-w-4xl mx-auto space-y-4 mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg">
          {project.description}
        </p>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mb-16">
        <img
          src={project.screenshots?.[0]?.url}
          alt={project.title}
          className="w-full rounded-xl shadow-lg border border-border object-cover max-h-[480px]"
        />
      </div>
      {/* Spacing between image and content */}
      <div className="mt-12"></div>

      {/* Content Card (same width as hero image) */}
      <section className="max-w-5xl mx-auto bg-card border border-border rounded-xl shadow p-8 space-y-8 mt-10">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-px w-full bg-border" />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Live Demo →
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-5 py-2 rounded-lg border border-border hover:bg-accent transition font-medium"
            >
              GitHub
            </a>
          )}
        </div>

      </section>

      <div className="py-20" />
    </div>
  );
}
