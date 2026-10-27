document.getElementById('bmiForm').addEventListener('submit', function(e) {
    // to prevent form reload automatically
    e.preventDefault();

    // pick value from input
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    // Validation check
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        resultDiv.innerHTML = "please enter correct value";
        resultDiv.classList.remove('hidden');
        return;
    }

    // BMI Formula: weight (kg) / [height (m)]²
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    //according to BMI Weight Guide
    let status = "";
    if (bmi < 18.6) {
        status = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        status = "Normal Range";
    } else {
        status = "Overweight";
    }

    // show results smothly on hte screen
    resultDiv.innerHTML = `BMI: ${bmi} ${status}`;
    resultDiv.classList.remove('hidden');
});
