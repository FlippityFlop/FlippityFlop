// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/flipFlop.html"));
  });

  // cms route loads cms.html
  app.get("/createdeck", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create_deck.html"));
  });

  // blog route loads blog.html
  app.get("/flipFlop", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/flipFlop.html"));
  });

  // authors route loads author-manager.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });
};
