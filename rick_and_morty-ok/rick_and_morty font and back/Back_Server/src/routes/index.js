const { Router } = require("express");
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getFavorites = require("../controllers/getFavorites");


const router = Router();

// Ruta para obtener un personaje por su ID
router.get("/character/:id", getCharById);

// Rutas de inicio de sesión
router.get("/login", login);
router.post("/login", postUser);

// Rutas de favoritos
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/favorites", getFavorites);


module.exports = router;
