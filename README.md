# Atividade Guiada - Aula 04: Estilização e React Hooks

Projeto React com Vite para a atividade de Frameworks I da Unilavras. Os seis exercícios ficam na mesma página, cada um em seu componente, para que todos possam ser avaliados sem substituir o App.jsx.

## Executar

Requer Node.js 22.12+ (ou 20.19+) e npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Exercícios

| Atividade | Arquivo | Comportamento |
| --- | --- | --- |
| 1 | `src/components/BotaoDinamico.jsx` | `useState` alterna texto e cor do objeto de estilo inline. |
| 2 | `src/components/Alerta.jsx` e `Alerta.module.css` | Props `type` e `message` selecionam alertas de sucesso e erro com estilos locais. |
| 3 | `src/components/CardProduto.jsx` | Styled Components estiliza o card, o nome e o preço recebidos por props. |
| 4 | `src/components/Contador.jsx` | `useEffect` atualiza o título da aba e mostra uma mensagem por 2 segundos. O cleanup cancela o timer anterior. |
| 5 | `src/hooks/useToggle.js` e `src/components/Interruptor.jsx` | Hook reutilizável retorna um booleano e a função que alterna seu valor. |
| 6 | `src/components/CardProdutoMUI.jsx` | Card MUI com imagem, nome, descrição, preço e botão Comprar. |

O card MUI recebe as props `imagem`, `nome`, `descricao` e `preco` e usa `Card`, `CardMedia`, `CardContent`, `Typography`, `CardActions` e `Button`. Comprar exibe uma confirmação demonstrativa; não existe pagamento, pedido real ou carrinho persistente.

No exercício 4, abra o console do navegador e clique rapidamente para observar os logs de renderização, execução do efeito e limpeza. O React StrictMode pode repetir renderizações e executar um ciclo extra do efeito em desenvolvimento. A limpeza também ocorre ao desmontar o componente; o título original é restaurado.

## Testes

```bash
npx playwright install chromium
npm test
```

Os testes verificam os seis exercícios em desktop e celular, incluindo cliques consecutivos e o cancelamento do timer, navegação por teclado no interruptor, carregamento da imagem, confirmação de compra, erros JavaScript e largura da página. Capturas ficam em `test-results/`.

## Entrega no GitHub

O enunciado pede um repositório **público** chamado **atividade-guiada-aula-04-frameworks-1**. Após publicar, envie o link desse repositório no campo de resposta da atividade.

Repositório da entrega: https://github.com/Sc00pex/atividade-guiada-aula-04-frameworks-1

Para enviar alterações futuras, execute nesta pasta:

```bash
git add .
git commit -m "Atualiza atividade"
git push
```

O `.gitignore` exclui dependências, build, relatórios de teste e arquivos de ambiente. O `package-lock.json` deve ser enviado junto com o código.

## Referências

- [React: useEffect](https://react.dev/reference/react/useEffect)
- [React: StrictMode](https://react.dev/reference/react/StrictMode)
- [Material UI: Card](https://mui.com/material-ui/react-card/)
- [Styled Components](https://styled-components.com/docs/basics)
- [Foto do produto: Unsplash](https://images.unsplash.com/photo-1502920917128-1aa500764cbd). A cópia local em `public/images/camera.jpg` evita depender da rede para exibir o produto.
- Fonte Roboto carregada pelo Google Fonts, conforme o enunciado; Arial é usada como alternativa sem conexão.
