import './App.css';
import About from './components/About';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import NotFound from './components/NotFound';


function App() {

   let [characters,setCharacters] = useState([])

   
   const onSearch = (id) => { //este id es el state (lo que escribe el usuario) cuando se ejecuta handleSearch en el button
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
      let charactersFilter = characters.filter((element)=>{return element.id!==Number(id)})
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>

         <Nav onSearch={onSearch}/>

         <Routes>
               <Route 
                  path='/home'
                  element={
                     <Cards
                        characters={characters}
                        onClose={onClose}
                     />
                  }
               />

               <Route
                  path="/about"
                  element={
                     <About/>  
                  }
               />

               <Route 
                  path='/detail/:id'
                  element={<Detail
                     characters={characters}
                  />}>
                  
               </Route>

               <Route
                  path='*'
                  element={<NotFound/>}
               
               />

         </Routes>
      </div>
   );
}

export default App;
