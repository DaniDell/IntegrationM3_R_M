// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"); //es una forma de abrir el servidor sin restriciones
//     const { url } = req;
//     if (url.includes("/rickandmorty/character")) {
//       const id = Number(url.split("/").at(-1));
//       getCharById(res, id);
//     } else {
//       res.writeHead(403, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Route not found" }));
//     }
//   })


//   .listen(PORT, "localhost", null, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });


const PORT = 3001;
const express = require("express");
const router = require("./routes/index");
const server = express();
const morgan = require ("morgan")

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use(morgan("dev"));

server.use("/rickandmorty", router);


