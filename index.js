document.querySelector("button").addEventListener("click", bmiCalculator);

function bmiCalculator (weight, height) {

  var weight = document.getElementById("weight").value;

  var height = document.getElementById("height").value;

  var bmi = Math.round(weight / Math.pow(height, 2));

  var bmi1 = "Your BMI is " + bmi + ", so you are overweight.";

  var bmi2 = "Your BMI is " + bmi + ", so you have a normal weight."

  var bmi3 = "Your BMI is " + bmi + ", so you are underweight."

  if (bmi > 24.9) {

    document.querySelector("p").innerHTML = bmi1;

  }

  if (bmi > 18.5 && bmi < 70) {

    document.querySelector("p").innerHTML = bmi2;

  }

  if (bmi < 18.5) {

    document.querySelector("p").innerHTML = bmi3;
  }

}








// functia asta functioneaza daca scriu datele in consola dar apoi introduc eu manual urmatoarele

//

// bmiCalculator(weight, height);
