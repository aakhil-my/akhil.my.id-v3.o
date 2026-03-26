import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <section className="projects-grid container">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} {...project} />
      ))}
    </section>
  );
}