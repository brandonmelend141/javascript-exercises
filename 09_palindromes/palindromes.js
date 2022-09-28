const palindromes = function (word) {
    // const wordArray = word.split('');
    // const reverseWord = wordArray.reverse().join('');
    // console.log(reverseWord);
    // return reverseWord === word

    // solution from branch, learn REGEX as a goal 
    processedString = word.toLowerCase().replace(/[^a-z]/g, "");
    console.log(processedString)
    return (
        processedString
        .split("")
        .reverse()
        .join("") == processedString
    );
};

// Do not edit below this line
module.exports = palindromes;
