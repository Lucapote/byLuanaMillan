import styles from './TarjetaHerramientas.module.css'

export const TarjetaHerramientas = ({img, texto, imgClassName = ""}) => {

    console.log(imgClassName);
    
  return (
    <div className={styles.contenedorPrincipal}>
        <div className={styles.tarjetaContenedor}>
            <img src={img} alt="imagen tool" className={`${styles.imagenHerramienta} ${imgClassName ? styles[imgClassName] : ""}`}/>
        </div>
    
        <h5 className={styles.tituloHerramienta}>{texto}</h5>
    </div>
  )
}
