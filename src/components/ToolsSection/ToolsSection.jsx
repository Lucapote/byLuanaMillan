import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import { TarjetaHerramientas } from "../TarjetaHerramientas/TarjetaHerramientas"
import styles from "./ToolsSection.module.css"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const ToolsSection = () => {
    const lumi = "/img/lumiSection.png"
    const textosRef = useRef()
    const imgRef = useRef()
    const contenedorRef = useRef()
    const sectionRef = useRef()

    const herramientas = [
        {
            img: "/img/herramientas/illustrator.png",
            texto: "Illustrator",
            cName: "illustrator"
        },
        {
            img: "/img/herramientas/photoshop.png",
            texto: "Photoshop",
            cName: "photoshop"
        },
        {
            img: "/img/herramientas/afterEffects.png",
            texto: "After Effects",
            cName: "afterEffects"
        },
        {
            img: "/img/herramientas/inDesign.png",
            texto: "InDesign",
            cName: "inDesign"
        },
        {
            img: "/img/herramientas/figma.png",
            texto: "Figma",
            cName: "figma"
        },
        {
            img: "/img/herramientas/capcut.png",
            texto: "Capcut",
            cName: "capcut"
        },
        {
            img: "/img/herramientas/canva.png",
            texto: "Canva",
            cName: "canva"
        }
    ]

    useGSAP(() => {
        const tl = gsap.timeline()

        //estado inicial de las tarjetas
        gsap.set(".tarjeta-herramienta", {
            y:-100,
            opacity: 0
        })

        //animamos los textos
        gsap.from(textosRef.current.children,{
            y: -30,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "20% 85%",
                end: "30% 90%",
                toggleActions: "play none none reverse"
            }
        })

        //animacion imagen
        gsap.from(imgRef.current,{
            x: 130,
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
            scrollTrigger:{
                trigger: imgRef.current,
                start: "top 70%",
                end: "bottom 60%",
                toggleActions: "play none none reverse"
            }
        })        

        //animacion tarjetas ancladas a scroll
        gsap.to(".tarjeta-herramienta", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
            stagger: {
                amount: 1
            },
            scrollTrigger: {
                trigger: contenedorRef.current,
                start: "top bottom",
                end: "center 80%",
                scrub: 1
            }
        })

        //efectos parallax
        gsap.to(imgRef.current, {
            yPercent: -40,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        gsap.to(textosRef.current, {
            yPercent: -15,
            xPercent: 5,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        })

    })

  return (
    <section ref={sectionRef} id="herramientas" className={styles.toolsSection}>
        <div className={styles.contenedorTools}>
            <div className={styles.containerTextoImg}>
                <div ref={textosRef} className={styles.contenedorTextos}>
                    <TextoDestacado as="h4">Mis herramientas</TextoDestacado>
                    <h3 className={styles.titulo}>Mis aliados del día a día</h3>
                    <p className={styles.descripcion}>Diseño a medida para lo que tu marca necesita.</p>
                </div>

                <img ref={imgRef} src={lumi} alt="lumi" className={styles.imgLumi}/>
            </div>

            <div ref={contenedorRef}  className={styles.contenedorTarjetas}>
                {herramientas.map((herramienta, index)=>(
                    <div key={index} className="tarjeta-herramienta">
                        <TarjetaHerramientas img={herramienta.img} texto={herramienta.texto} imgClassName={herramienta.cName}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
