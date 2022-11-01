const removeFromArray = function(inArray, ...remove) {
    const removalIndices = [];


for (let j in remove){
        for (let i in inArray){
            if (inArray[i]===remove[j]) removalIndices.push(i);
        }
    }

    removalIndices.sort();
    removalIndices.reverse();


for (index of removalIndices){

        inArray.splice(index, 1);
}

return inArray;
}
// Do not edit below this line
module.exports = removeFromArray;
