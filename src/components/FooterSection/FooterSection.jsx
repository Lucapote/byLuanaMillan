// src/components/FooterSection/FooterSection.jsx
import { useRef, useEffect } from 'react' // 1. Importamos hooks
import { Boton } from '../Boton/Boton'
import styles from './FooterSection.module.css'
import gsap from 'gsap' // 2. Importamos GSAP

export const FooterSection = () => {
  // 3. Referencia para el ícono del teléfono
  const phoneRef = useRef(null)

  useEffect(() => {
    const el = phoneRef.current

    // 4. Creamos la animación de "Ringing"
    // repeatDelay: 2 -> Espera 2 segundos antes de volver a sonar
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 })

    tl.to(el, {
      rotation: 15, // Gira a la derecha
      duration: 0.05,
      ease: "linear"
    })
    .to(el, {
      rotation: -15, // Gira a la izquierda
      duration: 0.05,
      ease: "linear",
      yoyo: true,   // Ida y vuelta
      repeat: 9     // Repite el movimiento rápido 9 veces (vibración)
    })
    .to(el, {
      rotation: 0,  // Vuelve al centro para descansar
      duration: 0.05,
      ease: "linear"
    })

    // Limpieza
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <footer className={styles.footerSection}>
        <div className={styles.contenedorNegro}>
            <div className={styles.contenedorGeneral}>
                <div className={styles.primerDivisor}>
                    <img src="/img/logo.png" alt="logo" className={styles.imgLogo}/>

                    <p className={styles.textoFooter}>Todo mi trabajo está en mis redes, ¡seguime para no perderte de nada de lo que se viene!</p>

                    <div className={styles.linksContainer}>
                        <a href="https://www.instagram.com/byluanamillan/?hl=es-la" target='_blank'>
                            <img src="/img/redes/instagram.png" alt="instagram" className={styles.logo}/>
                        </a>
                        <a href="https://www.behance.net/luanamillan" target='_blank'>
                            <img src="/img/redes/behance.png" alt="behance" className={styles.logo}/>
                        </a>
                        <a href="https://www.linkedin.com/in/luana-millan-20ab2b22b/" target='_blank'>
                            <img src="/img/redes/linkedin.png" alt="linkedin" className={styles.logo}/>
                        </a>
                    </div>
                </div>

                <div className={styles.segundoDivisor}>
                    <h6 className={styles.tituloLinks}>Links</h6>

                    <ul className={styles.listLink}>
                        <li className={styles.itemLink}>
                            <a href="#home" className={styles.link}>Home</a>
                        </li>
                        <li className={styles.itemLink}>
                            <a href="#servicios" className={styles.link}>Servicios</a>
                        </li>
                        <li className={styles.itemLink}>
                            <a href="#herramientas" className={styles.link}>Herramientas</a>
                        </li>
                        <li className={styles.itemLink}>
                            <a href="#proyectos" className={styles.link}>Proyectos</a>
                        </li>
                        <li className={styles.itemLink}>
                            <a href="#educacion" className={styles.link}>Educación</a>
                        </li>
                        <li className={styles.itemLink}>
                            <a href="#contacto" className={styles.link}>Contacto</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.tercerDivisor}>
                    <h6 className={styles.tituloTalk}>Hablemos!</h6>

                    <div className={styles.contenedorDirecciones}>
                        <img src="/img/iconos/footer2.svg" alt="email" className={styles.email}/>
                        <p className={styles.emailAddress}>byluanamillan@gmail.com</p>
                    </div>

                    <div className={styles.contenedorDirecciones}>
                        <img 
                            ref={phoneRef}
                            src="/img/iconos/footer1.svg" 
                            alt="telefono" // Corregí el alt a "telefono" (decía email)
                            className={styles.phone}
                        />

                        <p className={styles.phoneNumber}>011 6782 5624</p>
                    </div>

                    <Boton value={"Ver Portfolio"} variant='portfolio' href="https://www.behance.net/luanamillan"/>
                </div>
            </div>
        </div>
        <div className={styles.contenedorBlanco}>
            <p className={styles.textoFooterBlanco}>Copyright © 2025 <span className={styles.textoDestacado}>Luana Millan</span>. All Rights Reserved. </p>
        </div>
    </footer>
  )
}