"use strict";

$( function(){
    $( "#tabs" ).tabs();
   } );

   var Card_Img = [
    "images/card_1.png",
    "images/card_2.png",
    "images/card_3.png",
    "images/card_4.png",
    "images/card_5.png",
    "images/card_6.png",
    "images/card_7.png",
    "images/card_8.png",
    "images/card_9.png",
    "images/card_10.png",
    "images/card_11.png",
    "images/card_12.png",
    "images/card_13.png",
    "images/card_14.png",
    "images/card_15.png",
    "images/card_16.png",
    "images/card_17.png",
    "images/card_18.png",
    "images/card_19.png",
    "images/card_20.png",
    "images/card_21.png",
    "images/card_22.png",
    "images/card_23.png",
    "images/card_24.png"];
   


   function nextImage(elecardsment)
 {
//    var img = document.getElementById(element);
      document.getElementById(cards).src = imgArray[0].src;
 }

   $(document).ready( () => {

    if(sessionStorage.getItem("player_name") != null){
        $("#player").text('Player: '+sessionStorage.getItem("player_name"));


    }
              $( "#save_settings" ).click( () => {    
                
                
                const player_name = $("#player_name").val();
                const num_cards = $("#num_cards").val();
                
                    sessionStorage.setItem("player_name", player_name);
                    sessionStorage.setItem("num_cards", num_cards);
                    location.reload();
                
                
            });

         

  
}); 
