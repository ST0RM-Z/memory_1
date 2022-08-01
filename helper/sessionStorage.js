const store_session = () => {
  // console.log("session");
  if (sessionStorage.getItem("player_name") != null) {
    $("#player").text("Player: " + sessionStorage.getItem("player_name"));
    console.log(sessionStorage.getItem("player_name"));
  }
  $("#save_settings").click(() => {
    const player_name = $("#player_name").val();
    const num_cards = $("#num_cards").val();

    sessionStorage.setItem("player_name", player_name);
    sessionStorage.setItem("num_cards", num_cards);
    console.log(sessionStorage.getItem("player_name"));
    location.reload();
  });
};
