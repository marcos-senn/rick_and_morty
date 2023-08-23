import { NavLink } from "react-router-dom";

const Card = ({id,name,status,species,gender,origin,image,onClose}) =>{
  
   const handleClose = () => {
      onClose(id)
   }

   

   return (
      <div className="Card animate__animated animate__fadeInDown">
         <button onClick={handleClose}>X</button>

         <NavLink to={`/detail/${id}`} >

          <h3 className="card-name">{name}</h3>

         </NavLink>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

export default Card




