const repeatString = function(string, num) {
    
    if (!(num >=0)) return 'ERROR';

    let stringConcat = '';

    for (let i=0; i<num; i++){
        stringConcat += string;
    }
    return stringConcat;

};




// Do not edit below this line
module.exports = repeatString;
