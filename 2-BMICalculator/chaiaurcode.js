const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`

    const weightCondition = document.querySelector("#weight-guide");

    if (bmi < 18.6) {
        weightCondition.innerHTML = "Under weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        weightCondition.innerHTML = "Normal weight";
    } else if (bmi > 24.9) {
        weightCondition.innerHTML = "Over weight";
    }

    form.reset();
});
