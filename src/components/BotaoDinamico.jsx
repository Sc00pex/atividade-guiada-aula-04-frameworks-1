import { useState } from 'react';

export default function BotaoDinamico() {
  const [clicado, setClicado] = useState(false);
  const estiloBotao = {
    backgroundColor: clicado ? '#10B981' : '#3B82F6',
    color: '#10251d',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    minWidth: '148px',
    minHeight: '44px',
    fontWeight: 700,
  };

  return (
    <button style={estiloBotao} aria-pressed={clicado} onClick={() => setClicado((atual) => !atual)}>
      {clicado ? 'Ativado!' : 'Clique Aqui'}
    </button>
  );
}
