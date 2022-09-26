//Random Number Generator
//Picks one quote randomly, brings you to next 
//Quote, character

var quoteArray = [
    ` “Not all those who wander are lost.” — Bilbo Baggins`,
    ` “All’s well that ends better.” — Hamfast Gamgee`,
    ` “Deeds will not be less valiant because they are unpraised." — Aragorn`,
    ` “Even the smallest person can change the course of the future.” — Galadriel`,
    ` “You step into the Road, and if you don’t keep your feet, there is no knowing where you might be swept off to.”― J.R.R. Tolkien`]

var arrayLength = quoteArray.length

function generateQuote() {
    var randomNum = Math.floor(Math.random()*arrayLength);
    document.getElementById('quote').innerHTML= quoteArray[randomNum];
}
