const Card = ({id,name,status,species,gender,origin,image,onClose}) =>{
  
   const handleClose = () => {
      onClose(id)
   }

   return (
      <div className="Card animate__animated animate__fadeInDown">
         <button onClick={handleClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

export default Card




