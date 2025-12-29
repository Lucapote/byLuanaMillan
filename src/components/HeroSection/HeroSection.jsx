import { Boton } from "../Boton/Boton"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import styles from "./HeroSection.module.css"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const HeroSection = () => {
    const lumiHeader = "/img/lumiHero.png"
    const divTexto = useRef()
    const imgLumi = useRef()
    const sectionRef = useRef()
    const botonRef = useRef()
    const isMobile = useMediaQuery({maxWidth: 767})

    useGSAP(()=>{
        const tl = gsap.timeline();

        if(!isMobile){
        //ParalaxEffect
        gsap.to(divTexto.current,
            {
                yPercent: 40,
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )

        gsap.to(imgLumi.current,
            {
                yPercent: -40,
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
        }else{
        //ParalaxEffect
        gsap.to(divTexto.current,
            {
                yPercent: 80,
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "80% 30%",
                    scrub: true
                }
            }
        )
        
        gsap.to(imgLumi.current,
            {
                yPercent: -60,
                rotation: 360,
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            }
        )
        }

        tl.from(divTexto.current,
            {
                delay:1,
                x: -150,
                duration: 1
            })
        .from(imgLumi.current,
            {
                scale: 0.5,
                duration: 1
            }, "<")


        const tlShake = gsap.timeline({ 
            repeat: -1, // Loop infinito
            repeatDelay: 1.5 // Esperar 1.5 segundos entre cada shake
        })
        
        tlShake.to(botonRef.current, {
            x: -5,
            duration: 0.1,
            ease: "power2.inOut"
        })
        .to(botonRef.current, {
            x: 5,
            duration: 0.1,
            ease: "power2.inOut"
        })
        .to(botonRef.current, {
            x: -5,
            duration: 0.1,
            ease: "power2.inOut"
        })
        .to(botonRef.current, {
            x: 5,
            duration: 0.1,
            ease: "power2.inOut"
        })
        .to(botonRef.current, {
            x: 0,
            duration: 0.1,
            ease: "power2.inOut"
        })
    })

  return (
    <section ref={sectionRef} id="home" className={styles.sectionArea}>
        <div className={styles.container}>
            <div ref={divTexto} className={styles.derechaSection}>
                <h2 className={styles.quienSoy}></h2>
                <TextoDestacado as="h2">
                    Soy Luana Millán y soy Diseñadora Gráfica
                </TextoDestacado>
                <h1 className={styles.tituloSection}>¿Necesitas diseño para tu marca?</h1>
                <h3 className={styles.subtituloSection}>Me apasiona transformar ideas en imágenes que conecten, inspiren y hagan crecer marcas.</h3>
                <div ref={botonRef}>
                    <Boton value={"hablemos"} variant={"hablemos"} href={"https://wa.me/541167825624"}/>
                </div>
            </div>
            <div ref={imgLumi} className={styles.izquierdaSection}>
                <img className={styles.imgSection} src={lumiHeader} alt="lumi" />
            </div>
        </div>
    </section>
  )
}
