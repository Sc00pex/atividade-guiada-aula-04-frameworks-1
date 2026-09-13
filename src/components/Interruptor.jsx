import { Lightbulb } from 'lucide-react';
import { useToggle } from '../hooks/useToggle.js';

export default function Interruptor() {
  const [ligado, toggleLuz] = useToggle(false);

  return (
    <div className={`light-control ${ligado ? 'light-on' : ''}`}>
      <Lightbulb size={40} strokeWidth={1.5} aria-hidden="true" />
      <p>A luz está: <strong>{ligado ? 'Ligada' : 'Desligada'}</strong></p>
      <button className="switch" type="button" role="switch" aria-checked={ligado} aria-label="Alternar Luz" title="Alternar Luz" onClick={toggleLuz}>
        <span />
      </button>
    </div>
  );
}
