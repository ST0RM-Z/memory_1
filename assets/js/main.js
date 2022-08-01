// "use strict";;

$(document).ready(function () {
  $("#tabs").tabs();
  var data = randomImg.randomNum(24);

  // console.log(data);
  // console.log("a");
  // ----------------------calling image method------------
  image();
  function image() {
    imageLogic();
  }
  // ----------------------calling session storage method------------
  // sessionStore();
  function sessionStore() {
    store_session();
  }
});
