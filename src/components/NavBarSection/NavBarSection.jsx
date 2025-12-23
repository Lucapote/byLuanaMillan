import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Boton } from '../Boton/Boton'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from './NavBarSection.module.css'

gsap.registerPlugin(useGSAP)

export const NavBarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  
  // Referencias para GSAP
  const navRef = useRef()
  const logoRef = useRef()
  const menuRef = useRef()
  const buttonRef = useRef()
  const timelineRef = useRef()

  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "Servicios", href: "#servicios" },
    { id: 3, text: "Herramientas", href: "#herramientas" },
    { id: 4, text: "Proyectos", href: "#proyectos" },
    { id: 5, text: "Educación", href: "#educacion" },
    { id: 6, text: "Contacto", href: "#contacto" }
  ]

  // Animación GSAP para desktop
  useGSAP(() => {
    if (!isMobile && navRef.current) {
      // Crear timeline
      timelineRef.current = gsap.timeline({ 
        defaults: { ease: "power3.out" }
      })

      // Estado inicial: círculo en el centro
      gsap.set(navRef.current, {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        left: "50%",
        transform: "translateX(-50%)",
      })

      // Ocultar elementos inicialmente
      gsap.set([logoRef.current, menuRef.current, buttonRef.current], {
        opacity: 0,
        scale: 0.8,
      })

      // Setear estado inicial para los items del menú
      gsap.set(`.${styles.itemLink}`, {
        opacity: 0,
        y: -20
      })

      // Animación del timeline
      timelineRef.current
        // 1. Expandir el círculo al ancho completo
        .to(navRef.current, {
          width: "100%",
          height: "auto",
          borderRadius: "60px",
          duration: 0.8,
          delay: 0.5,
          ease: "power3.inOut"
        })
        // 2. Aparecer el logo
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        }, "-=0.3") // Empieza 0.3s antes de que termine la anterior
        // 3. Aparece el contenedor de los links 
        .to(menuRef.current,{
          opacity: 1,
          scale: 1
        })
        // 4. Aparecer los items del menú con stagger
        .to(`.${styles.itemLink}`, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1, // Aparecen uno por uno
          ease: "back.out(1.7)"
        }, "-=0.2")
        // 5. Aparecer el botón
        .to(buttonRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        }, "-=0.3")
    }
  }, { dependencies: [isMobile], revertOnUpdate: true })

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
      <nav ref={navRef} className={styles.navBarContenedor}>
        {/* Logo */}
        <a ref={logoRef} href="#home" className={styles.linkImg}>
          <img src="/img/LogoNegro.png" alt="logoNegro" className={styles.logoBlanco}/>
        </a>

        {/* Menú Desktop */}
        {!isMobile && (
          <>
            <ul ref={menuRef} className={styles.listLink}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.itemLink}>
                  <a href={item.href} className={styles.link}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div ref={buttonRef}>
              <Boton value={"Hablemos"} variant={"hablemos"} href={"https://wa.me/541167825624"}/>
            </div>
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

      {/* Menú Móvil (Aside) - sin cambios */}
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