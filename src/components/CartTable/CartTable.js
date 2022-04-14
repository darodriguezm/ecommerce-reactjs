import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import './CartTable.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables({ products, onRemove }) {
    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="right">Producto</StyledTableCell>
                            <StyledTableCell align="right">Categoría</StyledTableCell>
                            <StyledTableCell align="right">Precio unitario</StyledTableCell>
                            <StyledTableCell align="right">Cantidad</StyledTableCell>
                            <StyledTableCell align="right">Precio total</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <StyledTableRow key={product.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Link to={`/item/${product.id}`}><img src={`./assets/img/productos/${product.imagenMini}`} alt={product.nombre} width='100' /></Link>
                                </StyledTableCell>
                                <StyledTableCell align="right">{product.nombre}</StyledTableCell>
                                <StyledTableCell align="right">{product.categoria}</StyledTableCell>
                                <StyledTableCell align="right">{product.precio}</StyledTableCell>
                                <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{product.quantity * product.precio}</StyledTableCell>
                                <StyledTableCell align="right" onClick={() => { onRemove(product.id) }}>{
                                    <Tooltip title="Eliminar" arrow>
                                        <DeleteIcon className="cursorPointer" />
                                    </Tooltip>
                                }</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={4} />
                            <TableCell colSpan={1} className="boldFont">Subtotal</TableCell>
                            <TableCell align="right">{
                                products.reduce((previo, actual) => previo + (actual.precio * actual.quantity), 0)
                            }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
}