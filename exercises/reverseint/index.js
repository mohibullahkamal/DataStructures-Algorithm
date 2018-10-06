// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return (
        parseInt(
            n
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(n)
    );
}

module.exports = reverseInt;




// //*** First Solution *******************
// 3 tricks --> 1. parseInt();   // parseInt takes a string and returns a number
//              2. toString(); 
//              3. math.sign()

// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');

//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// }


// //*** Second Solution ********************
// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');

//     return parseInt(reversed) * Math.sign(n);
// }


// //*** ONE LINE SOLUTION ********************
// function reverseInt(n) {
//     return (parseInt(n.toString().split('').reverse().join(''))) * Math.sign();
// }

