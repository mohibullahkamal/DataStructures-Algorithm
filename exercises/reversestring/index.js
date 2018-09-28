// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    
    for(let x of str) {
        reversed = x + reversed;
    }
    return reversed;
}
module.exports = reverse;




// *************************************
// *************************************
// *************************************
// THIRD SOLUTION:
// *************************************




// *************************************
// *************************************
// *************************************
// SECOND SOLUTION:
// *************************************
// for loop, we are going to create an
// empty string called "reversed"..
//
// let a = '';
//
// for (let x of str) {
//   a = x + a;
// } return a;


// *************************************
// *************************************
// *************************************
// FIRST SOLUTION:
// *************************************
// // we break the string into array, then reverse it, then
// // remake the array into a string..
// // lets do it using for for loop/array helper because
// // interviewer might say
// // don't cheat by using the reverse() helper...

//  var arr = str.split('');   // when we pass ('') empty string... it takes the provided string and turns each character in the "str" to array... 
// arr.reverse();   //This will reverse all character in the array
// var reversed = arr.join('');   //This will join back all string
// return reversed;



// // lets write the above code in a shorter manner..
// // we dont really need temp var "arr"..

//  return str.split('').reverse().join('');
