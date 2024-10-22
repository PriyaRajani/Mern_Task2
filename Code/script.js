let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle("active", index === step);
    });
}

function nextStep() {
    if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
}

function validateStep(step) {
    const inputs = steps[step].querySelectorAll("input");
    let valid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            valid = false;
        }
    });
    return valid;
}

document.getElementById("multiStepForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
};
