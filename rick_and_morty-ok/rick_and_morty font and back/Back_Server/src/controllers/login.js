// Opcion del readme
const data = require("../utils/users");


function login (req, res) {
  const { email, password } = req.query;
  // Opcion del readme

const found = data.find((user) => (user.email === email && user.password === password) )
    const access = found ? true: true; //falta arreglar
    res.status(200).json({ access });
};

module.exports = login;
