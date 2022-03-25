import './App.css';
import HeaderNavbar from './components/HeaderNavBar/HeaderNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import topImage from './assets/img/topImage.png';
import ItemList from './components/ItemList/ItemList';


function App() {

  return (
    <>
      <HeaderNavbar />
      <img src={topImage} width='100%' alt='' />
      <ItemListContainer greeting="Lista de productos">
        <ItemList />
      </ItemListContainer>
    </>
  );
}

export default App;
