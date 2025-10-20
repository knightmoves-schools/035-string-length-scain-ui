var quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below
var quoteLength = quote.length;
var twentySecondLetter = quote[21];
// create a string variable named output that contains the quoteLength
var output = `[${twentySecondLetter}] ${quoteLength}`;
// modify output to also contain the twentySecondLetter between two brackets ([])
// assign the innerHTML of the HTML element with the id result to the output
document.getElementById('result').innerHTML = output;