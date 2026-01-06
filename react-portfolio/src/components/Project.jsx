import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../assets/data/projects.json";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  const initialDisplay = 2;
  const displayedProjects = showAll 
    ? projectsData 
    : projectsData.slice(0, initialDisplay);
  
  return (
    <section id="projects" className="py-20 relative -mx-6 md:-mx-0">
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">

      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-3">
            Projects
          </h2>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projectsData.length > initialDisplay && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                         hover:bg-primary/90 transition-all duration-300 
                         flex items-center gap-2 mx-auto group"
            >
              {showAll ? "View Less" : "View More"}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}