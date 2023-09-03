import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from './nav.module.css'

const Nav = ({ onSearch }) => {
 return (
  <nav className={style.nav}>
   

   <button className={style.button}>
    <NavLink className={style.navlink} to="/about">About Me</NavLink>
   </button>

   <button className={style.button}>
    <NavLink className={style.navlink} to="/favorites">Favorites</NavLink>
   </button>

   <button className={style.button}>
    <NavLink className={style.navlink} to="/home">Home</NavLink>
   </button>

   <SearchBar onSearch={onSearch} />
  </nav>
 );
};

export default Nav;
