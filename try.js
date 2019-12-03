// # The Luhn Algorithm

// Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

// 1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.

// 2. Sum all digits in the altered number.

// 3. If that total is a multiple of 10, the number is valid.

// For example, given the card number 4408 0412 3456 7893:

// ```
// Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
// Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
// Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
// Step 3:  70 % 10 == 0
// ```;

// ```
// console.log(validCard(1234567890123456)); #should be false
// console.log(validCard(4408041234567893)); #should be true
// console.log(validCard(38520000023237)); #should be true
// console.log(validCard(4222222222222)); #should be true
// ```;

function validCard(num) {
   
    if (/[^0-9-\s]+/.test(num)) return false;
   
	let arr = (num + '')
		.split('')
		.reverse()
		.map(x => parseInt(x));
	let lastDigit = arr.splice(0, 1)[0];
	let sum = arr.reduce(
		(acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
		0
    );
    if(sum === 0){
        return false;
    } else {
	sum += lastDigit;
	return sum % 10 === 0;
}};

console.log('hello');
console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));
console.log(validCard(38520000023237));
console.log(validCard(4222222222222));

console.log("f-t-t-t ...")

console.log(validCard(4485275742308327));
console.log(validCard(6011329933655299));
console.log(validCard(123456789));
console.log(validCard(0000000000000000));

console.log('t-f-f-f ...');