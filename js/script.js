console.log("Dzieńdoberek :)");

let form1 = document.querySelector(".js-form1");
let diameterInput1 = document.querySelector(".js-diameterInput1");
let rotationInput1 = document.querySelector(".js-rotationInput1");
let speedResult1 = document.querySelector(".js-speedResult1");

form1.addEventListener("submit", (event) => {
    event.preventDefault();

    let speedElement;

    speedElement = Math.PI * diameterInput1.value * rotationInput1.value / 1000;

    speedResult1.value = speedElement.toFixed(2);

})

let form2 = document.querySelector(".js-form2");
let diameterInput2 = document.querySelector(".js-diameterInput2");
let speedInput2 = document.querySelector(".js-speedInput2");
let rotationResult2 = document.querySelector(".js-rotationResult2");

form2.addEventListener("submit", (event) => {
    event.preventDefault();

    let rotElement;

    rotElement = speedInput2.value * 1000 / Math.PI / diameterInput2.value;

    rotationResult2.value = rotElement.toFixed(2);

})

let form3 = document.querySelector(".js-form3");
let rotationInput3 = document.querySelector(".js-rotationInput3");
let feedForRev = document.querySelector(".js-feedForRev");
let feedForTooth = document.querySelector(".js-feedForTooth");
let toothNumber = document.querySelector(".js-toothNumber");
let feedResult3 = document.querySelector(".js-feedResult3");

let rev = document.querySelector(".js-rev");
let tooth = document.querySelector(".js-tooth");
let feedElement;

form3.addEventListener("input", (event) => {

    if (tooth.checked) {
        feedElement = rotationInput3.value * feedForTooth.value * toothNumber.value;
        feedForRev.disabled = true;
        feedForRev.value = "";
        feedForTooth.disabled = false;
        toothNumber.disabled = false;
    } else if (rev.checked) {
        feedElement = rotationInput3.value * feedForRev.value;
        feedForRev.disabled = false;
        feedForTooth.disabled = true;
        feedForTooth.value = "";
        toothNumber.disabled = true;
        toothNumber.value = "";
    }
})

form3.addEventListener("submit", (event) => {
    event.preventDefault();
    feedResult3.value = feedElement;
})