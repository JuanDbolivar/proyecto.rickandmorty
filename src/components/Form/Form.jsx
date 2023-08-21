import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userDate, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userDate, [property]: value });
    setErrors(validation({ ...userDate, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userDate);
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style.email}>
        <label htmlFor="email">Email:</label>
        <input
          className={style.input}
          type="email"
          name="email"
          value={userDate.email}
          onChange={handleChange}
        />
        {errors.email ? <p className={style.errorsE}>{errors.email}</p> : null}
      </div>
      <div className={style.pass}>
        <label htmlFor="password">Password:</label>
        <input
          className={style.input}
          type="text"
          name="password"
          value={userDate.password}
          onChange={handleChange}
        />
        {errors.password ? <p className={style.errorsP}>{errors.password}</p> : null}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Form;
