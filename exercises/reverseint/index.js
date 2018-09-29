// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(str) {
    let reversed = '';
    for(let x of str) {
        reversed = x + reversed;
    }
    return reversed;
}


module.exports = reverseInt;


//*** First Solution *******************


