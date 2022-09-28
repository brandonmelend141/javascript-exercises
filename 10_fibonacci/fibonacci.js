const fibonacci = function(number) {
    let parseNum = parseInt(number)
    if(parseNum<0){
        return "OOPS";
    }
    if(parseNum===0) return 0;
    
    let fibNum = Math.round(((1.618034)**(parseNum) - (1 - 1.618034)** (parseNum)) / Math.sqrt(5))
  
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
