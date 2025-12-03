import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const useEmailJS = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (formData, serviceId, templateId, publicKey) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        message: formData.comentarios
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (response.status === 200) {
        setSuccess(true)
        setLoading(false)
        return { success: true, message: 'Email enviado correctamente' }
      }
    } catch (err) {
      setError(err.text || 'Error al enviar el email')
      setLoading(false)
      return { success: false, message: err.text || 'Error al enviar el email' }
    }
  }

  return {
    sendEmail,
    loading,
    error,
    success
  }
}
