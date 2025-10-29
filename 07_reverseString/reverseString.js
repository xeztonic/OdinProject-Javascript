const reverseString = function (mystring) {
    let reversed = "";
    let length = mystring.length;
    for (let i = length - 1; i >= 0; i--) {
        reversed += mystring[i];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
