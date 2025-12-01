import { FormularioContacto } from '../FormularioContacto/FormularioContacto'
import { TextoDestacado } from '../TextoDestacado/TextoDestacado'
import styles from './ContactoSection.module.css'

export const ContactoSection = () => {
  return (
    <section id="contacto" className={styles.contactoSection}>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorIzquierda}>
                <div className={styles.contenedorTextos}>
                    <TextoDestacado as='h6'>Contacto</TextoDestacado>
                    <h5 className={styles.tituloContacto}>Hablemos de tu idea</h5>
                    <p className={styles.textoContacto}>Si querés darle vida a tu marca con un diseño pensado para vos, escribime.</p>
                </div>

                <img src="/img/contacto.png" alt="lumiContacto" className={styles.lumiContacto}/>
            </div>

            <div className={styles.contenedorDerecha}>
                <FormularioContacto/>
            </div>
        </div>
    </section>
  )
}
