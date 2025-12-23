import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import styles from "./AboutSection.module.css"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const AboutSection = () => {
    const aboutMe = "/img/aboutMe.png"
    const sectionRef = useRef()
    const imgRef = useRef()
    const textoRef = useRef()

    useGSAP(() => {
        // Timeline para efectos de entrada
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
                // markers: true // Descomenta para debug
            }
        })

        // Efectos de entrada
        tl.from(imgRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(textoRef.current.children, {
            x: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.5") // Solapar con la imagen

        // Efecto Parallax
        gsap.to(imgRef.current, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // Parallax más sutil para el texto
        gsap.to(textoRef.current, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1 // Añade suavizado
            }
        })

    }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className={styles.aboutArea}>
        <div className={styles.container}>
            <div ref={imgRef} className={styles.derechaAbout}>
                <img className={styles.imgAbout} src={aboutMe} alt="Luana Millan" />
            </div>
            <div ref={textoRef} className={styles.izquierdaAbout}>
                <TextoDestacado as="h2">Sobre Mi</TextoDestacado>
                <h1 className={styles.tituloAbout}>Soy Diseñadora Gráfica</h1>
                <h3 className={styles.descriptionAbout}>Tengo experiencia diseñando para agencias, marcas de indumentaria y proyectos independientes.</h3>
            </div>
        </div>
    </section>
  )
}
