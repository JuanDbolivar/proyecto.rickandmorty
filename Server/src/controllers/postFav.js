const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json("faltan datos");
    }
    await Favorite.findOrCreate({
      where: {
        name,
      },
      defaults: { origin, status, image, species, gender },
    });
    const fav = await Favorite.findAll();
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
