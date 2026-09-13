import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import Contador from './components/Contador.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <header className="page-header">
        <div className="header-inner"><a href="#inicio">UNILAVRAS</a><span>Frameworks I / Aula 04</span></div>
      </header>
      <main id="inicio">
        <div className="page-title"><p>ATIVIDADE GUIADA</p><h1>Estilização e React Hooks</h1></div>
        <div className="exercise-grid">
          <section aria-labelledby="atividade-1">
            <h2 id="atividade-1"><span>01</span> Botão dinâmico</h2>
            <BotaoDinamico />
          </section>
          <section aria-labelledby="atividade-2">
            <h2 id="atividade-2"><span>02</span> Alertas com CSS Modules</h2>
            <Alerta type="sucesso" message="Operação realizada com sucesso!" />
            <Alerta type="erro" message="Falha ao processar a requisição." />
          </section>
          <section aria-labelledby="atividade-3">
            <h2 id="atividade-3"><span>03</span> Styled Components</h2>
            <CardProduto nome="Café Especial" preco="45,00" />
          </section>
          <section aria-labelledby="atividade-4">
            <h2 id="atividade-4"><span>04</span> useEffect em ação</h2>
            <Contador />
          </section>
          <section aria-labelledby="atividade-5">
            <h2 id="atividade-5"><span>05</span> Hook personalizado</h2>
            <Interruptor />
          </section>
          <section aria-labelledby="atividade-6">
            <h2 id="atividade-6"><span>06</span> Card com Material UI</h2>
            <CardProdutoMUI
              imagem="/images/camera.jpg"
              nome="Câmera fotográfica"
              descricao="Design clássico para registrar suas viagens e os pequenos momentos do dia."
              preco={1299.90}
            />
          </section>
        </div>
      </main>
      <footer>Unilavras <span>Atividade Guiada / Ciclo 4</span></footer>
    </>
  );
}
