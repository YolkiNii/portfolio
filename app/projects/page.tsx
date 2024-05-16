import ProjectCard from "../ui/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-2 mx-20 mt-20">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.projectLink}
              title={project.title}
              subheader={project.subheader}
              demoVideoPath={project.demoVideoPath}
              demoVideoAlt={project.demoVideoAlt}
              projectLink={project.projectLink}
              usedTechnologies={project.usedTechnologies} 
            />
          )
        })}
      </article>
    </main>
  )
}