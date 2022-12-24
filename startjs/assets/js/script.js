function calculateBMI() {
  // Read the values of the weight and height inputs
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  // Calculate the BMI
  var bmi = weight / (height * height);

  // Determine the classification based on the BMI
  var classification;
  if (bmi <= 18.5) {
    classification = "😨 Underweight";
  } else if (bmi <= 25) {
    classification = "😊 Normal";
  } else if (bmi >= 25) {
    classification = "😨 Overweight";
  } else {
    classification = "😢 Invalid Input";
  }

  // Display the result
  document.getElementById("result").innerHTML =
    "Your BMI is " + bmi + " (" + classification + ")";
}
