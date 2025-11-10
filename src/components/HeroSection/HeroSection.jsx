import { Boton } from "../Boton/Boton"
import styles from "./HeroSection.module.css"

export const HeroSection = () => {
    const lumiHeader = "/public/img/lumiHero.png"

  return (
    <section className={styles.sectionArea}>
        <div className={styles.container}>
            <div className={styles.derechaSection}>
                <h2 className={styles.quienSoy}>Soy Luana Millán y soy Diseñadora Gráfica</h2>
                <h1 className={styles.tituloSection}>¿Necesitas diseño para tu marca?</h1>
                <h3 className={styles.subtituloSection}>Me apasiona transformar ideas en imágenes que conecten, inspiren y hagan crecer marcas.</h3>
                <Boton value={"hablemos"}/>
            </div>
            <div className={styles.izquierdaSection}>
                <img className={styles.imgSection} src={lumiHeader} alt="lumi" />
            </div>
        </div>
    </section>
  )
}
