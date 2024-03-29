[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
---
Title: Luhn Algorithm <br>
Type: Coding Challenge <br>
Duration: "0:45"<br>
Creator: Thom Page <br>
Competencies: Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: JavaScript or Ruby Fundamentals<br>

---

# The Luhn Algorithm

Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.

2. Sum all digits in the altered number.

3. If that total is a multiple of 10, the number is valid.

For example, given the card number 4408 0412 3456 7893:

```
Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```

[Luhn Algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm)

### Code

Write a function `validCard` that takes a number as an argument and returns true for a valid number and false for an invalid number.

```
console.log(validCard(1234567890123456)); #should be false
console.log(validCard(4408041234567893)); #should be true
console.log(validCard(38520000023237)); #should be true
console.log(validCard(4222222222222)); #should be true
```
