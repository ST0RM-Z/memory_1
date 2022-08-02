function imageLogic() {
  var cards = document.getElementById("cards");
  let rows = 4;
  let col = 4;
  var flag = false;
  var openCard = 0;
  var clone = Card_Img;
  var temp = [];
  var img = null;
  // console.log("src", clone);

  const player = sessionStorage.getItem("player_name");
  const cardsNum = sessionStorage.getItem("num_cards");
  console.log(cardsNum);
  rows = cardsNum / 8;
  col = cardsNum / 8;
  console.log(rows);
  for (var i = 1; i <= rows; i++) {
    // console.log("in--outer--loop");
    var tr = document.createElement("tr");
    for (var j = 0; j < col; j++) {
      // console.log("in--inner--loop", Card_Img[0]);
      // var src = Card_Img[0];
      var td = document.createElement("td");
      img = document.createElement("img");
      var data = randomImg.randomNum(24);
      var id = clone[data];
      // id = id.substring(14, 15);
      // console.log("id", id);
      // setData();
      temp.push(data);
      // console.log("temp", temp);
      var temp1 = temp.filter((item, index) => temp.indexOf(item) === index);

      temp1 = temp1.filter(function (element) {
        return element !== undefined;
      });
      // temp1.length = 8;

      var temp2 = [...temp1, ...temp1];

      // console.log("temp2", temp2);

      if (i == 1) {
        img.setAttribute("src", "../images/back.png");
        img.setAttribute("id", `${j}`);
      } else if (i == 2) {
        img.setAttribute("src", "../images/back.png");
        img.setAttribute("id", `${j + 4}`);
      } else if (i == 3) {
        img.setAttribute("src", "../images/back.png");
        img.setAttribute("id", `${j + 8}`);
      } else if (i == 4) {
        img.setAttribute("src", "../images/back.png");
        img.setAttribute("id", `${j + 13}`);
      }

      td.appendChild(img);
      tr.appendChild(td);
    }
    cards.appendChild(tr);
  }

  checkClick(flag, temp2, cardsNum);

  // ---  calling image id here this is used for pointing current element on click event ---
}
var openCard = 0;

function checkClick(flag, temp, cardsNum) {
  // console.log("checkClick", temp);
  let totalScore = 0;
  let cardsOpened = [];
  let src1 = [];
  let src2 = [];
  $("img").click(function (e) {
    openCard += 1;
    if (src1.length === 0) {
      // console.log("e.target", e.target);
      src1.push(e.target);
      // console.log("src1", src1);
    } else if (src1.length === 1) {
      src2.push(e.target);
    } else {
      // console.log("src2", src2);
      src1.length = 0;
      src2.length = 0;
    }
    var id = e.target.id;

    var src = e.target.id;
    // console.log(src);
    // console.log("src1", src);
    src = src.replace("dup", "");
    // console.log("tem", temp[15]);
    console.log(temp);
    // for (var k = 0; k < cardsNum; k++) {
    //   // console.log("temp-k", temp[k]);
    //   // console.log(this);
    //   // console.log("1111", temp[k]);
    //   document.getElementById(e.target.id).src = `./images/card_${temp[k]}.png`;
    // }

    // console.log("open", openCard);
    if (openCard == 2) {
      // openCard = 0;
      // console.log("src", src1, src2);
      // document.getElementsByTagName("img").disabled = true;

      if (src1[0].src === src2[0].src) {
        // console.log("src1", src1[0].id);
        // console.log("src", src2[0].id);
        $(`#${src1[0].id}`).hide(); //hides first element
        $(this).hide(); //hides current element
        openCard = 0;
        totalScore += 2;
        // console.log(totalScore);
        src1.length = 0;
        src2.length = 0;
      } else if (src1[0].src !== src2[0].src) {
        openCard = 0;
        console.log("src-", src1, src2);
        setTimeout(() => {
          // $("#cards").on("click", checkClick);
          $(`#${src1[0].id}`).attr("src", "../images/back.png");
          // $(`#${src2[0].id}`).attr("src", "../images/back.png");
          src1.length = 0;
          src2.length = 0;

          $(this).attr("src", "../images/back.png");
        }, 1000);
      }
    } else {
      // openCard = 0;
      // console.log("open-else", openCard);

      console.log(this);
    }
    flag = true;
  });
}
