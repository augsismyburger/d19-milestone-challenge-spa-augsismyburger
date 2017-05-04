"use strict"
// POPULATE PAGE
function populatePage(privateArray) {
  var pageContent = "";
  // console.log(privateArray);
  for(let i = 0; i < privateArray.length; i++) {
    if (i === 0 || i === 3) {
      pageContent +=
      `<div class="row"><div class="col s6 m4"><div class="card border-function"><div class="card-image"><img src="${privateArray[i].picture}"><span class="">${privateArray[i].make + privateArray[i].model}</span></div><div class="card-content" id="a${i}"><p class="para">${privateArray[i].description}</p></div></div></div>`;
    } else if(i === 2 || i === 5) {
      pageContent +=
      `<div class="col s6 m4"><div class="card border-function"><div class="card-image"><img src="${privateArray[i].picture}"><span class="">${privateArray[i].make + privateArray[i].model}</span></div><div class="card-content" id="a${i}"><p class="para">${privateArray[i].description}</p></div></div></div></div>`
    } else {
      pageContent +=
      `<div class="col s6 m4"><div class="card border-function"><div class="card-image"><img src="${privateArray[i].picture}"><span class="">${privateArray[i].make +privateArray[i].model}</span></div><div class="card-content" id="a${i}"><p class="para">${privateArray[i].description}</p></div></div></div>`;

    }
    document.getElementById('inventory').innerHTML = pageContent;

  }
}

CarLot.loadInventory(populatePage);

