function Skills({ competences }: { competences: string[] }) {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {competences.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills
