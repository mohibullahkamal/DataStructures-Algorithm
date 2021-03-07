# **PracticeAlgo**
#### I practice Data Structures and Algorithms in Javascript(ES5/ES6) regularly, to keep my logical coding skills sound. I use Jest(JS testing) to test my code for bugs, and always seek to have more than one approach to given problem.

---
## *12. Enter the Matrix Spiral*
Write a function that accepts an integer N
and returns a NxN spiral matrix.

<pre>
--- Examples
  matrix(2)
    [[undefined, undefined],
    [undefined, undefined]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
  matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
</pre>













# **PracticeAlgo**
#### I practice Data Structures and Algorithms in Javascript(ES5/ES6) regularly, to keep my logical coding skills sound. I use Jest(JS testing) to test my code for bugs, and always seek to have more than one approach to given problem.

---
## *12. Enter the Matrix Spiral*
Write a function that accepts an integer N
and returns a NxN spiral matrix.

<pre>
--- Examples
  matrix(2)
    [[undefined, undefined],
    [undefined, undefined]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
  matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
</pre>
    
```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function matrix(n) {
  const results = [];   //empty array created for results to be be filled once the below while loop condition is satisfied

  for (let i = 0; i < n; i++) {   //loops until "n" user entered value is reached
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {   //while to check condition whether the counter has reached end point
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
```
---
## *11. Find the Vowels*
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.

<pre>
--- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
</pre>

```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {   //short way of writing for loop
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

// ***********************************
// ****** Second Solution ************
// ***********************************
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```
---
## *10. Two sided steps = Pyramids*
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides

<pre>
--- Examples
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####'
</pre>

```javascript
// ***********************************
// ****** First Solution *************
// ***********************************

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);   //Math floor to find the lowest value of a selected number

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

// ***********************************
// ****** Second Solution ************
// ***********************************
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
```
---
##  *9. Printing Steps*
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

<pre>
--- Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'
</pre>      
      
```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

// ***********************************
// ****** Second Solution ************
// ***********************************
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
```
---
## *8. Sentence Capitalization*
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.

<pre>
--- Examples
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
</pre>
  
```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function capitalize(str) {
  let result = str[0].toUpperCase();       // always start with capitalizing first letter in a sentence

  for (let i = 1; i < str.length; i++) {   // loop through given string
    if (str[i - 1] === ' ') {              // If blank space found, then increase array pointer by one and capitalize it
      result += str[i].toUpperCase();
    } else {
      result += str[i];                    // else keep moving forward in array
    }
  }

  return result;
}

// ***********************************
// ****** Second Solution ************
// ***********************************
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
```

---
## *7. Anagrams*
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

<pre>
--- Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
</pre>

```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// ***********************************
// ****** Second Solution ************
// ***********************************
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
```

---
## *6. Array Chunking*
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

<pre>
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
</pre>

```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
function chunk(array, size) {
    const chunked = [];
    
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
   return chunked; 
}

// ***********************************
// ****** Second Solution ************
// ***********************************
// Using ".slice()" it's a smart move...
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
```

---
## *5. FizzBuzz*
Prints numbers 1 to n, where prints "fizz" for multiples of three; prints "buzz" when multiples of five; and "fizzbuzz" when multiples of both 3 and 5. 

<pre>
--- Examples
fizzBuzz(5);
1
2   
fizz   
4
buzz
</pre>

```javascript
//***********************************
//****** First Solution *************
//***********************************
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
```

---
## *4. MaxChars*
Given a string, return the character that is most
commonly used in the string.

<pre>
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
</pre>

```javascript
//***********************************
//****** First Solution *************
//***********************************
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    
    
    for (let char of str) {
        if (charMap[char]++) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char; 
        }
    }
    return maxChar;
}
```
Other common questions could be: 
- What is the most common character in the string?
- Does string A have the same characters as string B (is it an anagram)?
- Does the given string have any repeated characters in it?

<pre>
eg: "Hello"
{
    H: 1,
    e: 1,
    l: 2,
    o: 1
}
</pre>

---
## *3. Integer Reversal*
Given an integer, return an integer that is the reverse
ordering of numbers.

<pre>
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
</pre>

```javascript
// ***********************************
// ****** First Solution *************
// ***********************************
// 3 tricks --> 1. parseInt();   // parseInt takes a string and returns a number
//              2. toString(); 
//              3. math.sign()

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}
```
OR using "Math.sign()" instead of conditional statement
```javascript
// ***********************************
// ****** Second Solution *************
// ***********************************
function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n);
}
```
OR one line solution...
```javascript
// ***********************************
// ****** One line Solution **********
// ***********************************
function reverseInt(n) {
    return (parseInt(n.toString().split('').reverse().join(''))) * Math.sign();
}
```

---
## *2. Palindromes*
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

<pre>
--- Examples
  palindrome("abba") === true
  palindrome("abcdefg") === false
</pre>

```javascript
// ***********************************
// ****** MY Solution ****************
// ***********************************
function palindrome(str) {
  let reversed = '';
  let string = str;
  
  for(let x of str) {
    reversed = x + reversed;
  }
  
  if(reversed == string){
    return true;
  } else {
    return false;
  }
}
// ***********************************
// ****** First Solution *************
// ***********************************
function palindrome(str) {   // Most easy solution... but interviewer might not be conviced...
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return str === reversed;
}
```

---
## *1. String Reversal*
Given a string, return a new string with the reversed
order of characters

<pre>
--- Examples
  reverse('apple') === 'elppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
</pre>

```javascript
// *************************************
// ***** FIRST SOLUTION ****************
// *************************************
// we break the string into array, then reverse it, then
// remake the array into a string..
// lets do it using for for loop/array helper because
// interviewer might say
// don't cheat by using the reverse() helper...

function reverse(str) {
    var arr = str.split('');   // when we pass ('') empty string... it takes the provided string 
                               // and turns each character in the "str" to array... 
    arr.reverse();   //This will reverse all character in the array
    var reversed = arr.join('');   //This will join back all string
    return reversed;
}

// lets write the above code in a shorter manner..
// we dont really need temp var "arr"..
return str.split('').reverse().join('');
 
// *************************************
// ******** SECOND SOLUTION ************
// *************************************
// for loop, we are going to create an
// empty string called "reversed".. uses "for of" loop -> style, instead of "for()" loop -> style

function reverse(str) {
    let a = '';
    
    for (let x of str) {
      a = x + a;
    } return a;
}

// *************************************
// ******** THIRD SOLUTION *************
// *************************************
// Below solution uses ES5 syntax... "reduce()" helper function was introduced in ES5.1 to reduce 
// all different values in an ARRAY and condense them all to one singular value... "reduce()" takes 
// two separate arguments... the first one is gonna be an arrow function; second one is gonna be a 
// starting argument...

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

```
---



*`Note: I follow the awesome course by Stephen Grider (The Coding Interview Bootcamp: Algorithms/Data Structures). He is a great teacher and I learned a lot from his course.`*


