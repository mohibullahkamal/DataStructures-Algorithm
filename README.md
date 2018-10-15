# **PracticeAlgo**
#### I practice Data Structures and Algorithms(in ES5/ES6) everyday to keep my logical coding skills sound. I use Jest(JS testing) to test my code for bugs, and always seek to have more than one approach to given problem.

---





## 7. Anagrams
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

<pre>
Examples:
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
</pre>

```javascript

```


## 6. Array Chunking 
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

<pre>
Examples:
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
</pre>

First solution:
```javascript
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
```

Using ".slice()" it's a smart move...
Second solution:
```javascript
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


## 5. FizzBuzz
Prints numbers 1 to n, where prints "fizz" for multiples of three; prints "buzz" when multiples of five; and "fizzbuzz" when multiples of both 3 and 5. 

<pre>
For example: 
fizzBuzz(5);
1
2   
fizz   
4
buzz
</pre>

```javascript

```


## 4. MaxChars

```javascript
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


## 3. Integer Reversal

```javascript
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
function reverseInt(n) {
    return (parseInt(n.toString().split('').reverse().join(''))) * Math.sign();
}
```


## 2. Palindromes
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

<pre>
Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
</pre>

```javascript
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
```


## 1. String Reversal
Given a string, return a new string with the reversed
order of characters

<pre>
Examples:
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
</pre>

 ```javascript
// *************************************
// THIRD SOLUTION:
// *************************************
// Below solution uses ES5 syntax... "reduce()" helper function was introduced in ES5.1 to reduce all different values in an ARRAY and condense them all to one singular value... "reduce()" takes two separate arguments... the first one is gonna be an arrow function; second one is gonna be a starting argument...

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}


// *************************************
// SECOND SOLUTION:
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
// FIRST SOLUTION:
// *************************************
// we break the string into array, then reverse it, then
// remake the array into a string..
// lets do it using for for loop/array helper because
// interviewer might say
// don't cheat by using the reverse() helper...

function reverse(str) {
    var arr = str.split('');   // when we pass ('') empty string... it takes the provided string and turns each character in the "str" to array... 
    arr.reverse();   //This will reverse all character in the array
    var reversed = arr.join('');   //This will join back all string
    return reversed;
}

// lets write the above code in a shorter manner..
// we dont really need temp var "arr"..

 return str.split('').reverse().join('');

```
 



## 8. Sentence Capitalization 
```javascript

```

##  9. Printing Steps
```javascript

```

## 10. Two sided steps = Pyramids
```javascript

```

## 11. Find the Vowels
```javascript

```

## 12. Enter the Matrix Spiral
```javascript

```

## 13. Runtime Complexity
```javascript

```

## 14. Fibonacci - Runtime Complexity in practice
```javascript

```
---

*`Full Disclosure: I follow the Awesome Udemy course by Stephen Grider (The Coding Interview Bootcamp: Algorithms/Data Structures). He is a great teacher and I learned a lot from his course.`*


