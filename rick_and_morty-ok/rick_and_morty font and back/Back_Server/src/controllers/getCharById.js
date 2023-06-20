const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
  axios
    .get(`${URL}/${id}`)
    .then(({ data }) => {
      const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character)); // Convertir a cadena JSON
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(reason.message);
    });
};

module.exports = getCharById;
