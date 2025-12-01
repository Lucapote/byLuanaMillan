import styles from './ExperienciaTexto.module.css'

export const ExperienciaTexto = ({variant, children}) => {
    const getVariantClass = () => {
        switch(variant){
            case "formacion":
                return styles.formacion
            default:
                return styles.destacar
        }
    }

  return (
    <div className={getVariantClass()}>{children}</div>
  )
}
