import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Passions from './components/Passions'
import Footer from './components/Footer'
import Contact from './components/Contact'

interface Data {
  profil: {
    nom: string
    titre: string
    bio: string
    photo: string
    github: string
    linkedin: string
    email: string
  }
  projets: Array<{
    id: number
    titre: string
    type: string
    statut: string
    technologies: string[]
    description: string
    github?: string
    demo?: string
  }>
  competences: string[]
  passions: Array<{ nom: string; description: string }>
}

function App() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('/datas.json')
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <div className="App">
      <Header profil={data.profil} />
      <main>
        <Projects projets={data.projets} />
        <Skills competences={data.competences} />
        <Passions passions={data.passions} />
        <Contact />
      </main>
      <Footer nom={data.profil.nom} />
    </div>
  )
}

export default App
