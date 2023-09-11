let myFavorites = [];

const postFav = (req, res) => {
  const newCharacter = req.body;
  myFavorites.push(newCharacter);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id != id);
  res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};