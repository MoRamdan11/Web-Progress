function bmiCalculator(weight, height)
{
    var BMI = weight / (Math.pow(height, 2));
    return Math.round(BMI);
}

var BMI = bmiCalculator(65, 1.8);
console.log("Your BMI is " + BMI);