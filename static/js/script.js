document.addEventListener("DOMContentLoaded", (event) => {

    const puppy = document.getElementById("puppy");
    const adult = document.getElementById("adult");
    const result = document.getElementById("result");

    document.querySelector('form').addEventListener('submit', (event) => {
        // prevent form submission
        event.preventDefault();

        // get values of the inputs
        const puppyValue = puppy.value.trim();
        const adultValue = adult.value.trim();

        // clear result div
        result.innerHTML = "";

        // validate inputs
        checkInputs(puppyValue, adultValue);

        // if inputs valid -> perform calculations & display data
        const validInputs = document.querySelectorAll(".valid");
        if (validInputs.length === 2){
            const puppyFloat = parseFloat(puppyValue);
            const adultFloat = parseFloat(adultValue);

            // calculate current RER - Resting Energy Requirement of the puppy
            let rer = 70 * (puppyFloat ** 0.75);

            // calculate the percentage of the adult dog weight
            let percentOfAdultDogWeight = puppyFloat * 100 / adultFloat

            // calculate DER - Daily Energy Requirement  of the puppy
            let der = 0;
            if (percentOfAdultDogWeight <= 50) {
                der = 3 * rer;
            } else if (percentOfAdultDogWeight > 50 && percentOfAdultDogWeight < 80) {
                der = 2.5 * rer;
            } else if (percentOfAdultDogWeight >= 80 && percentOfAdultDogWeight < 100) {
                der = 2 * rer;
            } else {
                der = 1.8 * rer;
            }

            // round data to display
            der = Math.floor(der);
            rer = Math.floor(rer);
            percentOfAdultDogWeight = Math.floor(percentOfAdultDogWeight);

            // display data
            const info = `<p>Puppy reached <strong>${percentOfAdultDogWeight}%</strong> of the adult dog weight.</p>
                <p>Resting energy requirement (RER) = ${rer} kcal.</p>
                <p>Daily energy requirement (DER) = <strong>${der} kcal.</strong><p/>`
            result.innerHTML = info;
        }
    });

    // validate inputs values
    function validateInput(value, element, errorMessage) {
          if (value !== "" && parseFloat(value) > 0) {
            setSuccessFor(element);
          } else {
            setErrorFor(element, errorMessage);
          }
    }

    // prepare data for validation
    function checkInputs(puppyValue, adultValue) {
          const inputs = [
            { value: puppyValue, element: puppy, errorMessage: 'Puppy weight must be a number greater than 0.' },
            { value: adultValue, element: adult, errorMessage: 'Adult dog weight must be a number greater than 0.' }
          ];

          inputs.forEach(input => {
            validateInput(input.value, input.element, input.errorMessage);
          });
    }

    function setErrorFor(input, message) {
        const inputParent = input.parentElement;
        // remove class "valid"
        inputParent.classList.remove("valid");

        // add class "invalid"
        inputParent.classList.add("invalid");

        // remove errorDiv if already exists
        const errorDiv = inputParent.parentNode.querySelector('.error_msg');
        if (errorDiv != null){
            errorDiv.remove();
        }

        // create error div
        const newDiv = document.createElement("div");
        inputParent.parentNode.insertBefore(newDiv, null);
        newDiv.classList.add("error_msg");
        newDiv.innerText = message;
    }

    function setSuccessFor(input) {
        const inputParent = input.parentElement;

        // remove class "invalid"
        inputParent.classList.remove("invalid");

        // add class "valid"
        inputParent.classList.add("valid");

        // remove errorDiv if already exists
        const errorDiv = inputParent.parentNode.querySelector('.error_msg');
        if (errorDiv != null){
            errorDiv.remove();
        }
    }
});
