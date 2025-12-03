import styles from './Boton.module.css'

export const Boton = ({
  value,
  variant = 'portfolio',
  onClick,
  disabled = false,
  className = '',
  href,
  download
}) => {
  const iconoLlamada = "/img/hablemos.svg"

  // Función para renderizar el contenido según la variante
  const renderContent = () => {
    switch (variant) {
      case 'portfolio':
        return <span className={styles.textoPortfolio}>{value}</span>
      case 'llamada':
      default:
        return (
          <>
            <img className={styles.icono} src={iconoLlamada} alt="llamada" />
            <span className={styles.texto}>{value}</span>
          </>
        )
    }
  }

  // Mapear variant a la clase CSS correspondiente
  const getVariantClass = () => {
    switch (variant) {
      case 'portfolio':
        return styles.portfolio
      case 'llamada':
      default:
        return styles.botonLlamada
    }
  }

  // Si tiene href, renderizar como enlace
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.boton} ${getVariantClass()} ${className}`}
        onClick={onClick}
        download={download}
      >
        {renderContent()}
      </a>
    )
  }

  // Si no tiene href, renderizar como botón
  return (
    <button
      className={`${styles.boton} ${getVariantClass()} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  )
}