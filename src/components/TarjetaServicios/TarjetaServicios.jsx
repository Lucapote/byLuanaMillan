import styles from "./TarjetaServicios.module.css"

const TarjetaServicios = ({imgSrc, texto}) => {
  return (
    <article className={styles.tarjetaServicios}>
        <div className={styles.circuloServicios}>
            <img src={imgSrc} alt="icono" />
        </div>

        <p className={styles.textoServicio}>{texto}</p>
    </article>
  )
}

export default TarjetaServicios