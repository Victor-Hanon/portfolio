interface Passion {
  nom: string
  description: string
}

function Passions({ passions }: { passions: Passion[] }) {
  return (
    <section id="passions" className="passions">
      <h2>Mes Passions</h2>
      <div className="passions-container">
        {passions.map((passion, index) => (
          <div key={index} className="passion-card">
            <h3>{passion.nom}</h3>
            <p>{passion.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Passions
