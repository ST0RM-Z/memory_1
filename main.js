// "use strict";;

$(document).ready(function () {
  $("#tabs").tabs();
  var data = randomImg.randomNum(24);

  console.log(data);
  // console.log("a");
  // ----------------------calling function in document.ready method
  nextImage();
  function nextImage() {
    var cards = document.getElementById("cards");
    let rows = 4;
    let col = 4;
    console.log("src");
    for (var i = 0; i < rows; i++) {
      // console.log("in--outer--loop");
      var tr = document.createElement("tr");
      for (var j = 0; j < col; j++) {
        // console.log("in--inner--loop", Card_Img[0]);
        // var src = Card_Img[0];
        var td = document.createElement("td");
        const img = document.createElement("img");
        var data = randomImg.randomNum(24);
        // console.log(data);
        img.setAttribute("src", Card_Img[data]);
        // console.log(img);
        td.appendChild(img);
        tr.appendChild(td);
      }
      cards.appendChild(tr);
    }
  }
});

$(document).ready(() => {
  if (sessionStorage.getItem("player_name") != null) {
    $("#player").text("Player: " + sessionStorage.getItem("player_name"));
  }
  $("#save_settings").click(() => {
    const player_name = $("#player_name").val();
    const num_cards = $("#num_cards").val();

    sessionStorage.setItem("player_name", player_name);
    sessionStorage.setItem("num_cards", num_cards);
    location.reload();
  });
});
