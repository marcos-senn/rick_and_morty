const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { deleteFav } = require("../models/Favorite");
const { postUser } = require("../controllers/postUser");
const { postFav } = require("../controllers/postFav");
const router = require("express").Router();



router.get("/login", (req, res) => {
 login(req, res);
});
router.post("/login", (req, res) => {
 postUser(req, res);
});

router.post("/fav", (req, res) => {
 postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
 deleteFav(req, res);
});

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
   });

module.exports = {
 router,
};
