var db = require("../models");

module.exports = function(app) {
  //   app.get("/api/authors", function(req, res) {
  //     // Here we add an "include" property to our options in our findAll query
  //     // We set the value to an array of the models we want to include in a left outer join
  //     // In this case, just db.Post
  //     db.Author.findAll({
  //       include: [db.Post]
  //     }).then(function(dbAuthor) {
  //       res.json(dbAuthor);
  //     });
  //   });

  //   app.get("/api/authors/:id", function(req, res) {
  //     // Here we add an "include" property to our options in our findOne query
  //     // We set the value to an array of the models we want to include in a left outer join
  //     // In this case, just db.Post
  //     db.Author.findOne({
  //       where: {
  //         id: req.params.id
  //       },
  //       include: [db.Post]
  //     }).then(function(dbAuthor) {
  //       res.json(dbAuthor);
  //     });
  //   });

  app.post("/api/cards", function(req, res) {
    console.log(req.body.name);
    console.log(req.body.question);
    db.Card.create({
      answer: req.body.answer,
      question: req.body.question,
      DeckId: req.body.DeckId
    }).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  app.post("/api/decks", function(req, res) {
    console.log(req.body.deck_name);
    db.Deck.create({
      deck_name: req.body.deck_name
    }).then(function(dbDeck) {
      res.json(dbDeck);
    });
  });

  //   app.delete("/api/authors/:id", function(req, res) {
  //     db.Author.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbAuthor) {
  //       res.json(dbAuthor);
  //     });
  //   });
};
