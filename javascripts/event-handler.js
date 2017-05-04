"use strict"

var CarLot = (function(oldLot) {
    var navTextInput = document.getElementById('nav-user-input');

    oldLot.activateEvents = function (event) {
         var cardButtons = document.getElementsByClassName('card');
        // console.log(cardButtons.length);
        for (let i = 0; i < cardButtons.length; i++) {
            // console.log(cardButtons[i]);
            cardButtons[i].addEventListener('click', function(event) {
                CarLot.borderPlus(event, "lightgrey");
            });
        }

        navTextInput.addEventListener("keyup", function(event) {
            CarLot.doNavThings(event, "lightgrey");
        });

    }

    return oldLot;
})(CarLot || {});

// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
