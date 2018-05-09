// Create the cards with each news source for the user to see
function makeCard(title, description, img, link, logo) {
  if (!img) {
    img = "assets/images/dolphin_card1.jpg";
  }

  var one = $("<div>")
    .addClass("col s12 m4")
    .attr("id", "columnOne");
  var two = $("<img>").attr("src", "assets/images/" + logo);
  let thumbnail = $("<img>").attr("src", img);
  var three = $(
    '<div class="card">' +
      '<div class="card-image crop-height">' +
      "</div>" +
      '<div class="titleMargin">' +
      '<span class="card-title">' +
      title +
      "</span>" +
      '<a href= "' +
      link +
      '" target="_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">arrow_forward</i></a>' +
      "</div>" +
      '<div class="card-content">' +
      "<p>" +
      description +
      "</p>" +
      '<button id="sentimentButton" data-name = "' +
      link +
      '"> Check Political and Emotional Value </button>' +
      "</div>" +
      "</div>"
  );

  // Respond to errors when no image is present by displaying a placeholder image
  $(thumbnail).on("error", function(err) {
    this.onerror = null;
    $(this).attr("src", "assets/images/noImage.jpg");
  });

  // Append the proper information to the card
  three.children(".card-image").prepend(thumbnail);
  one.append(two, three);
  $("#newsRow").prepend(one);
}
