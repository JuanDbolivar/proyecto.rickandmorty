const { User } = require("./DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const userValidated = await User.findOne({
      where: {
        email,
      },
    });
    if (!userValidated) {
      return res.status(404).json("Usuario no encontrado");
    }
    if (userValidated.password != password) {
      return res.status(403).json("Contraseña incorrecta");
    }
    res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  //   try {
  //     if (email) {
  //       const user = await User.findOne(email);
  //       if (user) {
  //         const userV = await user.findOne(password);
  //         if (userV) {
  //           res.status(200).json({
  //             access: true,
  //           });
  //         }
  //         throw Error("Contraseña incorrecta");
  //       }
  //       throw Error("Usuario no encontrado");
  //     }
  //     throw Error("Faltan datos");
  //   } catch (error) {
  //     res.status(403).json({ error: error.message });
  //   }
};

module.exports = login;
