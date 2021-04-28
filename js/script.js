console.log("Dzieńdoberek :)");

let formSpeed = document.querySelector(".js-form1");
let diameterSpeed = document.querySelector(".js-diameterInput1");
let rotationSpeed = document.querySelector(".js-rotationInput1");
let speedSpeed = document.querySelector(".js-speedResult1");

formSpeed.addEventListener("submit", (event) => {
    event.preventDefault();

    let speedElement;

    speedElement = Math.PI * diameterSpeed.value * rotationSpeed.value / 1000;

    speedSpeed.value = speedElement.toFixed(2);

})

let formRot = document.querySelector(".js-formRot");
let diameterRot = document.querySelector(".js-diameterRot");
let rotationRot = document.querySelector(".js-rotationRot");
let speedRot = document.querySelector(".js-speedRot");

formRot.addEventListener("submit", (event) => {
    event.preventDefault();

    let rotElement;

    rotElement = speedRot.value * 1000 / Math.PI * diameterRot.value;

    rotationRot.value = rotElement.toFixed(2);

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