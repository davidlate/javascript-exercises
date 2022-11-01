const reverseString = function(string) {

    let myArray = string.split("");
    let newArray = [];


    for (i in myArray){
        let newIndex = myArray.length - 1 - i;
        newArray[newIndex] = myArray[i];
    }

    return myArray.toString();
};

// Do not edit below this line
module.exports = reverseString;
