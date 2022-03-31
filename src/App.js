import './App.css';
import HeaderNavbar from './components/HeaderNavBar/HeaderNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import topImage from './assets/img/topImage.png';
import ItemList from './components/ItemList/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderNavbar />
        <img src={topImage} width='100%' alt='' />
        <Routes>
          <Route path="/ofertas" element={<h1>Lista de productos en oferta</h1>} />
          <Route path="/" element={
            <ItemListContainer greeting="Lista de productos">
              <ItemList />
            </ItemListContainer>
          } />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
