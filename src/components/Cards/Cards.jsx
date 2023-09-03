import Card from "../Card/Card";
import style from './cards.module.css'

const Cards = ({ characters, onClose }) => {
 return (
  <div className={style.cards}>
   {characters.map(({ id, name, status, species, gender, origin, image }) => {
    return (
     <Card
      key={id}
      id={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
      onClose={onClose}
     />
    );
   })}
  </div>
 );
};

export default Cards;
