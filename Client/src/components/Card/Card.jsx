import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import style from "./card.module.css";

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
 character,
}) => {
 const [isFav, setIsFav] = useState(false);
 const [closeButton, setCloseButton] = useState(true);

 useEffect(() => {
  if (!onClose) {
   setCloseButton(false);
  }
 }, []);

 const handleFavorite = () => {
  if (!isFav) {
   addFav({ id, name, status, species, gender, origin, image });
   setIsFav(true);
  } else {
   removeFav(id);
   setIsFav(false);
  }
 };

 useEffect(() => {
  myFavorites.forEach((fav) => {
   if (fav.id === id) {
    setIsFav(true);
   }
  });
 }, [myFavorites, id]);

 const handleClose = () => {
  onClose(id);
 };

 return (
  <div className={style.card_container}>
   <div className={style.card_buttons}>
    {isFav ? (
     <button onClick={() => handleFavorite(id)}>❤️</button>
    ) : (
     <button onClick={() => handleFavorite(character)}>🤍</button>
    )}

    {closeButton && (
     <button
      onClick={() => {
       onClose(id);
      }}
     >
      X
     </button>
    )}
   </div>

   <div className={style.card_image}>
    <img className={style.img} src={image} alt="" />
   </div>

   <div className={style.card_info_container}>
    <div className="card_character_name">
     <NavLink className={style.navlink} to={`/detail/${id}`}>
      <h1 className={style.h1}>{name}</h1>
     </NavLink>
    </div>

    <div className="card_character_info">
     <h2>{species}</h2>
     <h2>{gender}</h2>
     <h2>{status}</h2>
     <h2>{origin}</h2>
    </div>
   </div>
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
