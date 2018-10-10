# PracticeAlgo

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

Hello -->
{
    H: 1,
    e: 1,
    l: 2,
    o: 1
}

## 5. FizzBuzz
```javascript

```

## 6. Array Chunking 
```javascript

```

## 7. Anagrams 
```javascript

```

## 8. Sentence Capitalization 
```javascript

```

##  9. Printing Steps
```javascript

```


