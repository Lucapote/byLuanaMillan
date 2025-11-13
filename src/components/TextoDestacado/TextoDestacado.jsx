
import styles from './TextoDestacado.module.css';

export const TextoDestacado = ({ children, as = 'span', className = '' }) => {
  const Tag = as; // Permite cambiar la etiqueta HTML
  
  return (
    <Tag className={`${styles.textoDestacado} ${className}`}>
      {children}
    </Tag>
  );
}