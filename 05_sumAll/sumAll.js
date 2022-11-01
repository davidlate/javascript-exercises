const sumAll = function(input1, input2) {

    if ((!(input1>=0))||(!(input2>=0))) return 'ERROR';
    if ((!(typeof(input1)=="number")) || (!(typeof(input2)=="number"))) return 'ERROR';

    let sum = 0;

    if (input1>input2) {
        let inputOne = input1;
        input1 = input2;
        input2 = inputOne;
    }

    for (let i=input1; i<=input2; i++){
        sum += i;

    }

    return sum;
}
// Do not edit below this line
module.exports = sumAll;
