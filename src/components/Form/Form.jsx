import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
 const [errors, setErrors] = useState({});

 const [userData, setUserData] = useState({
  email: "",
  password: "",
 });

 const handleChange = (event) => {
  //para avisarle a mi estado que va a ser iguala  mi input
  setUserData({
   ...userData,
   [event.target.name]: event.target.value,
  });

  setErrors(
   validation({
    //validation tiene como prop userdata
    ...userData,
    [event.target.name]: event.target.value,
   })
  ); // Llamada a la función de validación después de actualizar el estado
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  login(userData);
 };

 return (
  <div>
   <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input
     type="email"
     name="email"
     onChange={handleChange}
     placeholder="Ingrese su email"
     value={userData.email}
    />
    {/* el value es para decirle que el valor es igual al estado */}

    {errors.email && <p>{errors.email}</p>}

    <label htmlFor="password">Password</label>
    <input
     type="password"
     name="password"
     onChange={handleChange}
     placeholder="Ingrese su password"
     value={userData.password}
    />

    {errors.password && <p>{errors.password}</p>}

    <button type="sumbit">Submit</button>
   </form>
  </div>
 );
};

export default Form;
