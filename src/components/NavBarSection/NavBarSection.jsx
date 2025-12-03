import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Boton } from '../Boton/Boton'
import styles from './NavBarSection.module.css'

export const NavBarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "Servicios", href: "#servicios" },
    { id: 3, text: "Herramientas", href: "#herramientas" },
    { id: 4, text: "Proyectos", href: "#proyectos" },
    { id: 5, text: "Educación", href: "#educacion" },
    { id: 6, text: "Contacto", href: "#contacto" }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={styles.navBarContenedor}>
        {/* Logo */}
        <a href="#home" className={styles.linkImg}>
          <img src="/img/LogoNegro.png" alt="logoNegro" className={styles.logoBlanco}/>
        </a>

        {/* Menú Desktop */}
        {!isMobile && (
          <>
            <ul className={styles.listLink}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.itemLink}>
                  <a href={item.href} className={styles.link}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <Boton value={"Hablemos"} variant={"hablemos"} href={"https://wa.me/541167825624"}/>
          </>
        )}

        {/* Botón Hamburguesa (Mobile) */}
        {isMobile && (
          <button 
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className={`${styles.line} ${isMenuOpen ? styles.line1Active : ''}`}></span>
            <span className={`${styles.line} ${isMenuOpen ? styles.line2Active : ''}`}></span>
            <span className={`${styles.line} ${isMenuOpen ? styles.line3Active : ''}`}></span>
          </button>
        )}
      </nav>

      {/* Menú Móvil (Aside) */}
      {isMobile && (
        <>
          <aside className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
            <ul className={styles.mobileMenuList}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.mobileMenuItem}>
                  <a 
                    href={item.href} 
                    className={styles.mobileMenuLink}
                    onClick={handleLinkClick}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Overlay */}
          {isMenuOpen && (
            <div 
              className={styles.overlay} 
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </>
      )}
    </>
  )
}