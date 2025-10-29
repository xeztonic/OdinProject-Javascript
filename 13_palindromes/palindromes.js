const palindromes = function (theString) {
    let cleanString = theString.toLowerCase();
    cleanString = cleanString.replace(/[^a-z0-9]/g, "");
    cleanString = cleanString.replace(/\s/g, "");

    let reversedString = "";
    for (let i = cleanString.length - 1; i >= 0; i--)
        reversedString += cleanString[i];

    return reversedString === cleanString;

};

// Do not edit below this line
module.exports = palindromes;
