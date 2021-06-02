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

    const diameterTable = [
        { id: 0, diameter: "", pitch: "" },
        { id: 1, diameter: 3, pitch: 0.5 },
        { id: 2, diameter: 4, pitch: 0.7 },
        { id: 3, diameter: 5, pitch: 0.8 },
        { id: 4, diameter: 6, pitch: 1 },
        { id: 5, diameter: 8, pitch: 1.25 },
        { id: 6, diameter: 10, pitch: 1.5 },
        { id: 7, diameter: 12, pitch: 1.75 },
        { id: 8, diameter: 16, pitch: 2 },
        { id: 9, diameter: 20, pitch: 2.5 },
        { id: 10, diameter: 24, pitch: 3 },
        { id: 11, diameter: 30, pitch: 3.5 },
        { id: 12, diameter: 36, pitch: 4 }
    ];

    const createTapDiameterList = () => {
        const optionList = document.querySelector(".js-tapDiameter").options;
        diameterTable.forEach(option =>
            optionList.add(
                new Option(option.diameter, option.pitch)
            )
        );
    };

    const form4equation = () => {
        const rotationInput = document.querySelector(".js-rotationInput4").value;
        const diameter = document.querySelector(".js-tapDiameter").value;
        const pitch = document.querySelector(".js-pitch").value;
        if (!diameter > 0) {
            return feedElement = "wybierz średnicę";
        }
        return feedElement = rotationInput * pitch;
    };

    const form4input = () => {
        const optionChosen = document.querySelector(".js-tapDiameter");
        const pitchInput = document.querySelector(".js-pitch");
        pitchInput.value = parseFloat(optionChosen.value);
    };

    const form4submit = (event) => {
        event.preventDefault();
        form4equation();
        document.querySelector(".js-feedResult4").value = feedElement;
    };

    const init = () => {
        welcome();
        createTapDiameterList();
        const form1 = document.querySelector(".js-form1");
        const form2 = document.querySelector(".js-form2");
        const form3 = document.querySelector(".js-form3");
        const form4 = document.querySelector(".js-form4");
        form1.addEventListener("submit", form1submit);
        form2.addEventListener("submit", form2submit);
        form3.addEventListener("input", form3input);
        form3.addEventListener("submit", form3submit);
        form4.addEventListener("input", form4input);
        form4.addEventListener("submit", form4submit);
    };

    init();
}