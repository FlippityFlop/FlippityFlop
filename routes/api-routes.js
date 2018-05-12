var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/decks/", function(req, res) {
    db.Deck.findAll({}).then(function(dbDeck) {
      res.json(dbDeck);
    });
  });

  app.get("/api/cards/", function(req, res) {
    db.Card.findAll({}).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  app.get("/api/decks/deck_id=:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Deck.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Card]
    }).then(function(dbDeck) {
      res.json(dbDeck);
    });
  });

  app.delete("/api/cards/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Card.destroy({
      where: { id: req.params.id }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   // Add sequelize code to find all posts where the category is equal to req.params.category,
  //   // return the result to the user with res.json
  // });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   // Add sequelize code to find a single post where the id is equal to req.params.id,
  //   // return the result to the user with res.json
  // });

  // // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   // Add sequelize code for creating a post using req.body,
  //   // then return the result using res.json
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   // Add sequelize code to delete a post where the id is equal to req.params.id,
  //   // then return the result to the user using res.json
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   // Add code here to update a post using the values in req.body, where the id is equal to
  //   // req.body.id and return the result to the user using res.json
  // });
};
