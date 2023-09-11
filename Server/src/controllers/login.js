const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  // console.log(email);

  const user = users.find((user) => {
    if (email === user.email && password === user.password) {
      res.status(200).json({ access: true });
    } else {
      res.status(200).json({ access: true });
    }
  });
  /**
   * const user=users.some(some=>
   * user.email===email&&user.password===password) 
   * esto retorna un booleano y es lo mismo que lo de arriba 
   */
};

module.exports = login;
