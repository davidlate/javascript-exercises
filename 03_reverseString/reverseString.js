const reverseString = function(string) {

    let myArray = string.split("");
    let newArray = [];


    for (i in myArray){
        let newIndex = myArray.length - 1 - i;
        newArray[newIndex] = myArray[i];
    }

    newArray = newArray.toString().replace(/,/g, "");

    return newArray;
};

// Do not edit below this line
module.exports = reverseString;
