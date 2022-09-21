
// Our solution, could have been done better
// const reverseString = function(word) {
//     let reverseWord = ""
//     let wordArray = word.split("")
//     for(let i =0; i<word.length;i++){
//         reverseWord += wordArray.pop(-1)
//     }
//     return reverseWord
// };



// Their solution was much cleaner then mine!
const reverseString = function(string) {
    return string.split('').reverse().join('');
};
// Do not edit below this line
module.exports = reverseString;
