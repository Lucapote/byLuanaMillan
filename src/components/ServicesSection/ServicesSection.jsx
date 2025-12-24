import { useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Boton } from "../Boton/Boton"
import TarjetaServicios from "../TarjetaServicios/TarjetaServicios"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import styles from "./ServicesSection.module.css"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const ServicesSection = () => {
    const sectionRef = useRef()
    const tituloRef = useRef()

    const servicios = [
        {
            icono: "/img/iconos/branding.svg",
            texto: "Branding &\nLogos"
        },
        {
            icono: "/img/iconos/contenidoRedes.svg",
            texto: "Contenido\npara redes"
        },
        {
            icono: "/img/iconos/motionGraphics.svg",
            texto: "Motion Graphics\n& Multimedia"
        },
        {
            icono: "/img/iconos/diseñoEditorial.svg",
            texto: "Diseño Editorial"
        },
        {
            icono: "/img/iconos/ilustraciones.svg",
            texto: "Ilustraciones"
        },
        {
            icono: "/img/iconos/mockups.svg",
            texto: "Mockups &\nProducción gráfica"
        },
        {
            icono: "/img/iconos/diseñoWeb.svg",
            texto: "Diseño Web"
        },
        {
            icono: "/img/iconos/motionGraphics.svg",
            texto: "Presentaciones\ncorporativas"
        }
    ]

    useGSAP(() => {
        // Animar título primero
        gsap.from(tituloRef.current.children, {
            y: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: tituloRef.current,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
        })

        // Estado inicial de las tarjetas
        gsap.set(".tarjeta-servicio", {
            y: -100,
            opacity: 0
        })

        // Animación de caída vinculada al scroll
        gsap.to(".tarjeta-servicio", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
            stagger: {
                amount: 1.5, // Distribuir el stagger en 1.5 segundos de scroll
                from: "random" // Las tarjetas caen en orden aleatorio
            },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%",
                end: "bottom bottom",
                scrub: 1
            }
        })

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="servicios" className={styles.servicesSection}>
            <div className={styles.container}>
                <div ref={tituloRef} className={styles.textoContainer}>
                    <TextoDestacado as="h3">Servicios</TextoDestacado>
                    <h4 className={styles.titulo}>Hago tu idea realidad</h4>
                </div>

                <div className={styles.containerElementos}>
                    <div className={styles.gridContainer}>
                        {servicios.map((servicio, index) => (
                            <div className="tarjeta-servicio" key={index}>
                                <TarjetaServicios imgSrc={servicio.icono} texto={servicio.texto}/>
                            </div>
                        ))}
                    </div>

                    <Boton value={"Ver Portfolio"} variant={"portfolio"} href="https://www.behance.net/luanamillan"/>
                </div>
            </div>
        </section>
    )
}