function imageLogic() {
  var cards = document.getElementById("cards");
  let rows = 4;
  let col = 4;
  var flag = false;
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

      if (!flag) {
        img.setAttribute("src", "../images/back.png");
        img.setAttribute("id", i);
      } else {
        //   img.setAttribute("src", "../images/back.png")
        img.setAttribute("src", Card_Img[data]);
      }
      // console.log(data);
      // console.log(img);
      td.appendChild(img);
      tr.appendChild(td);
    }
    cards.appendChild(tr);
    $(`#${i}`).click(function () {
      console.log("imgid", i);
      flag = true;
    });
  }
}
