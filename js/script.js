{
    const welcome = () => {
        console.log("Welcome, how are you? :)");
    };

    const form1equation = () => {
        const diameterInput = document.querySelector(".js-diameterInput1");
        const rotationInput = document.querySelector(".js-rotationInput1");
        return speedElement = Math.PI * diameterInput.value * rotationInput.value / 1000;
    };

    const form1submit = (event) => {
        event.preventDefault();
        form1equation();
        const speedResult = document.querySelector(".js-speedResult1");
        speedResult.value = speedElement.toFixed(2);
    };

    const form2equation = () => {
        const diameterInput = document.querySelector(".js-diameterInput2");
        const speedInput = document.querySelector(".js-speedInput2");
        return rotElement = speedInput.value * 1000 / Math.PI / diameterInput.value;
    };

    const form2submit = (event) => {
        event.preventDefault();
        form2equation();
        const rotationResult = document.querySelector(".js-rotationResult2");
        rotationResult.value = rotElement.toFixed(2);
    };

    const form3input = (event) => {
        const rotationInput = document.querySelector(".js-rotationInput3");
        const feedForRev = document.querySelector(".js-feedForRev");
        const feedForTooth = document.querySelector(".js-feedForTooth");
        const toothNumber = document.querySelector(".js-toothNumber");
        const rev = document.querySelector(".js-rev");
        const tooth = document.querySelector(".js-tooth");
        if (tooth.checked) {
            feedForRev.disabled = true;
            feedForRev.value = "";
            feedForTooth.disabled = false;
            toothNumber.disabled = false;
            return feedElement = rotationInput.value * feedForTooth.value * toothNumber.value;
        } if (rev.checked) {
            feedForRev.disabled = false;
            feedForTooth.disabled = true;
            feedForTooth.value = "";
            toothNumber.disabled = true;
            toothNumber.value = "";
            return feedElement = rotationInput.value * feedForRev.value;
        };
    };

    const form3submit = (event) => {
        event.preventDefault();
        const feedResult = document.querySelector(".js-feedResult3");
        feedResult.value = feedElement;
    };

    const diameterTable = ["-", 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 42, 45, 48];
    const pitchTable = ["-", 0.5, 0.7, 0.8, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 4.5, 5];


    const createTapDiameterList = () => {
        const optionList = document.querySelector(".js-tapDiameter").options;
        diameterTable.forEach(option =>
            optionList.add(
                new Option(option)
            )
        );
    };

    const createPitchList = () => {
        const optionList = document.querySelector(".js-pitch").options;
        pitchTable.forEach(option =>
            optionList.add(
                new Option(option)
            )
        );
    };

    const form4equation = () => {
        const rotationInput = document.querySelector(".js-rotationInput4").value;
        const pitch = document.querySelector(".js-pitch").value;
        if (pitch === "-") {
            return feedElement = "wybierz skok";
        }
        return feedElement = rotationInput * pitch;
    };

    const form4submit = (event) => {
        event.preventDefault();
        form4equation();
        document.querySelector(".js-feedResult4").value = feedElement;
    };

    const init = () => {
        welcome();
        createTapDiameterList();
        createPitchList();
        const form1 = document.querySelector(".js-form1");
        const form2 = document.querySelector(".js-form2");
        const form3 = document.querySelector(".js-form3");
        const form4 = document.querySelector(".js-form4");
        form1.addEventListener("submit", form1submit);
        form2.addEventListener("submit", form2submit);
        form3.addEventListener("input", form3input);
        form3.addEventListener("submit", form3submit);
        form4.addEventListener("submit", form4submit);
    };

    init();
}