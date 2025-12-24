import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FormularioContacto } from '../FormularioContacto/FormularioContacto'
import { TextoDestacado } from '../TextoDestacado/TextoDestacado'
import { useMediaQuery } from 'react-responsive'
import styles from './ContactoSection.module.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const ContactoSection = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    const textosRef = useRef();
    const imgRef = useRef();
    const sectionRef = useRef();

    useGSAP(()=>{
        gsap.from(textosRef.current, {
            x: -150,
            opacity: 0,
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: 1,
                start: "top 80%",
                end: "30% 70%"
            }
        })

        gsap.from(imgRef.current, {
            opacity: 0,
            y: -50,
            ease: "bounce.inOut",
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: 1,
                start: "center 80%",
                end: "55% 70%"
            }
        })
    })

  return (
    <section ref={sectionRef} id="contacto" className={styles.contactoSection}>
        <div className={styles.contenedorPrincipal}>
        {isMobile ? (
                        <>
                <div className={styles.contenedorTextos}>
                    <TextoDestacado as='h6'>Contacto</TextoDestacado>
                    <h5 className={styles.tituloContacto}>Hablemos de tu idea</h5>
                    <p className={styles.textoContacto}>Si querés darle vida a tu marca con un diseño pensado para vos, escribime.</p>
                </div>  

                <FormularioContacto/>

                <img src="/img/contacto.png" alt="lumiContacto" className={styles.lumiContacto}/>
            </>
        ):
        (
            <>
                <div className={styles.contenedorIzquierda}>
                    <div ref={textosRef} className={styles.contenedorTextos}>
                        <TextoDestacado as='h6'>Contacto</TextoDestacado>
                        <h5 className={styles.tituloContacto}>Hablemos de tu idea</h5>
                        <p className={styles.textoContacto}>Si querés darle vida a tu marca con un diseño pensado para vos, escribime.</p>
                    </div>

                    <img ref={imgRef} src="/img/contacto.png" alt="lumiContacto" className={styles.lumiContacto}/>
                </div>

                <div className={styles.contenedorDerecha}>
                    <FormularioContacto/>
                </div>
            </>
        )}

        </div>
    </section>
  )
}
