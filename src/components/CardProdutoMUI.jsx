import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Snackbar, Alert } from '@mui/material';
import { ShoppingCart } from 'lucide-react';

export default function CardProdutoMUI({ imagem, nome, descricao, preco }) {
  const [confirmacao, setConfirmacao] = useState(false);
  const precoFormatado = typeof preco === 'number'
    ? preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : `R$ ${preco}`;

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 360, width: '100%' }}>
        <CardMedia component="img" height="210" image={imagem} alt={nome} sx={{ objectFit: 'cover' }} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">{nome}</Typography>
          <Typography variant="body2" color="text.secondary">{descricao}</Typography>
          <Typography sx={{ mt: 2, fontWeight: 700, color: 'primary.main', fontSize: 22 }}>{precoFormatado}</Typography>
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
          <Button variant="contained" disableElevation fullWidth startIcon={<ShoppingCart size={18} />} onClick={() => setConfirmacao(true)}>Comprar</Button>
        </CardActions>
      </Card>
      <Snackbar open={confirmacao} autoHideDuration={4000} onClose={() => setConfirmacao(false)}>
        <Alert severity="success" variant="filled" onClose={() => setConfirmacao(false)}>
          {nome} adicionado ao carrinho!
        </Alert>
      </Snackbar>
    </>
  );
}
