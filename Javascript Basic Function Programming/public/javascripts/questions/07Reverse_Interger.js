/*
Specifications 
    Input 321
    Output 123
*/
// solution 1
var reverse = function (x) {
    //create xstring var to change x to string
    //create resutlt to return at the end (empty string)
    var xstring = x.toString();
    var result = '';
    //if (xstring[first])is '-' 
        //append '-' to result string
        //splice first character of string
    //else if (xstring[last] is 0)
        //splice last character of string 
    if (xstring[0] === '-'){
        result += '-';
        xstring = xstring.slice(1);
    } else if (xstring[xstring.length - 1] === '0'){
        xstring = xstring.slice(0, xstring.length-1)
    }

    for (var i = xstring.length -1; i >=0; i--){
        result += xstring[i];
    }
    //xstring that is perfectly ready to go through a for loop
    //reverse for loop throught x string
    return result;
};

console.log(reverse(123));
console.log(reverse(-456));
console.log(reverse(560));