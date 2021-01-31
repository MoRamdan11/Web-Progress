var male = prompt("Male Name");
var female = prompt("Female Name");
var loveScore = Math.random() * 100 + 1;
loveScore = Math.floor(loveScore)
console.log(loveScore);
if(loveScore > 70)
{
    alert(male + " Loves by\n" + loveScore + "%\n" + female + "\nyou are perfect couples");
}
else if(loveScore > 30 && loveScore <= 70)
{
    alert(male + " Loves by\n" + loveScore + "%\n" + female);
}
else if(loveScore <= 30)
{
    alert(male + " Loves by\n" + loveScore + "%\n" + female + "\nYou Hate Each other");
}