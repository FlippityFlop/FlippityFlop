// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");
var env = require('dotenv').load();
var flash = require('connect-flash');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4070;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(function(req, res, next) {
  res.locals.signinMessage = req.flash('signinMessage');
  res.locals.signupMessage = req.flash('signupMessage');
  res.locals.error = req.flash('error');
  next();
});

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/create_deck_routes.js")(app);
require("./routes/html-routes.js")(app);
//var db = require("./models");
var models = require("./models");
var authRoute = require('./routes/auth.js')(app,passport);
require('./config/passport/passport.js')(passport, models.user);


// Syncing our sequelize models and then starting our Express app
// =============================================================
models.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});