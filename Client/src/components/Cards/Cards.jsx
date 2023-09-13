import Card from "../Card/Card";
import style from './cards.module.css'

const Cards = ({ characters, onClose }) => {
 return(
   <div className={style.cards}> {characters?.map((character) => (
      <div key={character.id}>
      <Card
      id = {character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.name}
      image={character.image}
      onClose={onClose}
      />
      </div>
        ))} 
        </div>
   )
}

export default Cards;
