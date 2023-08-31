const http = require("http");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("/rickandmorty/character/")) {
      const id = url.split("/").at(-1);
      getCharById(res, id);
    }
  })
  .listen(3001, "localhost"); //! OJO nunca olvidar el listen

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
