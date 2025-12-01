import { Boton } from '../Boton/Boton'
import styles from './NavBarSection.module.css'

export const NavBarSection = () => {
  return (
    <nav className={styles.navBarContenedor}>
        <a href="#home" className={styles.linkImg}>
            <img src="/img/LogoNegro.png" alt="logoNegro" className={styles.logoBlanco}/>
        </a>

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

        <Boton value={"Hablemos"} variant={"hablemos"}/>
    </nav>
  )
}
