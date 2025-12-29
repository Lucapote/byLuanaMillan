import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { TarjetaJobs } from "../TarjetaJobs/TarjetaJobs"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import { Boton } from "../Boton/Boton"
import { useMediaQuery } from "react-responsive"
import styles from "./ProjectsSection.module.css"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const ProjectsSection = () => {
    const proyectos = [
        {
            img: "/proyectos/milonga.png",
            titulo: "Festival The Milonga",
            texto: "Diseño de branding"
        },
        {
            img: "/proyectos/deli.png",
            titulo: "Deli",
            texto: "Fotografía publicitaria"
        },
        {
            img: "/proyectos/ecoway.png",
            titulo: "Ecoway",
            texto: "Diseño de branding"
        },
        {
            img: "/proyectos/snakos.png",
            titulo: "Snakos",
            texto: "Diseño de packaging"
        },
        {
            img: "/proyectos/cultura.png",
            titulo: "Cultura",
            texto: "Diseño editorial"
        },
        {
            img: "/proyectos/vgr.png",
            titulo: "VGR",
            texto: "Diseño de redes sociales"
        }
    ]

    const sectionRef = useRef()
    const textosRef = useRef()
    const isMobile = useMediaQuery({maxWidth: 767})

    useGSAP(()=>{
        //seteamos tarjetas
        gsap.set(".tarjeta-trabajo", {
            opacity: 0,
            scale: 0.2
        })

        if(!isMobile){
            //animacion textos
            gsap.from(textosRef.current.children, {
                y: -30,
                opacity: 0,
                stagger: 0.4,
                ease: "elastic.inOut",
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "20% 50%",
                    // toggleActions: "play none none reverse",
                    scrub: 1
                }
            })
    
            //animacion tarjetas
            gsap.to(".tarjeta-trabajo", {
                opacity: 1,
                scale: 1,
                ease: "power4.inOut",
                stagger: {
                    amount: .8,
                    from: "random"
                },
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "20% 50%",
                    end: "center 65%",
                    scrub: 1
                }
    
            })
        }else{
            //animacion textos
            gsap.from(textosRef.current.children, {
                y: -30,
                opacity: 0,
                stagger: 0.4,
                ease: "elastic.inOut",
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "20% 50%",
                    // toggleActions: "play none none reverse",
                    scrub: 1
                }
            })
    
            //animacion tarjetas
            gsap.to(".tarjeta-trabajo", {
                opacity: 1,
                scale: 1,
                ease: "power4.inOut",
                stagger: {
                    amount: .8,
                    from: "start"
                },
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: "20% 50%",
                    end: "80% 65%",
                    scrub: 1
                }
    
            })

        }

    })

    
  return (
    <section ref={sectionRef} id="proyectos" className={styles.projectsSection}>
        <div className={styles.contenedorProjects}>
            <div ref={textosRef} className={styles.headerProyectos}>
                <TextoDestacado as="h4">Proyectos</TextoDestacado>
                <h3 className={styles.tituloProyectos}>Mis Trabajos</h3>
            </div>

            <div className={styles.containerContenido}>
                <div className={styles.containerGrid}>
                    {proyectos.map((proyecto, index)=>(
                        <div key={index} className={`${styles[`div${index + 1}`]} tarjeta-trabajo`}>
                            <TarjetaJobs img={proyecto.img} titulo={proyecto.titulo} texto={proyecto.texto}/>
                        </div>
                    ))}
                </div>
                <Boton value={"Ver Portfolio"} variant={"portfolio"} href="https://www.behance.net/luanamillan"/>
            </div>


        </div>
    </section>
  )
}
