// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  
}

module.exports = palindrome;



// //****** MY Solution *********************
// function palindrome(str) {
//   let reversed = '';
//   let string = str;
  
//   for(let x of str) {
//     reversed = x + reversed;
//   }
  
//   if(reversed == string){
//     return true;
//   } else {
//     return false;
//   }
// }


// //****** First Solution *******************
// function palindrome(str) {   // Most easy solution... but interviewer might not be conviced...
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }

//****** Second Solution *********************


