import './App.css';
import HeaderNavbar from './components/HeaderNavBar/HeaderNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import topImage from './assets/img/topImage.png';
// import ItemList from './components/ItemList/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartConext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HeaderNavbar />
          <img src={topImage} width='100%' alt='' />
          <Routes>
            <Route path="/ofertas" element={<h1>Lista de productos en oferta</h1>} />
            <Route path="/" element={<ItemListContainer greeting="Lista de productos" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Categoría" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
