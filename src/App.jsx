import { useState, useEffect } from 'react';
import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log('EFEITO EXECUTADO: O contador mudou para', count);
    document.title = `Cliques: ${count}`;
    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      const timer = setTimeout(() => setMensagem(''), 2000);
      return () => {
        console.log('LIMPANDO O TIMER ANTERIOR');
        clearTimeout(timer);
      };
    }
  }, [count]);

  console.log('COMPONENTE RENDERIZADO');

  return (
    <>
      <h1>Atividade 1: Botão com Estilo Dinâmico</h1>
      <BotaoDinamico />
      <h1>Atividade 2: Alertas com CSS Modules</h1>
      <Alerta type="sucesso" message="Operação realizada com sucesso!" />
      <Alerta type="erro" message="Falha ao processar a requisição." />
      <h1>Atividade 3: Styled Components</h1>
      <CardProduto nome="Café Especial" preco="45,00" />
      <h1>Atividade 4: useEffect em Ação</h1>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      {mensagem && <p style={{ color: 'green', marginTop: '10px' }}>{mensagem}</p>}
      <h1>Atividade 5: Hook Personalizado</h1>
      <Interruptor />
      <h1>Atividade 6: Card com Material-UI</h1>
      <CardProdutoMUI
        imagem="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=85&fit=crop"
        nome="Câmera fotográfica"
        descricao="Câmera para registrar viagens e momentos especiais."
        preco="1.299,90"
      />
    </>
  );
}
