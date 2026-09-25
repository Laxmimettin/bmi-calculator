
const bmiForm = document.getElementById("bmiForm");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

const result = document.getElementById("result");
const marker = document.getElementById("marker");


// BMI calculation
function calculateBMI(height, weight) {

    // Convert height from centimeters to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}


// Determine BMI category
function getBMICategory(bmi) {

    if (bmi < 18.5) {
        return {
            name: "Underweight",
            message: "Your BMI is below the normal range."
        };
    } 
    
    else if (bmi < 25) {
        return {
            name: "Normal Weight",
            message: "Your BMI is within the normal range."
        };
    } 
    
    else if (bmi < 30) {
        return {
            name: "Overweight",
            message: "Your BMI is above the normal range."
        };
    } 
    
    else {
        return {
            name: "Obese",
            message: "Your BMI is in the obese range."
        };
    }
}


// Update scale marker
function updateMarker(bmi) {

    let position;

    if (bmi < 18.5) {
        position = Math.max(2, (bmi / 18.5) * 35);
    } 
    
    else if (bmi < 25) {
        position = 35 + ((bmi - 18.5) / 6.5) * 30;
    } 
    
    else if (bmi < 30) {
        position = 65 + ((bmi - 25) / 5) * 15;
    } 
    
    else {
        position = 80 + Math.min((bmi - 30) / 20, 1) * 18;
    }

    marker.style.left = `${position}%`;
}


// Form submission
bmiForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);


    // Validation
    if (
        heightInput.value.trim() === "" ||
        weightInput.value.trim() === ""
    ) {
        errorMessage.textContent = "Please enter both height and weight.";
        return;
    }


    if (
        isNaN(height) ||
        isNaN(weight) ||
        height <= 0 ||
        weight <= 0
    ) {
        errorMessage.textContent =
            "Please enter valid positive values.";
        return;
    }


    // Optional realistic validation
    if (height < 50 || height > 250) {
        errorMessage.textContent =
            "Please enter a height between 50 cm and 250 cm.";
        return;
    }


    if (weight < 2 || weight > 300) {
        errorMessage.textContent =
            "Please enter a weight between 2 kg and 300 kg.";
        return;
    }


    // Clear error
    errorMessage.textContent = "";


    // Calculate BMI
    const bmi = calculateBMI(height, weight);

    // Round to two decimal places
    const roundedBMI = bmi.toFixed(2);

    // Get category
    const bmiCategory = getBMICategory(bmi);


    // Display result
    bmiValue.textContent = roundedBMI;
    category.textContent = bmiCategory.name;
    message.textContent = bmiCategory.message;


    // Update scale
    updateMarker(bmi);


    // Add animation
    result.classList.remove("show");

    void result.offsetWidth;

    result.classList.add("show");

});

