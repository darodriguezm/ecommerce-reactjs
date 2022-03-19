import './App.css';
import { useEffect } from 'react';
import HeaderNavbar from './components/HeaderNavBar/HeaderNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import topImage from './assets/img/topImage.png';

function App() {

  const onAdd = (quantity, description) => {
    alert(`Se han agregado ${quantity} artículos\n${description}`)
  }

  const itemsData = [
    {
      itemDescription: "Artículo sin stock",
      itemLimit: 0,
      onAdd: onAdd
    },
    {
      itemDescription: "Artículo con stock = 4",
      itemLimit: 4,
      onAdd: onAdd
    }
  ]

  const scrollHandler = (e) => {
    if (window.scrollY > 0){
      
    } else {
      
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true)

  }, []);

  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <img src={topImage} width='100%' alt='' />
      <ItemListContainer greeting="Mensaje de componente ItemListContainer">
        {
          itemsData.map((itemData, index) => {
            return <ItemCount itemData={itemData} key={index} />
          })
        }
      </ItemListContainer>
    </>
  );
}

export default App;
