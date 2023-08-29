import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
 return (
  <nav>
   <SearchBar onSearch={onSearch} />

   <button>
    <NavLink to="/about">About Me</NavLink>
   </button>

   <button>
    <NavLink to="/favorites">Favorites</NavLink>
   </button>

   <button>
    <NavLink to="/home">Home</NavLink>
   </button>
  </nav>
 );
};

export default Nav;
