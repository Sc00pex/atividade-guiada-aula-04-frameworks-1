import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={imagem} alt={nome} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{nome}</Typography>
        <Typography variant="body2" color="text.secondary">{descricao}</Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>R$ {preco}</Typography>
      </CardContent>
      <CardActions><Button variant="contained">Comprar</Button></CardActions>
    </Card>
  );
}
