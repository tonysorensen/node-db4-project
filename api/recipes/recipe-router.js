const express = require("express");
const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log('getRecipes', Recipes.getRecipes);
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err=>console.log(err)); //the error handler in the server.js will trap this
});

module.exports = router;
