import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

export default function Contador() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const tituloOriginal = document.title;
    return () => { document.title = tituloOriginal; };
  }, []);

  useEffect(() => {
    console.log('EFEITO EXECUTADO: O contador mudou para', count);
    document.title = `Cliques: ${count}`;

    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      const timer = setTimeout(() => setMensagem(''), 2000);

      // Cancela o timer anterior quando count muda ou o componente sai da tela.
      return () => {
        console.log('LIMPANDO O TIMER ANTERIOR');
        clearTimeout(timer);
      };
    }
  }, [count]);

  console.log('COMPONENTE RENDERIZADO');

  return (
    <>
      <p className="counter-value">Você clicou <strong>{count}</strong> {count === 1 ? 'vez' : 'vezes'}</p>
      <button className="action-button" onClick={() => setCount((atual) => atual + 1)}>
        <Plus size={18} aria-hidden="true" /> Clique aqui
      </button>
      <p className="counter-message" role="status">{mensagem}</p>
    </>
  );
}
