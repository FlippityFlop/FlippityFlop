$(document).ready(function() {
  window.globalid = "";
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
          "<div>" +
          '<button class="btn waves-effect btn-large pink lighten-1 bahten openButton" id="' +
          decks[i].id +
          '" type="submit" name="action">Open Deck' +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>"
      );
      $(".newDeckHere").append(newDeckRow);
    }
  }
  $(".newDeckHere").on("click", ".openButton", function(event) {
    console.log("click worked");
    var id = $(this).attr("id");
    console.log("BUTTON ID " + id);
    console.log(window.globalid);
    var newURL =
      window.location.protocol + "//" + window.location.host + "/deck_page";
    window.location = newURL;
  });
});
