import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
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
    login(userDate)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userDate.email}
          onChange={handleChange}
        />
        {errors.email ? <p>{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userDate.password}
          onChange={handleChange}
        />
        {errors.password ? <p>{errors.password}</p> : null}
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Form;
