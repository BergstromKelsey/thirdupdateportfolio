
var router = require("express").Router();
var path = require( 'path');


const { Router } = require("express");


let unpack = (data) => JSON.parse(JSON.stringify(data));

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
res.render("index")
  })

  module.exports = router;