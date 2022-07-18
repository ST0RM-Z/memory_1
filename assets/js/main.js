// "use strict";;

$(document).ready(function () {
  $("#tabs").tabs();
  var data = randomImg.randomNum(24);

  console.log(data);
  // console.log("a");
  // ----------------------calling function in document.ready method
  image();
  function image() {
    imageLogic();
  }

  function sessionStore() {
    store_session();
  }
});

// $(document).ready(() => {
//   if (sessionStorage.getItem("player_name") != null) {
//     $("#player").text("Player: " + sessionStorage.getItem("player_name"));
//   }
//   $("#save_settings").click(() => {
//     const player_name = $("#player_name").val();
//     const num_cards = $("#num_cards").val();

//     sessionStorage.setItem("player_name", player_name);
//     sessionStorage.setItem("num_cards", num_cards);
//     location.reload();
//   });
// });
