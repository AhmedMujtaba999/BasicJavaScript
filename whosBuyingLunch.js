//Using random selection technique , let's select who will buy the lunch using JavaScript

var names=["mack","robin","suzy","marry","john"];
function whospaying(names){
    var numberofpeople= names.length;
     var randomsel=Math.floor(Math.random()*numberofpeople);
    var randomperson=names[randomsel];
    return randomperson+ " is going to buy lunch today!";
}
whospaying(names);
