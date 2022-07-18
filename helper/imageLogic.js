function imageLogic() {
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
