const axios = require("axios");
// const { params } = require("express");

const URL = "https://rickandmortyapi.com/api";

const succesH = (response, res) => {
  if (response.data) {
    const { id, status, name, gender, species, origin, image } = response.data; //* response es un objeto
    res.status(200).json({ id, status, name, gender, species, origin, image });
  } else {
    res.status(404).send("Not found");
  }
};
const errorH = (error, res) => {
  res.status(500).send(error.message);
};

const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}`)
    .then((response) => succesH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = getCharById;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api";

// const succesH = (response, res) => {
//   const { id, name, gender, species, origin, image } = response.data; //* response es un objeto
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ id, name, gender, species, origin, image }));
// };
// const errorH = (error, res) => {
//   res.writeHead(500, { "Content-Type": "text/plain" });
//   res.end(error.message);
// };

// const getCharById = (res, id) => {
//   axios
//     .get(`${URL}/character/${id}`)
//     .then((response) => succesH(response, res))
//     .catch((error) => errorH(error, res));
// };

// module.exports = getCharById;
