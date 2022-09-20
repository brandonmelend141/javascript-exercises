const removeFromArray = function(currentArray,...itemsToRemove) {

    for(let i = 0; i<itemsToRemove.length;i++){
        // console.log(i)
        for(let j=0;j<currentArray.length;j++){
            // console.log(i,j)
            if (itemsToRemove[i]===currentArray[j]){
                currentArray.splice(j,1)
                // console.log(currentArray)
            }
        }
    }
    return currentArray

};

// Do not edit below this line
module.exports = removeFromArray;
