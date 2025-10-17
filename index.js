var quote = "...ask not what your country can do for you — ask what you can do for your country.";

//Add code below
var quoteLength = quote.Length;
var twentySecondLetter = quote[21];
var output = `[${twentySecondLetter}] ${quoteLength}`;

document.getElementById("result").innerHTML = output;