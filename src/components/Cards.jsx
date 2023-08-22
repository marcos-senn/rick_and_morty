import Card from './Card';

const Cards = ({characters}) => {
  
   return (
      <>
      {
         characters.map(character => {
            return(
         
            <Card 
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
            />
            )
         })
      }
      </>
   )

}

export default Cards


 

   