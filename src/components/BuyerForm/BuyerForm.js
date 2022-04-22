import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import LocalCartContext from '../../context/CartConext';
import { formatearSeparadorDeMiles } from '../../assets/libs/utiles';
import db from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BuyerForm() {
    const navigate = useNavigate();
    const { products, getMontoTotal, getCantidadTotal, clear } = useContext(LocalCartContext);
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        fono: '',
        email: ''
    });

    const [ordenGenerada, setOrdenGenerada] = useState();

    const pushOrdenDeCompra = async (orden) => {
        const ordenFirebase = collection(db, 'ordenes')
        const ordenDoc = await addDoc(ordenFirebase, orden)
        setOrdenGenerada(ordenDoc.id)
    }

    const procesarOrden = () => {

        let ordenActual = {
            buyer: userData,
            items: products.map(product => {
                return {
                    id: product.id,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.quantity
                }
            }),
            total: getMontoTotal(),
            fecha: (new Date()).toLocaleDateString("es-US")
        }

        // Cierre del formulario de datos del cliente
        handleClose();

        pushOrdenDeCompra(ordenActual);

        // Apertura del diálogo con identificador de orden de compra
        handleClickOpen();
    }

    const actualizarCliente = (event) => {
        const { value, id } = event.target;

        setUserData({
            ...userData,
            [id]: value
        });
    }

    const finalizar = () => {
        clear();
        navigate('/');
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        ordenGenerada && finalizar();
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Terminar compra
            </Button>

            {ordenGenerada ?
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>Orden de compra</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography component={'p'} gutterBottom>
                                Orden de compra generada correctamente
                            </Typography>
                            <Typography component={'p'} gutterBottom>
                                identificador único: {ordenGenerada}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Aceptar</Button>
                    </DialogActions>
                </Dialog>
                :
                <Dialog
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <DialogTitle sx={{ backgroundColor: 'rgb(200,200,200)' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            Formulario de compra
                        </Toolbar>
                    </DialogTitle>
                    <DialogContent>
                        <List sx={{ padding: '10px' }}>
                            <TextField id="name" fullWidth label="Nombre" variant="standard" value={userData.nombre} onChange={actualizarCliente} />
                            <TextField id="fono" fullWidth label="Fono" variant="standard" value={userData.fono} onChange={actualizarCliente} />
                            <TextField id="email" fullWidth label="Email" variant="standard" value={userData.email} onChange={actualizarCliente} />
                        </List>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: 'rgb(220,220,220)' }}>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h7" component="div">
                            {`${products.length} artículos (${getCantidadTotal()} cantidades) por $ ${formatearSeparadorDeMiles(getMontoTotal())}`}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={procesarOrden} sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            Procesar compra
                        </Button>
                    </DialogActions>

                </Dialog>
            }
        </div >
    );
}