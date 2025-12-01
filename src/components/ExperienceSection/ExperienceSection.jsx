import { Boton } from '../Boton/Boton'
import { ExperienciaTexto } from '../ExperienciaTexto/ExperienciaTexto'
import { TextoDestacado } from '../TextoDestacado/TextoDestacado'
import styles from './ExperienceSection.module.css'

export const ExperienceSection = () => {
  return (
    <section id="educacion" className={styles.experienceSection}>
        <div className={styles.containerExperience}>
            <div className={styles.headingContainer}>
                <TextoDestacado as='h5'>Mi historia en diseño</TextoDestacado>
                <h4 className={styles.tituloExperience}>Mi recorrido profesional</h4>
            </div>

            <div className={styles.contenidoContainer}>
                <div className={styles.contenedorTarjetas}>
                    <article className={`${styles.tarjetaExperiencia} ${styles.tarjetaFormacion}`}>
                        <h6 className={styles.tituloTarjeta}>Formación</h6>
                            <ExperienciaTexto variant={"formacion"}>
                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>Comence la carrera de Diseñadora Gráfica en el año 2018 y <span className={styles.negritaExperience}>me recibi en Diciembre del 2024.</span>
                                </p>

                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>
                                    <span className={styles.negritaExperience}>Tuve la suerte de estudiar en la UBA, en la Facultad de Arquitectura, Diseño y Urbanismo (FADU).</span>
                                </p>

                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>La FADU fue mi primera gran experiencia en diseño: proyectos, trabajo en equipo y aprender a pensar en cada detalle.</p>
                            </ExperienciaTexto>
                    </article>

                    <article className={styles.tarjetaExperiencia}>
                        <img src="/img/estrellita.png" alt="estrellita" className={styles.estrellita}/>
                        <h6 className={styles.tituloTarjeta}>Experiencia Laboral</h6>
                            <ExperienciaTexto>
                                <h6 className={styles.tituloExperiencia}>We People (2023 – actualidad)</h6>
                                <p className={styles.parrafoExperience}>Branding, campañas publicitarias y diseño web.</p>
                            </ExperienciaTexto>
                            <ExperienciaTexto>
                                <h6 className={styles.tituloExperiencia}>Blunder (2023)</h6>
                                <p className={styles.parrafoExperience}>Contenido para redes sociales, banners y web.</p>
                            </ExperienciaTexto>
                            <ExperienciaTexto>
                                <h6 className={styles.tituloExperiencia}>Blow Agency (2022)</h6>
                                <p className={styles.parrafoExperience}>Contenido para redes sociales.</p>
                            </ExperienciaTexto>
                            <ExperienciaTexto>
                                <h6 className={styles.tituloExperiencia}>Malas palabras (2020 - 2021)</h6>
                                <p className={styles.parrafoExperience}>Creación de identidad visual y dirección de mi propio emprendimiento de indumentaria.</p>
                            </ExperienciaTexto>
                    </article>
                </div>

                <Boton value={"Descargar CV"}/>
            </div>

        </div>
    </section>
  )
}
