import { TextoDestacado } from "../TextoDestacado/TextoDestacado"
import { TarjetaHerramientas } from "../TarjetaHerramientas/TarjetaHerramientas"
import styles from "./ToolsSection.module.css"

export const ToolsSection = () => {
    const lumi = "/public/img/lumiSection.png"
    const herramientas = [
        {
            img: "/img/herramientas/illustrator.png",
            texto: "Illustrator",
            cName: styles.illustrator
        },
        {
            img: "/img/herramientas/afterEffects.png",
            texto: "After Effects",
            cName: styles.afterEffects          
        },
        {
            img: "/img/herramientas/inDesign.png",
            texto: "InDesign",
            cName: styles.inDesign
        },
        {
            img: "/img/herramientas/figma.png",
            texto: "Figma",
            cName: styles.figma
        },
        {
            img: "/img/herramientas/capcut.png",
            texto: "Capcut",
            cName: styles.capcut
        },
        {
            img: "/img/herramientas/canva.png",
            texto: "Canva",
            cName: styles.canva
        }
    ]
  return (
    <section className={styles.toolsSection}>
        <div className={styles.contenedorTools}>
            <div className={styles.containerTextoImg}>
                <div className={styles.contenedorTextos}>
                    <TextoDestacado as="h4">Mis herramientas</TextoDestacado>
                    <h3 className={styles.titulo}>Mis aliados del día a día</h3>
                    <p className={styles.descripcion}>Diseño a medida para lo que tu marca necesita.</p>
                </div>

                <img src={lumi} alt="lumi" className={styles.imgLumi}/>
            </div>

            <div className={styles.contenedorTarjetas}>
                {herramientas.map((herramienta, index)=>(
                    <TarjetaHerramientas key={index} img={herramienta.img} texto={herramienta.texto} imgClassName={herramienta.cName}/>
                ))}
            </div>
        </div>
    </section>
  )
}
