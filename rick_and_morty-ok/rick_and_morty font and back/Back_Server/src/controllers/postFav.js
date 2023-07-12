const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!id || !name || !origin || !status || !image || !species || !gender)
      return res.status(401).json({ message: "Faltan datos" });

    // Agregar el favorito al estado local (redux, useState, etc.)
    // ...

    // Guardar el favorito en la base de datos
    const favorite = await Favorite.create({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    return res.status(200).json(favorite);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
