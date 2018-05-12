$(document).ready(function() {
  console.log("document.ready");

  // blogContainer holds all of our posts
  var deckContainer = $(".deck-container");
  var cardCategorySelect = $("#category");
  // Click events for the edit and delete buttons

  // Variable to hold our cards
  var cards;

  // The code below handles the case where we want to get blog posts for a specific deck
  // Looks for a query param in the url for deck_id
  var url = window.location.search;
  console.log(url);
  // var deckId = 1;
  yourDeck();

  function yourDeck() {
    console.log("you are in yourdeck function");
    $.get("/api/yourdeck", function(data) {
      console.log("yourdeck ", data);
      yourdeck = data.SelectedDecks;
      console.log("var yourdeck = " + yourdeck);
      var id = data[0].find_deck;
      console.log("your find_deck id " + id);
      getCards(id);
    });
  }

  // This function grabs decks from the database and updates the view
  function getCards(deck) {
    console.log("deck" + deck);
    var deckId = deck || "";
    console.log("deckid" + deckId);
    // if (deckId) {
    //   deckId = "" + deckId;
    // }
    $.get("/api/decks/deck_id=" + deckId, function(data) {
      console.log("decks & cards", data);
      cards = data.Cards;
      console.log("cards111 " + cards);
      console.log("card.lenght = " + cards.length);
      if (!cards || !cards.length) {
        displayEmpty(cards);
      } else {
        console.log("you are in deck_page.js line 38");
        initializeCards(cards, deckId);
      }
    });
  }
});

function initializeCards(cards, deckId) {
  console.log("cards in initializeCards" + cards);
  console.log(" card.length in initalize" + cards.length);
  for (var i = 0; i < cards.length; i++) {
    var newCardRow = $(
      '<div class="col s12 m6">' +
        '<div class="card">' +
        '<div class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src="images/card_bg.png">' +
        "</div>" +
        '<div class="card-content card-back">' +
        '<span class="card-title activator white-text text-darken-4">' +
        cards[i].question +
        '<i class="material-icons right">arrow_upward' +
        "</i>" +
        "</span>" +
        "</div>" +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' +
        '<i class="material-icons right">arrow_downward' +
        "</i>" +
        "</span>" +
        "<p>" +
        cards[i].answer +
        "</p>" +
        '<div class="center">' +
        '<button class="btn waves-effect btn-large pink lighten-1 bahten deleteButton" id="' +
        cards[i].id +
        '" type="submit" name="action">Delete' +
        "</button>" +
        "&nbsp" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
    $(".newCardHere").append(newCardRow);
  }

  $(".deleteButton").on("click", function(event) {
    var id = $(this).attr("id");
    console.log("id of button clicked? " + id);
    $.ajax({
      method: "DELETE",
      url: "/api/cards/" + id
    }).then(function(cb) {
      initializeCards(cb, deckId);
    });
    window.location.href = window.location.href;
  });
}
