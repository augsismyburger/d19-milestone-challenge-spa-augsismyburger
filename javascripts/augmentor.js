"use strict"

var CarLot = (function(oldLot) {
    var navTextInput = document.getElementById('nav-user-input');
    var carInfoCurrentTarget = "";

    oldLot.borderPlus = function(event, color) {
        // console.log(event.currentTarget);
        carInfoCurrentTarget = event.currentTarget;
        carInfoCurrentTarget.classList.toggle(color);
        navTextInput.focus();
    }

    oldLot.doNavThings = function(event, color) {
        // console.log(carInfoCurrentTarget);
        if (event.key === "Enter") {
            carInfoCurrentTarget.classList.remove(color);
            event.target.value = null;
        } else {
            carInfoCurrentTarget.querySelector('.para').innerHTML = "";
            carInfoCurrentTarget.querySelector('.para').innerHTML += navTextInput.value;
        }
    }

    return oldLot;

})(CarLot || {});
