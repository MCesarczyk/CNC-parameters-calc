{
    const welcome = () => {
        console.log("Welcome, how are you? :)");
    };

    const form1 = document.querySelector(".js-form1");
    const form2 = document.querySelector(".js-form2");
    const form3 = document.querySelector(".js-form3");

    const form1submit = (event) => {
        event.preventDefault();
        const diameterInput1 = document.querySelector(".js-diameterInput1");
        const rotationInput1 = document.querySelector(".js-rotationInput1");
        let speedResult1 = document.querySelector(".js-speedResult1");
        let speedElement;
        speedElement = Math.PI * diameterInput1.value * rotationInput1.value / 1000;
        speedResult1.value = speedElement.toFixed(2);
    };

    const form2submit = (event) => {
        event.preventDefault();
        const diameterInput2 = document.querySelector(".js-diameterInput2");
        const speedInput2 = document.querySelector(".js-speedInput2");
        let rotationResult2 = document.querySelector(".js-rotationResult2");
        let rotElement;
        rotElement = speedInput2.value * 1000 / Math.PI / diameterInput2.value;
        rotationResult2.value = rotElement.toFixed(2);
    };

    let feedElement;

    const form3input = (event) => {
        const rotationInput3 = document.querySelector(".js-rotationInput3");
        const feedForRev = document.querySelector(".js-feedForRev");
        const feedForTooth = document.querySelector(".js-feedForTooth");
        const toothNumber = document.querySelector(".js-toothNumber");
        const rev = document.querySelector(".js-rev");
        const tooth = document.querySelector(".js-tooth");
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
        };
    };

    const form3submit = (event) => {
        event.preventDefault();
        let feedResult3 = document.querySelector(".js-feedResult3");
        feedResult3.value = feedElement;
    };

    const init = () => {
        form1.addEventListener("submit", form1submit);
        form2.addEventListener("submit", form2submit);
        form3.addEventListener("input", form3input);
        form3.addEventListener("submit", form3submit);
    };

    welcome();
    init();
}