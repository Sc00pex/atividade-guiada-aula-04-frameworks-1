import { CircleCheck, CircleAlert } from 'lucide-react';
import styles from './Alerta.module.css';

export default function Alerta({ type, message }) {
  const sucesso = type === 'sucesso';
  const tipoClasse = sucesso ? styles.sucesso : styles.erro;
  const Icone = sucesso ? CircleCheck : CircleAlert;
  return (
    <div className={`${styles.alertaCard} ${tipoClasse}`} role="status">
      <Icone size={20} aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
