const reverseString = function(word) {
    let reverseWord = ""
    let wordArray = word.split("")
    for(let i =0; i<word.length;i++){
        reverseWord += wordArray.pop(-1)
    }
    return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
