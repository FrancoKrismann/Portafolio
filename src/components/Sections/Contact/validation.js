const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




export const validationForm = (nombre, email, message) => {
 const errors = {};
console.log("Validation",nombre);
 if (!email) {
    errors.email = 'Este campo es obligatorio';
  }else if(!emailRegex.test(email)){
      errors.email = 'Correo invalido';
  }

  if (!nombre) {
    errors.nombre = 'Este campo es obligatorio';
  }

  if(!message){
    errors.message = "Este campo es obligatorio"
  }else if(message.length > 500) {
    errors.message = "Es una exageracion"
  }

return errors;
}