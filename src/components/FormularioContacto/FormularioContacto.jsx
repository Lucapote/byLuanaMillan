// src/components/FormularioContacto/FormularioContacto.jsx
import { useState, useRef, useEffect } from 'react'
import styles from './FormularioContacto.module.css'
import { useEmailJS } from '../../hooks/useEmailJS'
import { emailConfig } from '../../config/emailConfig'
import gsap from 'gsap'

export const FormularioContacto = () => {
  // ... (estados iniciales formData, submitted, etc. igual que antes) ...
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  })
  const { sendEmail, loading, error, success } = useEmailJS()
  const [submitted, setSubmitted] = useState(false)


  const formRef = useRef(null)
  const tweenRef = useRef(null)

  // --- CONFIGURACIÓN DEL LATIDO (Aquí están los cambios) ---
  useEffect(() => {
    const el = formRef.current
    
    // OPCIÓN B (Rápida): Descomenta la línea de abajo y pon un color HEX más claro que tu verde actual
    const pulseColor = "#1cac58ff"; 

    tweenRef.current = gsap.to(el, {
      scale: 1.02,
      backgroundColor: pulseColor, // <--- AGREGAMOS ESTO: Anima hacia el color claro
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: false
    })

    return () => {
      if (tweenRef.current) tweenRef.current.kill()
    }
  }, [])

  // --- HANDLERS DE FOCO (Aquí están los cambios para el reset) ---
  const resetFormAppearance = () => {
    if (tweenRef.current) {
      tweenRef.current.pause()
      gsap.to(formRef.current, { 
        scale: 1, 
        // IMPORTANTE: Ponemos backgroundColor en "" (string vacío).
        // Esto le dice a GSAP que elimine el estilo en línea y vuelva 
        // al color definido originalmente en tu archivo CSS (var(--verde)).
        backgroundColor: "", 
        duration: 0.3 
      })
    }
  }

  const handleFocus = () => {
    resetFormAppearance()
  }

  const handleBlur = (e) => {
    // Si el foco sale del formulario completamente y no se ha enviado...
    if (!e.currentTarget.contains(e.relatedTarget) && !submitted) {
      if (tweenRef.current) tweenRef.current.play() // ...reanudamos el latido
    }
  }

  // ... (handleChange igual que antes) ...
   const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Detenemos y reseteamos la apariencia al enviar
    resetFormAppearance()

    const result = await sendEmail(
      // ... (tus datos de config)
      formData,
      emailConfig.serviceId,
      emailConfig.templateId,
      emailConfig.publicKey
    )

    if (result.success) {
      setSubmitted(true)
      // ... (reset del form data)
       setFormData({
        nombre: '',
        email: '',
        telefono: '',
        comentarios: ''
      })
    }
  }

  return (
    <form 
      ref={formRef}
      className={styles.formulario} 
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
     {/* ... (todo el contenido del formulario sigue exactamente igual) ... */}
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