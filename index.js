const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.getElementById("result");
    let weightCondition = false;
    let heightCondition = false;

    if (height === "" || height < 20 || isNaN(height)) {
        heightCondition = true;
    }
    if (weight === "" || weight < 30 || isNaN(weight)) {
        weightCondition = true;
    }

    if (weightCondition && !(heightCondition)) {
        results.innerText = "Please enter valid weight."
    } else if (heightCondition && !(weightCondition)) {
        results.innerText = "Please enter valid height."
    } else if (weightCondition && heightCondition) {
        results.innerText = "Please enter valid weight and height."
    } else {
        const calculation = weight / (Math.pow((height / 100), 2));
        const roundOfValue = parseFloat(calculation.toFixed(2));
        results.innerText = `The BMI is ${roundOfValue}`
    }

})

