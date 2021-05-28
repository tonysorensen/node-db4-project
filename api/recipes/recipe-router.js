const express = require("express");
const Recipes = require("./recipe-model.js");
const router = express.Router();

router.get("/recipes", (req, res, next) => {
  console.log(res.body);
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next); //the error handler in the server.js will trap this
});

module.exports = router;
