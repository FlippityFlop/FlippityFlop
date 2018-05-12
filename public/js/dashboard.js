$(document).ready(function() {
  console.log("document.ready");

  // Variable to hold our decks
  var decks;

  // The code below handles the case where we want to get blog posts for a specific deck
  // Looks for a query param in the url for deck_id
  var url = window.location.search;
  var deckId = 1;

  $.get("/api/decks", function(data) {
    console.log("decks data= ", data);
    decks = data;
    console.log("decks.length = " + decks.length);
    if (!decks || !decks.length) {
      displayEmpty(decks);
    } else {
      console.log("you are in deck_page.js line 38");
      initializedecks(decks);
    }
  });

  function initializedecks(decks) {
    console.log("decks in initializedecks" + decks);
    console.log(" card.length in initalize" + decks.length);
    for (var i = 0; i < decks.length; i++) {
      var newDeckRow = $(
        '<div class="col m12 l6">' +
          '<div class="image_container">' +
          '<img src="images/deck_bg.png" id="deck_bg">' +
          '<div class="centered card_title card_color">' +
          decks[i].deck_name +
          "</div>" +
          "</div>" +
          "</div>"
      );
      $(".newDeckHere").append(newDeckRow);
    }

    $(".deleteButton").on("click", function(event) {
      var id = $(this).attr("id");
      console.log("id of button clicked? " + id);
      $.ajax({
        method: "DELETE",
        url: "/api/decks/" + id
      }).then(function(cb) {
        initializedecks(cb, deckId);
      });
      window.location.href = window.location.href;
    });
  }
});
