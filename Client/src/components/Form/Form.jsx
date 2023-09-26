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
        <input
          // className={style.input}
          type="email"
          name="email"
          required
          value={userDate.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        {errors.email ? <p className={style.errorsE}>{errors.email}</p> : null}
      </div>
      <div className={style.pass}>
        <input
          // className={style.input}
          type="text"
          name="password"
          required
          value={userDate.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        {errors.password ? (
          <p className={style.errorsP}>{errors.password}</p>
        ) : null}
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
