const { User } = require("../DB_connection");

async function login(req, res) {
  const { email, password } = req.query;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(414).json({ message: "User not found in DB" });
    }

    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).json({ message: "Incorrect password" });

    // El email y la contraseña coinciden, el inicio de sesión es exitoso
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = login;





// // Opcion del readme M3
// const data = require("../utils/users");


// function login (req, res) {
//   const { email, password } = req.query;
//   // Opcion del readme

// const found = data.find((user) => (user.email == email && user.password == password) )
// const access = found ? true : false; 
//     res.status(200).json({ access });
// };

// module.exports = login;



