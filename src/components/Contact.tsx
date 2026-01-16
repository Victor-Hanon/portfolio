import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Merci ${formData.nom} ! Message bien recu.`)
    setFormData({ nom: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <p className="contact-eyebrow">Interessé par mon profil ?</p>
      <h2>Travaillons ensemble.</h2>
      <p className="contact-intro">
        N'hesitez pas a me contacter pour discuter de votre projet.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Votre message..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit">Envoyer le message</button>
      </form>
    </section>
  )
}

export default Contact
