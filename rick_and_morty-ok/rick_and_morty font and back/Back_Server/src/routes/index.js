// Una forma de extraerse router
/* const express = require("express")
const router = express.Router()
 */
// Otra forma de extraerse router
const {Router} = require("express");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");

const router = Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
