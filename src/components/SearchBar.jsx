import { useState } from "react";

const SearchBar = ({onSearch}) => {
  
  const [id,setId] = useState('')

   const handleChange = (e) => { //setea el estado con el valor del input que coloca el usuario
      setId(e.target.value)
   }
   
   const handleKeyPress = (e) => {  //Si el usuario presiona enter se dispara handleSearch
      if (e.key === "Enter") {
        handleSearch();
      }
    };

   const handleSearch = () => {  // Pasa el ID a la función onSearch en el componente Nav
      onSearch(id)
      setId('')
   }

   return (
      
      <div className="SearchBar">
         <input 
            placeholder="Ingrese un ID"
            type='search'
            onChange = {handleChange}
            onKeyPress={handleKeyPress}
            value={id}  
         />
         
         <button onClick={handleSearch}>Agregar</button>
      </div>
      
   );
}

export default SearchBar