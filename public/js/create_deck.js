$(document).ready(function() {
  var cardCount = 3;

  $("#add_new_card").on("click", function(event) {
    var newCardRow = $(
      '<div class="input-field col s6">' +
        '<input placeholder="Next Question" id= "question_field_' +
        cardCount +
        '" name = "answer_field_' +
        cardCount +
        '" class="validate" type="text">' +
        "</div>" +
        '<div class= "input-field col s6">' +
        '<input placeholder="Next Answer" name = "answer_field_' +
        cardCount +
        '" id= "answer_field_' +
        cardCount +
        '" class="validate " type="text">' +
        "</div>" +
        "</div>"
    );

    $(".newCardInput").append(newCardRow);
    cardCount++;
  });

  $("#create_deck_btn").on("click", function(event) {
    var deck_name = $("#deck_name_field").val();
    var newDeck = { deck_name: deck_name };
    console.log("location.hostname " + window.location.hostname);
    console.log("protocol " + window.location.protocol);
    console.log("pathname " + window.location.pathname);
    console.log("href " + window.location.href);
    var newURL =
      window.location.protocol + "//" + window.location.host + "/dashboard";
    window.location = newURL;
    $.ajax({
      url: "/api/decks",
      method: "POST",
      data: newDeck
    }).then(function(deck) {
      console.log("deck.id is" + deck.id);
      var deck_ID = deck.id;
      for (i = 0; i < cardCount; i++) {
        var question = $("#question_field_" + i).val();
        console.log("this is the questions: " + question);
        var answer = $("#answer_field_" + i).val();
        console.log("this is the answer: " + answer);
        console.log("this si deck_ID:" + deck_ID);
        var newCard = {
          question: question,
          answer: answer,
          DeckId: deck_ID
        };

        postCard(newCard);
      }
    });
  });

  // A function for creating an author. Calls getAuthors upon completion
  function postCard(postData) {
    console.log(postData);
    $.ajax({
      url: "/api/cards",
      method: "POST",
      data: postData
    });
  }
  // function postDeck(postData) {
  //   $.ajax(
  //     {
  //       url: "/api/decks",
  //       method: "POST"
  //     },
  //     postData
  //   );
  // }
});

//   $("#create_deck_btn").on("click", function(event) {
//     console.log(cardCount);
//     for (i = 0; i < cardCount; i++) {
//       var num = [i];
//       var field = "answer_field_" + num;
//       console.log("this is field: " + field);
//       var answer = .val(); $('[name="' + field + '"]').val();
//       console.log("this is answer: " + answer);
//     }
//   });
// });

// $(document).ready(function() {
//   // Getting references to the name input and author container, as well as the table body
//   var nameInput = $("#author-name");
//   var authorList = $("tbody");
//   var authorContainer = $(".author-container");
//   // Adding event listeners to the form to create a new object, and the button to delete
//   // an Author
//   $(document).on("submit", "#author-form", handleAuthorFormSubmit);
//   $(document).on("click", ".delete-author", handleDeleteButtonPress);

//   // Getting the initial list of Authors
//   getAuthors();

//   // A function to handle what happens when the form is submitted to create a new Author
//   function handleAuthorFormSubmit(event) {
//     event.preventDefault();
//     // Don't do anything if the name fields hasn't been filled out
//     if (
//       !nameInput
//         .val()
//         .trim()
//         .trim()
//     ) {
//       return;
//     }
//     // Calling the upsertAuthor function and passing in the value of the name input
//     upsertAuthor({
//       name: nameInput.val().trim()
//     });
//   }

//   // A function for creating an author. Calls getAuthors upon completion
//   function upsertAuthor(authorData) {
//     $.post("/api/authors", authorData).then(getAuthors);
//   }

//   // Function for creating a new list row for authors
//   function createAuthorRow(authorData) {
//     var newTr = $("<tr>");
//     newTr.data("author", authorData);
//     newTr.append("<td>" + authorData.name + "</td>");
//     newTr.append("<td> " + authorData.Posts.length + "</td>");
//     newTr.append(
//       "<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>"
//     );
//     newTr.append(
//       "<td><a href='/cms?author_id=" +
//         authorData.id +
//         "'>Create a Post</a></td>"
//     );
//     newTr.append(
//       "<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>"
//     );
//     return newTr;
//   }

//   // Function for retrieving authors and getting them ready to be rendered to the page
//   function getAuthors() {
//     $.get("/api/authors", function(data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createAuthorRow(data[i]));
//       }
//       renderAuthorList(rowsToAdd);
//       nameInput.val("");
//     });
//   }

//   // A function for rendering the list of authors to the page
//   function renderAuthorList(rows) {
//     authorList
//       .children()
//       .not(":last")
//       .remove();
//     authorContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       authorList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no authors
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("You must create an Author before you can create a Post.");
//     authorContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this)
//       .parent("td")
//       .parent("tr")
//       .data("author");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/authors/" + id
//     }).then(getAuthors);
//   }
// });
