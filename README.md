# PracticeAlgo

#### 1. String Reversal
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
 
#### 2. Palindromes
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

#### 3. Integer Reversal
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
OR using "Math.sign()" to get rid of conditional statement.
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
OR ONE LINE SOLUTION
```javascript
function reverseInt(n) {
    return (parseInt(n.toString().split('').reverse().join(''))) * Math.sign();
}
```


#### 4. MaxChars 
```javascript

```

#### 5. FizzBuzz
```javascript

```

#### 6. Array Chunking 
```javascript

```

#### 7. Anagrams 
```javascript

```

#### 8. Sentence Capitalization 
```javascript

```

####  9. Printing Steps
```javascript

```

