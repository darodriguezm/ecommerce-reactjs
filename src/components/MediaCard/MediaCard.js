import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function MediaCard({ item }) {
  const { nombre, imagenesLg, descripcion, precio, onAdd } = item;
  const [itemAgregado, setItemAgregado] = useState(false);
  const navigate = useNavigate();

  const agregarItem = (count) => {
    setItemAgregado(true);
    onAdd(count);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`/assets/img/productos/${imagenesLg[0]}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion.join('\n')}
        </Typography>
        <Typography variant="h4" color="error.main">
          ${precio}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {
          itemAgregado ?
            <Button variant='contained' onClick={() => navigate('/cart')}>Finalizar compra</Button>
            :
            <ItemCount itemDescription={item.nombre} itemLimit={item.stock} onAdd={agregarItem}/>
        }
      </CardActions>
    </Card>
  );
}
