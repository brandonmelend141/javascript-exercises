const sumAll = function(num1,num2) {
    let total = 0;
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || num1<0 || num2<0){
        return "ERROR"
    }
    let min ,max = 0

    if(num1<num2){
        min = num1
        max = num2
    }else if(num1>num2){
        min=num2
        max=num1
    }

    while(min<=max){
        total+=min
        min++
    }
    return total;
}
// Do not edit below this line
module.exports = sumAll;
