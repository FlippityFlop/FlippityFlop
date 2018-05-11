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
  var deckId = 1;
  getCards(deckId);
  //   if (url.indexOf("?deck_id=") !== -1) {
  //     deckId = url.split("=")[1];
  //     getCards(deckId);
  //   }
  //   // If there's no deckId we just get all posts as usual
  //   else {
  //     getCards();
  //   }

  // This function grabs decks from the database and updates the view
  function getCards(deck) {
    console.log("deck" + deck);
    deckId = deck || "";
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
        initializeCards(cards);
      }
    });
  }
});

function initializeCards(cards) {
  console.log("cards in initializeCards" + cards);
  console.log(" card.length in initalize" + cards.length);
  for (var i = 0; i < cards.length; i++) {
    var newCardRow = $(
      '<div class="input-field col s6">' +
        '<input placeholder="Next Question" id= "question_field_' +
        i +
        '" name = "answer_field_' +
        i +
        '" class="validate" type="text">' +
        "</div>" +
        '<div class= "input-field col s6">' +
        '<input placeholder="Next Answer" name = "answer_field_' +
        i +
        '" id= "answer_field_' +
        i +
        '" class="validate " type="text">' +
        "</div>" +
        "</div>"
    );
    $(".newCardHere").append(newCardRow);
  }
}
