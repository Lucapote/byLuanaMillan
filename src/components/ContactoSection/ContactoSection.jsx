import { FormularioContacto } from '../FormularioContacto/FormularioContacto'
import { TextoDestacado } from '../TextoDestacado/TextoDestacado'
import { useMediaQuery } from 'react-responsive'
import styles from './ContactoSection.module.css'

export const ContactoSection = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
  return (
    <section id="contacto" className={styles.contactoSection}>
        <div className={styles.contenedorPrincipal}>
        {isMobile ? (
                        <>
                <div className={styles.contenedorTextos}>
                    <TextoDestacado as='h6'>Contacto</TextoDestacado>
                    <h5 className={styles.tituloContacto}>Hablemos de tu idea</h5>
                    <p className={styles.textoContacto}>Si querés darle vida a tu marca con un diseño pensado para vos, escribime.</p>
                </div>  

                <FormularioContacto/>

                <img src="/img/contacto.png" alt="lumiContacto" className={styles.lumiContacto}/>
            </>
        ):
        (
            <>
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
            </>
        )}

        </div>
    </section>
  )
}
