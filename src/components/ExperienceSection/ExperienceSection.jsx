import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import SplitText from "gsap/src/SplitText"
import { Boton } from '../Boton/Boton'
import { ExperienciaTexto } from '../ExperienciaTexto/ExperienciaTexto'
import { TextoDestacado } from '../TextoDestacado/TextoDestacado'
import styles from './ExperienceSection.module.css'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export const ExperienceSection = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    const florRef = useRef()
    const tarjetaIzqRef = useRef()
    const tarjetaDerRef = useRef()
    const sectionRef = useRef()
    const titulosRef = useRef()
    const tituloRef = useRef()
    
    useGSAP(()=>{
        //flor giratoria infinita
        gsap.to(florRef.current, {
            rotate: 360,
            duration: 2,
            repeat: -1,
            ease: "none"
        })
        
        // Esperar a que las fuentes estén listas
        document.fonts.ready.then(() => {
            // AHORA sí crear el SplitText
            const split = SplitText.create(tituloRef.current, {
                type: "chars"
            })
            

            if(!isMobile){
                // Animar los chars
                gsap.from(split.chars, {
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: titulosRef.current,
                        start: "top 80%",
                        end: "30% 50%",
                        scrub: 1
                    }
                })      
            }else{
                gsap.from(split.chars, {
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: titulosRef.current,
                        start: "top 80%",
                        end: "bottom 70%",
                        scrub: 1
                    }
                })      

            }
        })

        if(!isMobile){
            //animacion subitulo
            gsap.from(titulosRef.current.children[0], {
                y: -30, 
                autoAlpha: 0,
                ease: "elastic.inOut",
                scrollTrigger: {
                    trigger: titulosRef.current,
                    start: "top 80%",
                    end: "20% 50%",
                    scrub: 1
                }
            })
            //animaciones tarjetas
            gsap.from(tarjetaIzqRef.current, {
                x: -150,
                duration: 1.5,
                ease: "bounce.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "40% 60%",
                    scrub: 1,
                }
            })
            
            gsap.from(tarjetaDerRef.current, {
                x: 150,
                duration: 1,
                ease: "bounce.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "40% 60%",
                    scrub: 1
                }
            })
        }else{
            //animacion subitulo
            gsap.from(titulosRef.current.children[0], {
                y: -30, 
                autoAlpha: 0,
                ease: "elastic.inOut",
                scrollTrigger: {
                    trigger: titulosRef.current,
                    start: "top 80%",
                    end: "20% 50%",
                    scrub: 1
                }
            })
            //animaciones tarjetas
            gsap.from(tarjetaIzqRef.current, {
                xPercent: -200,
                duration: 1.5,
                ease: "bounce.inOut",
                scrollTrigger: {
                    trigger: tarjetaIzqRef.current,
                    start: "top 60%",
                    end: "30% 60%",
                    scrub: 1
                }
            })
            
            gsap.from(tarjetaDerRef.current, {
                xPercent: 200,
                duration: 1,
                ease: "bounce.inOut",
                scrollTrigger: {
                    trigger: tarjetaDerRef.current,
                    start: "top 60%",
                    end: "30% 60%",
                    scrub: 1
                }
            })
        }
    })

  return (
    <section ref={sectionRef} id="educacion" className={styles.experienceSection}>
        <div className={styles.containerExperience}>
            <div ref={titulosRef} className={styles.headingContainer}>
                <TextoDestacado as='h5'>Mi historia en diseño</TextoDestacado>
                <h4 ref={tituloRef} className={styles.tituloExperience}>Mi recorrido profesional</h4>
            </div>

            <div className={styles.contenidoContainer}>
                <div className={styles.contenedorTarjetas}>
                    <article ref={tarjetaIzqRef} className={`${styles.tarjetaExperiencia} ${styles.tarjetaFormacion}`}>
                        <h6 className={styles.tituloTarjeta}>Formación</h6>
                            <ExperienciaTexto variant={"formacion"}>
                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>Comencé la carrera de Diseñadora Gráfica en el año 2018 y <span className={styles.negritaExperience}>me recibí en Diciembre del 2024.</span>
                                </p>

                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>
                                    <span className={styles.negritaExperience}>Tuve la suerte de estudiar en la UBA, en la Facultad de Arquitectura, Diseño y Urbanismo (FADU).</span>
                                </p>

                                <p className={`${styles.parrafoExperience} ${styles.parrafoFormacion}`}>La FADU fue mi primera gran experiencia en diseño: proyectos, trabajo en equipo y aprender a pensar en cada detalle.</p>
                            </ExperienciaTexto>
                    </article>

                    <article ref={tarjetaDerRef} className={styles.tarjetaExperiencia}>
                        <img ref={florRef} src="/img/estrellita.png" alt="estrellita" className={styles.estrellita}/>
                        <h6 className={styles.tituloTarjeta}>Experiencia Laboral</h6>
                            <ExperienciaTexto>
                                <h6 className={styles.tituloExperiencia}>We People (2023 – 2025)</h6>
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

                <Boton
                    value={"Descargar CV"}
                    href="/CvLuanaMillan.pdf"
                    download="CV-Luana-Millan.pdf"
                    className='descargar'
                />
            </div>

        </div>
    </section>
  )
}
