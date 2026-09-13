import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px 16px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
`;

const TituloProduto = styled.h3`
  color: #333;
  margin: 0 0 12px;
  font-size: 18px;
`;

const PrecoProduto = styled.p`
  color: #15803d;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
`;

export default function CardProduto({ nome, preco }) {
  return (
    <CardContainer>
      <TituloProduto>{nome}</TituloProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
    </CardContainer>
  );
}
