const validation = ({ email, password }) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^([A-Za-z0-9]){6,10}$/;
  let errors = {};

  if (!regexEmail.test(email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!email) {
    errors.email = "Esta campo no puede estar vacio";
  }
  if (email.length > 35) {
    errors.email = "Debe tener menos de 35 caracteres";
  }

  if (!regexPassword.test(password)) {
    errors.password =
      "Password debe tener al menos un numero, una letre mayuscula y debe tener entre 6 y 10 caracteres";
  }
  

  return errors;
};

export default validation;
