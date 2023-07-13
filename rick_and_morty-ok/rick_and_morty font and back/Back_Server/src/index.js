const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const morgan = require("morgan");
const { conn } = require("./DB_connection");
const router = require("./routes/index.js");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Routes
app.use("/rickandmorty", router);

// WebSocket connection
wss.on("connection", (ws) => {
  console.log("WebSocket connected");

  ws.on("message", (message) => {
    console.log("Received message:", message);

    // Handle WebSocket message
    // ...
  });

  ws.on("close", () => {
    console.log("WebSocket disconnected");
  });
});

// Error handler middleware
app.use(errorHandler);

// Start the server
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Error syncing database:", error);
});







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


// const PORT = 3001;
// const express = require("express");
// const router = require("./routes/index");
// const server = express();
// const {conn} = require("./DB_connection")
// const morgan = require ("morgan")

// server.listen(PORT, () => {
//   conn.sync({force:true});
//   console.log(`Server on port ${PORT}`);
// });

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use(express.json());

// server.use(morgan("dev"));

// server.use("/rickandmorty", router);


