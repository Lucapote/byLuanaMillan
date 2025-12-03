import { Boton } from '../Boton/Boton'
import styles from './FooterSection.module.css'

export const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
        <div className={styles.contenedorNegro}>
            <div className={styles.contenedorGeneral}>
                <div className={styles.primerDivisor}>
                    <img src="/img/logo.png" alt="logo" className={styles.imgLogo}/>

                    <p className={styles.textoFooter}>Todo mi trabajo está en mis redes, ¡seguime para no <br /> perderte de nada de lo que se viene!</p>

                    <div className={styles.linksContainer}>
                        <a href="">
                            <img src="/img/redes/instagram.png" alt="instagram" className={styles.logo}/>
                        </a>
                        <a href="">
                            <img src="/img/redes/behance.png" alt="behance" className={styles.logo}/>
                        </a>
                        <a href="">
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
                        <img src="/img/iconos/footer1.svg" alt="email" className={styles.phone}/>

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
