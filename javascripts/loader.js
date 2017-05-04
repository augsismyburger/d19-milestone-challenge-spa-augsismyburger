"use strict"

var CarLot = (function(oldLot) {
    var privateLot;

    oldLot.loadInventory = function(populate) {
        // console.log(populate);
        var carLoader = new XMLHttpRequest();
        carLoader.addEventListener("error", printCarsError);
        function printCarsError(event) {
            alert("JSON Failed to Load");
        }
        carLoader.addEventListener("load",  function() {
            privateLot = JSON.parse(this.responseText).cars;
            // console.log(privateLot);
            populate(privateLot);
            // HAD TO PUT THIS HERE SO THE DOM WOULD BE POPULATED
            CarLot.activateEvents();
        });
        carLoader.open("GET", "inventory.json");
        carLoader.send();
    }

    return oldLot;
})(CarLot || {});
