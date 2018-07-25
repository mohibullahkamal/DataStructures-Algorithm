// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let a = '';

  for (let x of str) {
    a = x + a;
    debugger;
  }return a;
}

reverse('dcba');
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
// we break the string into array, then reverse it, then
// remake the array into a string..
// lets do it using for for loop/array helper because
// interviewer might say
// don't cheat by using the reverse() helper...

// const arr = str.split('');
// arr.reverse();
// return arr.join('');

// lets write the above code in a shorter manner..
// we dont really need temp var "arr"..

// return str.split('').reverse().join('');
