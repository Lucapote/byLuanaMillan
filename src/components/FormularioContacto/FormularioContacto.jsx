// src/components/FormularioContacto/FormularioContacto.jsx
import { useState } from 'react'
import styles from './FormularioContacto.module.css'

export const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    // Aquí puedes agregar la lógica para enviar el formulario
  }

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y apellido"
          value={formData.nombre}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <input
          type="tel"
          name="telefono"
          placeholder="Telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <textarea
          name="comentarios"
          placeholder="Comentarios"
          value={formData.comentarios}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
          rows="6"
          required
        />
      </div>

      <button type="submit" className={styles.botonEnviar}>
        Enviar
      </button>
    </form>
  )
}