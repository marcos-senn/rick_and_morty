import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {

   let [characters,setCharacters] = useState([])

   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
     
      .then(({ data }) => {
         if(characters.some((character) => character.id === data.id)){
            alert('¡El personaje ya está en la lista!')
         }
         else if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } 
         
         else {
            alert('¡No hay personajes con este ID!');
         }
      })

      .catch((error) => {
         console.error(`Error ${error}`);
       });

       
   }

   const onClose = (id) => {
      let newCharacters = characters.filter((element)=>{return element.id!==Number(id)})
      setCharacters(newCharacters)
   }

   return (
         <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards 
         characters={characters}
         onClose = {onClose}
         />
      </div>
   );
}

export default App;
