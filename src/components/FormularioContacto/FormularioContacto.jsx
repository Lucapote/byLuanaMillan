// src/components/FormularioContacto/FormularioContacto.jsx
import { useState } from 'react'
import styles from './FormularioContacto.module.css'
import { useEmailJS } from '../../hooks/useEmailJS'
import { emailConfig } from '../../config/emailConfig'

export const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  })

  const { sendEmail, loading, error, success } = useEmailJS()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await sendEmail(
      formData,
      emailConfig.serviceId,
      emailConfig.templateId,
      emailConfig.publicKey
    )

    if (result.success) {
      setSubmitted(true)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        comentarios: ''
      })
    }
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

      {error && (
        <span className={styles.errorMessage}>
          {error}
        </span>
      )}

      <button
        type="submit"
        className={styles.botonEnviar}
        disabled={loading || submitted}
      >
        {loading ? 'Enviando...' : submitted ? 'Enviado' : 'Enviar'}
      </button>
    </form>
  )
}