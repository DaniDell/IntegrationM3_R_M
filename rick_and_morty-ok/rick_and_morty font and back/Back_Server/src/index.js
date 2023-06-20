const http = require("http");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //es una forma de abrir el servidor sin restriciones
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").at(-1));
      getCharById(res, id);
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  })


  .listen(PORT, "localhost", null, () => {
    console.log(`Listening on port: ${PORT}`);
  });


// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;
//     if (url.includes("/rickandmorty/character")) {
//       // /rickandmorty/character/1
//       // [] -> "1" -> 1 .... también se puede colocar +id para pasar a numero
//       const id = Number(url.split("/").at(-1));
//       // [{},{},{}]
//       const character = data.find((character) => character.id === id);
//       // personaje -> {}
//       if (character) {
//         // personaje -> objeto
//         res.writeHead(200, { "Content-Type": "application/json" });
//         //
//         res.end(JSON.stringify(character));
//       } else {
//         // personaje -> objeto
//         res.writeHead(404, { "Content-Type": "application/json" });
//         //
//         res.end(JSON.stringify({ message: "Character not found" }));
//       }
//     } else {
//       res.writeHead(403, { "Content-Type": "application/json" });
//       //
//       res.end(JSON.stringify({ message: "Route not found" }));
  //   }
  // })
  // .listen(PORT, "localhost", null, () => {
  //   console.log(`Listening on port: ${PORT}`);
    
  // });
