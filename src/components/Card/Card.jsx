import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

const Card = ({
 id,
 name,
 status,
 species,
 gender,
 origin,
 image,
 onClose,
 addFav,
 removeFav,
 myFavorites,
}) => {
 const [isFav, setIsFav] = useState(false);

 const handleFavorite = () => {
  if (isFav) {
   setIsFav(false);
   removeFav(id);
  } else {
   setIsFav(true);
   addFav({ id, name, status, species, gender, origin, image });
  }
 };

 useEffect(() => {
  myFavorites.some((fav) => {
   if (fav.id === id) {
    setIsFav(true);
   }
  });
 }, [myFavorites, id]);

 const handleClose = () => {
  onClose(id);
 };

 return (
  <div className="Card animate__animated animate__fadeInDown">
   <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍"}</button>

   <button onClick={handleClose}>X</button>

   <NavLink to={`/detail/${id}`}>
    <h3 className="card-name">{name}</h3>
   </NavLink>
   <h2>{species}</h2>
   <h2>{gender}</h2>
   <h2>{status}</h2>
   <h2>{origin}</h2>
   <img src={image} alt="" />
  </div>
 );
};

const mapDispatchToProps = (dispatch) => {
 return {
  addFav: (character) => {
   dispatch(addFav(character));
  }, //tengo que retornar siempre porque al reducer necesito pasarle un objeto, que es lo que se retorna al ejecutar, si no la ejecuto le paso solamente la fucnion
  removeFav: (id) => {
   dispatch(removeFav(id));
  },
 };
};

const mapStateProps = (state) => {
 return {
  myFavorites: state.myFavorites,
 };
};

export default connect(mapStateProps, mapDispatchToProps)(Card);
