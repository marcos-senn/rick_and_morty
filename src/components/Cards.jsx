import Card from './Card';

const Cards = ({characters,onClose}) => {

  
   return (
      <div className='Cards'>
      {
         characters.map(({id,name,status,species,gender,origin,image}) => {
            return(
         
            <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
            )
         })
      }
      </div>
   )

}

export default Cards


 

   