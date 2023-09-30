const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const favDeleted = await Favorite.destroy({ where: { id } });
    if (!favDeleted) {
      return res.send("Personaje no existe");
    }
    const allFav = await Favorite.findAll();
    res.status(200).json(allFav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
