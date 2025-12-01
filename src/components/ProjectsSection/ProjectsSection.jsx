import { TarjetaJobs } from "../TarjetaJobs/TarjetaJobs"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import { Boton } from "../Boton/Boton"
import styles from "./ProjectsSection.module.css"

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
  return (
    <section id="proyectos" className={styles.projectsSection}>
        <div className={styles.contenedorProjects}>
            <div className={styles.headerProyectos}>
                <TextoDestacado as="h4">Proyectos</TextoDestacado>
                <h3 className={styles.tituloProyectos}>Mis Trabajos</h3>
            </div>

            <div className={styles.containerContenido}>
                <div className={styles.containerGrid}>
                    {proyectos.map((proyecto, index)=>(
                        <div key={index} className={styles[`div${index + 1}`]}>
                            <TarjetaJobs img={proyecto.img} titulo={proyecto.titulo} texto={proyecto.texto}/>
                        </div>
                    ))}
                </div>
                <Boton value={"Ver Portfolio"} variant={"portfolio"}/>
            </div>


        </div>
    </section>
  )
}
