var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/", function(req, res) {
    res.render("signup", { user: req.user });
  });

  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  app.get("/signin", function(req, res) {
    res.render("signin", { user: req.user });
  });

  // index route loads index.html
  // app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  app.get("/index", function(req, res) {
    res.render("signup", { user: req.user });
  });

  // create_deck route loads create_deck.html
  // app.get("/create_deck", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/create_deck.html"));
  // });

  app.get("/create_deck", function(req, res) {
    res.render("create_deck", { user: req.user });
  });

  // deck_page route loads deck_page.html
  // app.get("/deck_page", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/deck_page.html"));
  // });

  app.get("/deck_page", function(req, res) {
    res.render("deck_page", { user: req.user });
  });

  // app.get("/deck_page/:id", function(req, res) {
  //   res.render("deck_page_id", { user: req.user });
  // });
  // home_create route loads home_create.html
  // app.get("/home_create", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home_create.html"));
  // });

  app.get("/home_create", function(req, res) {
    res.render("home_create", { user: req.user });
  });

  // user_home_usingCLSSLESS route loads user_home_usingCLSSLESS.html
  //What is this page???
  // app.get("/user_home_usingCLSSLESS", function(req, res) {
  //   res.sendFile(
  //     path.join(__dirname, "../public/user_home_usingCLSSLESS.html")
  //   );
  // });

  // user_home route loads user_home.html
  // app.get("/user_home", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/user_home.html"));
  // });

  app.get("/dashboard", function(req, res) {
    res.render("dashboard", { user: req.user });
  });

  // login route loads login.html
  //   app.get("/login", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/login.html"));
  //   });
  // };
};
