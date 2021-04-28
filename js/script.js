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

    let rotElement  ;

    rotElement = speedInput2.value * 1000 / Math.PI / diameterInput2.value;

    rotationResult2.value = rotElement.toFixed(2);

})

let formFeed = document.querySelector(".js-formFeed");
let rotationFeed = document.querySelector(".js-rotationFeed");
let feedTurn = document.querySelector(".js-feedTurn");
let feedTooth = document.querySelector(".js-feedTooth");
let toothNumber = document.querySelector(".js-toothNumber");
let feedFeed = document.querySelector(".js-feedFeed");

let rev = document.querySelector(".js-rev");
let tooth = document.querySelector(".js-tooth");
let feedFeedVar;

formFeed.addEventListener("input", (event) => {
    event.preventDefault();


    if (tooth.checked) {
        feedFeedVar = rotationFeed.value * feedTooth.value * toothNumber.value;
        feedTurn.setAttribute("disabled", "");
        feedTurn.value = ("");
        feedTooth.toggleAttribute("disabled", "");
        toothNumber.toggleAttribute("disabled", "");
        tooth.setAttribute("checked", "");
        rev.toggleAttribute("checked", "");
    } else if (rev.checked) {
        feedFeedVar = rotationFeed.value * feedTurn.value;
        feedTurn.toggleAttribute("disabled", "");
        feedTooth.setAttribute("disabled", "");
        feedTooth.value = ("");
        toothNumber.setAttribute("disabled", "");
        toothNumber.value = ("");
        rev.setAttribute("checked", "");
        tooth.toggleAttribute("checked", "");
    }
})

formFeed.addEventListener("submit", (event) => {
    event.preventDefault();
    feedFeed.value = feedFeedVar;
})