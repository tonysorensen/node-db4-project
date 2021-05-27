const express = require('express')
const Recipes = require('./recipe-model.js')
const router = express.Router()


router.get('/', (req,res,next)=>{
    console.log(res.body)
})

module.exports = router