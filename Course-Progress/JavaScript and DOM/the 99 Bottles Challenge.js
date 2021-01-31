function beer(numberOfBottles)
{
    while(numberOfBottles > 0)
    {
        console.log(" " + numberOfBottles + " bottles of beer on the wall " + 
        numberOfBottles + " bottles of beer");
        numberOfBottles--;
        console.log("Take one down and pass it around, " + numberOfBottles + " bottles of beer on the wall");
    }
}