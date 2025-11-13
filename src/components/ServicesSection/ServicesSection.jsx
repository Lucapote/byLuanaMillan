import { Boton } from "../Boton/Boton"
import TarjetaServicios from "../TarjetaServicios/TarjetaServicios"
import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import styles from "./ServicesSection.module.css"

export const ServicesSection = () => {

    const servicios = [
        {
            icono: "/img/iconos/branding.svg",
            texto: "Branding &\nLogos"
        },
        {
            icono: "/img/iconos/contenidoRedes.svg",
            texto: "Contenido\npara redes"
        },
        {
            icono: "/img/iconos/motionGraphics.svg",
            texto: "Motion Graphics\n& Multimedia"
        },
        {
            icono: "/img/iconos/diseñoEditorial.svg",
            texto: "Diseño Editorial"
        },
        {
            icono: "/img/iconos/ilustraciones.svg",
            texto: "Ilustraciones"
        },
        {
            icono: "/img/iconos/mockups.svg",
            texto: "Mockups &\nProducción gráfica"
        },
        {
            icono: "/img/iconos/diseñoWeb.svg",
            texto: "Diseño Web"
        },
        {
            icono: "/img/iconos/motionGraphics.svg",
            texto: "Presentaciones\ncorporativas"
        }
    ]

  return (
    <section className={styles.servicesSection}>
        <div className={styles.container}>
            <div className={styles.textoContainer}>
                <TextoDestacado as="h3">Servicios</TextoDestacado>
                <h4 className={styles.titulo}>Hago tu idea realidad</h4>
            </div>

            <div className={styles.containerElementos}>
                <div className={styles.gridContainer}>
                    {servicios.map((servicio, index)=>(
                        <TarjetaServicios key={index} imgSrc={servicio.icono} texto={servicio.texto}/>
                    ))}
                </div>

                <Boton value={"Ver Portfolio"} variant={"portfolio"}/>

            </div>
        </div>
    </section>
  )
}
