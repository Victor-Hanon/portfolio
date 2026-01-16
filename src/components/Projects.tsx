interface Project {
  id: number
  titre: string
  technologies: string[]
  description: string
  github?: string
}

function Projects({ projets }: { projets: Project[] }) {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projets.filter(p => p.titre).map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.titre}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
