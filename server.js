var express = require("express");
var exphbs = require("express-handlebars");

// var session = require("express-session");
// var passport = require("./config/passport");


var app = express();
var PORT = process.env.PORT || 7000;

// var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Route
// =============================================================
app.use(require("./routes"));

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
