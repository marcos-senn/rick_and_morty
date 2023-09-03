import { useState } from "react";
import style from './searchbar.module.css'

const SearchBar = ({ onSearch }) => {
 const [id, setId] = useState("");

 const handleChange = (event) => {
  //setea el estado con el valor del input que coloca el usuario
  setId(event.target.value);
 };

 const handleKeyPress = (event) => {
  //Si el usuario presiona enter se dispara handleSearch
  if (event.key === "Enter") {
   handleSearch();
  }
 };

 const handleSearch = () => {
  // Pasa el ID a la función onSearch en el componente Nav, puedo usar un callback direcamente en el componente como
  //onclick={()=>onSearch(id);setId('')} pero lo hago asi para resetear el id a '' y que no aparezca eso en el input cuando quiere agregar otro id y que quede mas claro
  onSearch(id);
  setId("");
 };

 return (
  <div className={style.searchBar}>
   <input className={style.input}
    placeholder="Ingrese un ID"
    type="search"
    value={id}
    onChange={handleChange}
    onKeyPress={handleKeyPress}
   />
   <button className={style.button}
    onClick={handleSearch}>Agregar</button>
  </div>
 );
};

export default SearchBar;
