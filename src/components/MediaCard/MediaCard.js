import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';


export default function MediaCard({ item }) {
  const { nombre, imagenesLg, descripcion, precio, onAdd } = item;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagenesLg[0]}
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
      <CardActions>
        <ItemCount itemDescription={item.nombre} itemLimit={item.stock} onAdd={onAdd}></ItemCount>
      </CardActions>
    </Card>
  );
}
