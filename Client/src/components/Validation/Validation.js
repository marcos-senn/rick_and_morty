const validation = (userData) => {
 const errors = {};

 if (
  !/^(?=.{1,35}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
   userData.email
  )
 ) {
  errors.email = "EMAIL INVALIDO";
 }

 if (!/^(?=.*[0-9])(?=.{6,10}$).*/.test(userData.password)) {
  errors.password =
   "Contraseña debe tener entre 6 y 10 caracteres y al menos 1 numero";
 }

 return errors;
};

export default validation;
