import './App.css';
import HeaderNavbar from './components/HeaderNavBar/HeaderNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import topImage from './assets/img/topImage.png';

function App() {
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      {/* <img src={topImage} width='100%'/> */}
      <ItemListContainer greeting="Mensaje de componente ItemListContainer"></ItemListContainer>
    </>
  );
}

export default App;
