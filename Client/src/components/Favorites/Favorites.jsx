import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/action";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
 const dipatch = useDispatch();

 const handleOrder = (event) => {
  dipatch(orderCards(event.target.value));
  setAux(true);
 };

 const handleFilter = (event) => {
  dipatch(filterCards(event.target.value));
 };

 const [aux, setAux] = useState(false);
 return (
  <div>
   <select name="" id="" onChange={handleOrder}>
    <option value="A">Ascendente</option>
    <option value="D">Descendente</option>
   </select>

   <select name="" id="" onChange={handleFilter}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">Unknow</option>
    <option value="allCharacters">All</option>
   </select>

   {myFavorites?.map((fav) => {
    return (
     <Card
      key={fav.id}
      id={fav.id}
      name={fav.name}
      species={fav.species}
      gender={fav.gender}
      image={fav.image}
      status={fav.status}
     />
    );
   })}
  </div>
 );
};

const mapStateToProps = (state) => {
 return {
  myFavorites: state.myFavorites,
 };
};

export default connect(mapStateToProps, null)(Favorites);
