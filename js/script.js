{
    const welcome = () => {
        console.log("Hello, programmer, how are you? :)");
    };

    const form1equation = () => {
        const diameter = document.querySelector(".js-diameterInput1").value;
        const rotation = document.querySelector(".js-rotationInput1").value;
        return speedElement = Math.PI * diameter * rotation / 1000;
    };

    const form1submit = (event) => {
        event.preventDefault();
        form1equation();
        const speedResult = document.querySelector(".js-speedResult1");
        speedResult.value = speedElement.toFixed(2);
    };

    const form2equation = () => {
        const diameter = document.querySelector(".js-diameterInput2").value;
        const speed = document.querySelector(".js-speedInput2").value;
        return rotElement = speed * 1000 / Math.PI / diameter;
    };

    const form2submit = (event) => {
        event.preventDefault();
        form2equation();
        const rotationResult = document.querySelector(".js-rotationResult2");
        rotationResult.value = rotElement.toFixed(2);
    };

    const form3input = (event) => {
        const rotation = document.querySelector(".js-rotationInput3").value;
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
            return feedElement = rotation * feedForTooth.value * toothNumber.value;
        } if (rev.checked) {
            feedForRev.disabled = false;
            feedForTooth.disabled = true;
            feedForTooth.value = "";
            toothNumber.disabled = true;
            toothNumber.value = "";
            return feedElement = rotation * feedForRev.value;
        };
    };

    const form3submit = (event) => {
        event.preventDefault();
        const feedResult = document.querySelector(".js-feedResult3");
        feedResult.value = feedElement;
    };

    const tapDiameterTable = [
        { id: 0, diameter: "", pitch: "" },
        { id: 1, diameter: 1, pitch: 0.25 },
        { id: 2, diameter: 1.1, pitch: 0.25 },
        { id: 3, diameter: 1.2, pitch: 0.25 },
        { id: 4, diameter: 1.4, pitch: 0.3 },
        { id: 5, diameter: 1.6, pitch: 0.35 },
        { id: 6, diameter: 1.8, pitch: 0.35 },
        { id: 7, diameter: 2, pitch: 0.4 },
        { id: 8, diameter: 2.2, pitch: 0.45 },
        { id: 9, diameter: 2.5, pitch: 0.45 },
        { id: 10, diameter: 3, pitch: 0.5 },
        { id: 11, diameter: 3.5, pitch: 0.6 },
        { id: 12, diameter: 4, pitch: 0.7 },
        { id: 13, diameter: 4.5, pitch: 0.75 },
        { id: 14, diameter: 5, pitch: 0.8 },
        { id: 15, diameter: 6, pitch: 1 },
        { id: 16, diameter: 7, pitch: 1 },
        { id: 17, diameter: 8, pitch: 1.25 },
        { id: 18, diameter: 9, pitch: 1.25 },
        { id: 19, diameter: 10, pitch: 1.5 },
        { id: 20, diameter: 11, pitch: 1.5 },
        { id: 21, diameter: 12, pitch: 1.75 },
        { id: 22, diameter: 14, pitch: 2 },
        { id: 23, diameter: 16, pitch: 2 },
        { id: 24, diameter: 18, pitch: 2.5 },
        { id: 25, diameter: 20, pitch: 2.5 },
        { id: 26, diameter: 22, pitch: 2.5 },
        { id: 27, diameter: 24, pitch: 3 },
        { id: 28, diameter: 27, pitch: 3 },
        { id: 29, diameter: 30, pitch: 3.5 },
        { id: 30, diameter: 33, pitch: 3.5 },
        { id: 31, diameter: 36, pitch: 4 },
        { id: 32, diameter: 39, pitch: 4 },
        { id: 33, diameter: 42, pitch: 4.5 },
        { id: 34, diameter: 45, pitch: 4.5 },
        { id: 35, diameter: 48, pitch: 5 },
        { id: 36, diameter: 52, pitch: 5 },
        { id: 37, diameter: 56, pitch: 5.5 },
        { id: 38, diameter: 60, pitch: 5.5 },
        { id: 39, diameter: 64, pitch: 6 },
        { id: 40, diameter: 68, pitch: 6 },
    ];

    const createTapDiameterList = () => {
        const optionList = document.querySelector(".js-tapDiameter").options;
        tapDiameterTable.forEach(option =>
            optionList.add(
                new Option(option.diameter, option.pitch)
            )
        );
    };

    const form4insertData = () => {
        const rotationCalculated = document.querySelector(".js-rotationResult2").value;
        const rotationInput = document.querySelector(".js-rotationInput4");
        if (rotationCalculated === "") {
            rotationInput.placeholder = "nie podano wartości";
        } else {
            rotationInput.value = rotationCalculated;
        }
    };

    const form4equation = () => {
        const rotation = document.querySelector(".js-rotationInput4").value;
        const diameter = document.querySelector(".js-tapDiameter").value;
        const pitch = document.querySelector(".js-pitch").value;
        if (diameter === "") {
            return feedElement = "wybierz średnicę";
        }
        return feedElement = rotation * pitch;
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

    const form4reset = () => {
        const rotationInput = document.querySelector(".js-rotationInput4");
        rotationInput.placeholder = "obroty wrzeciona";
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
        form4.addEventListener("reset", form4reset);
        const insertRotation = document.querySelector(".js-insertRotation4");
        insertRotation.addEventListener("click", form4insertData);
    };

    init();
}