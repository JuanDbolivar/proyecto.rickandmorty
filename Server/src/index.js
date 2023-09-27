const express = require("express");
const router = require("./routes/index");
const { conn } = require("./DB_connection");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json()); //! OJO con esto, nunca olvidar este middlerware
server.use("/rickandmorty", router);

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});

module.exports = server;
//!--------------------------------------------------------------------!//
//!--------------------------------------------------------------------!//

// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character/")) {
//       const id = url.split("/").at(-1);
//       getCharById(res, id);
//     }
//   })
//   .listen(3001, "localhost"); //! OJO nunca olvidar el listen

//!--------------------------------------------------------------------!//
//!--------------------------------------------------------------------!//

// const data = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character/")) {
//       //todo lo que yo ponga dentro del if se va a ejecutar TODO!!!
//       const id = url.split("/").at(-1);
//       const character = data.find((char) => char.id == id);
//       //* con find ingresamos al array data y retornamos el primer elemento que cumpla
//       //   if (character) {
//       res.writeHead(200, { "Content-Type": "application/json" }); //* estatus 200 es una respuesta 'OK'
//       return res.end(JSON.stringify(character)); //* con esta linea de codigo yo convierto el array js a json para servers
//       //   }
//     }
//   })
//   .listen(3001, "localhost"); //! OJO nunca olvidar el listen
