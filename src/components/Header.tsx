interface Profil {
  nom: string
  titre: string
  bio: string
  photo: string
  github: string
  linkedin: string
  email: string
}

function Header({ profil }: { profil: Profil }) {
  return (
    <header id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <h1>{profil.nom}</h1>
            <h2>{profil.titre}</h2>
            <p>{profil.bio}</p>

            <div className="social-links">
              <a href={profil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${profil.email}`}>Email</a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <img src={profil.photo} alt={profil.nom} className="profile-photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
