import styles from "./AboutSection.module.css"

export const AboutSection = () => {
    const aboutMe = "/public/img/aboutMe.png"

  return (
    <section className={styles.aboutArea}>
        <div className={styles.container}>
            <div className={styles.derechaAbout}>
                <img className={styles.imgAbout} src={aboutMe} alt="Luana Millan" />
            </div>
            <div className={styles.izquierdaAbout}>
                <h2 className={styles.subtituloAbout}>Sobre mi</h2>
                <h1 className={styles.tituloAbout}>Soy Diseñadora Gráfica</h1>
                <h3 className={styles.descriptionAbout}>Tengo experiencia diseñando para agencias, marcas de indumentaria y proyectos independientes.</h3>
            </div>
        </div>
    </section>
  )
}
