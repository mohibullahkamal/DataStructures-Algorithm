# **PracticeAlgo**
### I practice Data Structures and Algorithms(in ES5/ES6) everyday to keep my logical coding skills sound. I use Jest(JS testing) to test my code for bugs, and always seek to have more than one approach to given problem.

*`Full Disclosure: I follow the Awesome Udemy course by Stephen Grider (The Coding Interview Bootcamp: Algorithms/Data Structures)`*

---

## 7. Anagrams 
```javascript

```

## 6. Array Chunking 
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
For example:
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

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

Using ".slice()" it a smart move...
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
 ```javascript
function reverse(str) {
 let reverved = '';
 for(let x of str) {
  reversed = x + reversed;
 }
 return reversed;
} 
 ```
OR ES5 version:
```javascript
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
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
