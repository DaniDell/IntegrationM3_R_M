
const { Favorite } = require("../DB_connection");

const deleteFav = async(req,res) => {

    const {id} = req.params;
    try {
    
    if (!id) return req.status(400).json({error: "Faltan datos"})
     await Favorites.destroy({
        where: {id:id}
     });
     
     const favs = await Favorites.findAll()

     return res.status(200).json(favs)

} catch (error) {
    return res.status(500).jason({ error: error.message})
}
}

module.exports = deleteFav;