function calcAge(age)
{
    var years = 90 - age;
    var days = years * 365;
    var weeks = years * 52;
    var months = years * 12;
    console.log("you have " + years + " years, " + months + " months, " + weeks + " weeks, " + days + " days.");
}

calcAge(50);
