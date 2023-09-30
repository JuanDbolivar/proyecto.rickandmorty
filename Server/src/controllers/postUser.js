const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const [user, isCreated] = await User.findOrCreate({
      where: { email, password },
    });
    isCreated ? res.status(201).json(user) : res.status(200).json("Usuario ya existente");
    // res.status(201).json({ user, created: isCreated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
