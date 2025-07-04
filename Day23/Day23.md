# 🦁 Sheryians Coding School Cohort – Day23 Learnings

## 📚 Table of Contents

### 🔁 Loops (5 Questions)

11. [Print numbers from 10 to 1 using a for loop](#11-print-numbers-from-10-to-1-using-a-for-loop)
12. [Print multiples of 3 from 3 to 30 using while loop](#12-print-multiples-of-3-from-3-to-30-using-while-loop)
13. [Sum of numbers from 1 to 100 using loop](#13-sum-of-numbers-from-1-to-100-using-loop)
14. [Nested loop star pattern](#14-nested-loop-star-pattern)
15. [Iterate over string using for...of loop](#15-iterate-over-string-using-forof-loop)

### 📦 Arrays (5 Questions)

16. [Remove duplicate values from an array](#16-remove-duplicate-values-from-an-array)
17. [Find the second largest number in an array](#17-find-the-second-largest-number-in-an-array)
18. [Sort an array in descending order](#18-sort-an-array-in-descending-order)
19. [Reverse an array without using `.reverse()`](#19-reverse-an-array-without-using-reverse)
20. [Find the most frequent element in an array](#20-find-the-most-frequent-element-in-an-array)

# 🧑‍💻 Resource Video link : 
01: https://youtu.be/a-wVHL0lpb0?si=WEa1ZAUhAlWzmxM-      
02: https://youtu.be/kkOuRJ69BRY?si=wNurB-3gtlLdEAz2      
03: https://youtu.be/htznIeWKgg8?si=1Gj6S3plYgmNXHNf  
04: https://youtu.be/EgDmCbhmstU?si=lTqL1OSD80TWKH8l     
05: https://youtu.be/ks4MFTHLfyg?si=f2HVsPdksedGo4Eq

## 🔁 Loops (5 Questions)

### 11. Print numbers from 10 to 1 using a for loop

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

---

### 12. Print multiples of 3 from 3 to 30 using while loop

```js
let num = 3;

while (num <= 30) {
  console.log(num);
  num += 3;
}
```

---

### 13. Sum of numbers from 1 to 100 using loop

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum:", sum); // Output: 5050
```

---

### 14. Nested loop star pattern

```js
for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}
```

⭐ Output:

```
*
**
***
****
*****
```

---

### 15. Iterate over string using for...of loop

```js
let str = "JavaScript";

for (let char of str) {
  console.log(char);
}
```

---

## 📦 Arrays (5 Questions)

### 16. Remove duplicate values from an array

```js
let arr = [1, 2, 3, 2, 4, 3, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

---

### 17. Find the second largest number in an array

```js
function secondLargest(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted.length > 1 ? sorted[1] : null;
}

console.log(secondLargest([10, 20, 5, 30, 30])); // Output: 20
```

---

### 18. Sort an array in descending order

```js
let numbers = [5, 2, 9, 1, 5, 6];

numbers.sort((a, b) => b - a);

console.log(numbers); // [9, 6, 5, 5, 2, 1]
```

---

### 19. Reverse an array without using `.reverse()`

```js
function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```

---

### 20. Find the most frequent element in an array

```js
function mostFrequent(arr) {
  let freqMap = {};
  let maxFreq = 0, mostFrequentNum = null;

  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;

    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
      mostFrequentNum = num;
    }
  }

  return mostFrequentNum;
}

console.log(mostFrequent([1, 3, 3, 2, 3, 2, 2, 2, 2])); // Output: 2
```
---


## Created with ❤️ by Shivansh 
