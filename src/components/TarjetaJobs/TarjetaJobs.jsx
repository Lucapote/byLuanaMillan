import styles from './TarjetaJobs.module.css'

export const TarjetaJobs = ({ img, titulo, texto }) => {
  return (
    <div className={styles.tarjetaContainer}>
      {/* Opción 1: Usar img normal con overlay */}
      <img className={styles.imagenFondo} src={img} alt={titulo} />
      
      {/* Contenido de texto */}
      <div className={styles.contenido}>
        <h5 className={styles.titulo}>{titulo}</h5>
        <h6 className={styles.texto}>{texto}</h6>
      </div>
    </div>
  )
}