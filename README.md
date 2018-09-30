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
 

