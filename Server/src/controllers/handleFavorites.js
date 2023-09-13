let myFavorites = [];

const postFav = (req, res) => {
 const character = req.body;
 myFavorites.push(character);
 return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
 const { id } = req.parms;
 myFavorites = myFavorites.filter((character) => {
  character.id !== Number(id);
 });

 return res.status(200).json(characterFiltered);
};

module.exports = {
 postFav,
 deleteFav,
 
};
