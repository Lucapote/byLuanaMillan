import styles from './Boton.module.css'

export const Boton = ({value}) => {
  const iconoLlamada = "/img/hablemos.svg"

  return (
    <>
      <button className={`${styles.botonLlamada} ${styles.boton}`}>
        <img className={styles.icono} src={iconoLlamada} alt="llamada" />
        <span className={styles.texto}>{value}</span>
      </button>
    </>
  )
}
