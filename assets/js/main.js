// "use strict";;

$(document).ready(function () {
  $("#tabs").tabs();
  var data = randomImg.randomNum(24);

  // console.log(data);
  // console.log("a");
  // function sessionStore() {
  //   store_session();
  // }
  // // ----------------------calling image method------------
  image();
  function image() {
    imageLogic();
  }
  // ----------------------calling session storage method------------
  store_session();
});
