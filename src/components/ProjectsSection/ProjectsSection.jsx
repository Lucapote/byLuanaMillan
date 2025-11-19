import { TarjetaJobs } from "../TarjetaJobs/TarjetaJobs"

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
    <section>
        <div>

        <TarjetaJobs texto={"Hola"}/>
        </div>
    </section>
  )
}
