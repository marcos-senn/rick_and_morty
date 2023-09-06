import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const email = "marcos@gmail.com";
const password = "abcdef1";

function App() {
 const location = useLocation();
 const [characters, setCharacters] = useState([]);
 const navigate = useNavigate();
 const [access, SetAcces] = useState(false);

 const login = (userData) => {
  if (userData.email === email && userData.password === password) {
   SetAcces(true);
   navigate("/home");
  }
 };

 useEffect(() => {
  !access && navigate("/");
 }, [access]);

 const onSearch = (id) => {
  //este id es el state (lo que escribe el usuario) cuando se ejecuta handleSearch en el button
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({ data }) => {
    if (characters.some((character) => character.id === data.id)) {
     alert("¡El personaje ya está en la lista!");
    } else if (data.name) {
     setCharacters((characters) => [...characters, data]);
    } else {
     alert("¡No hay personajes con este ID!");
    }
   })

   .catch((error) => {
    console.error(`Error ${error}`);
   });
 };

 const onClose = (id) => {
  let charactersFilter = characters.filter((element) => {
   return element.id !== Number(id);
  });
  setCharacters(charactersFilter);
 };

 return (
  <div className="App">
   {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

   <Routes>
    <Route path="/" element={<Form login={login} />} />

    <Route
     path="/home"
     element={<Cards characters={characters} onClose={onClose} />}
    />

    <Route path="/about" element={<About />} />

    <Route
     path="/detail/:id"
     element={<Detail characters={characters} />}
    ></Route>

    <Route path="/favorites" element={<Favorites />} />

    <Route path="*" element={<NotFound />} />
   </Routes>
  </div>
 );
}

export default App;
