// Numbers and Math

// JavaScript has only one type of number. Numbers can be written with or without decimals: 
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals 

// Operations
// You can use JavaScript to perform mathematical operations like addition, subtraction, multiplication, and division:
let a = 10 + 5;   // Addition
let b = 20 - 5;   // Subtraction
let c = 2 * 3;    // Multiplication
let d = 10 / 2;   // Division
let e = 2 % 2;    // Modulus (remainder)
let f = 2 ** 3;   // Exponentiation (2 to the power of 3)

// Oerator Precedence
// JavaScript follows operator precedence, which means that certain operations are performed before others. For example:
let result = 2 + 3 * 4; // Multiplication is performed before addition, so the result is 14
let result2 = (2 + 3) * 4; // Parentheses change the order of operations, so the result is 20

// You can also use the Math object to perform more complex mathematical operations, such as finding the square root, rounding numbers, or generating random numbers:

// IMPORTANT: When calculating money, working with float are sometimes inaccurate. For example, 0.1 + 0.2 does not equal 0.3, but instead equals 0.30000000000000004. To avoid this, you can use the toFixed() method to round the result to a specific number of decimal places:
let money = 20.95 + 7.99 // This will give you 28.940000000000005
// To fix this manually, you can remove the decimal places, perform the calculation, and devide the result by 100:
let money2 = (2095 + 799) / 100; // This will give you 28.94, which is the correct result. Alternatively, you can use the toFixed() method to round the result to 2 decimal places:
let money3 = (20.95 + 7.99).toFixed(2); // This will give you "28.94", which is the correct result as a string. You can convert it back to a number using parseFloat():
let money4 = Math.round((2095 + 799) * 0.1) / 100; // This will give you 2.89, which is the correct result. The Math.round() method rounds the result to the nearest integer, and multiplying by 0.1 before rounding helps to avoid floating-point precision issues.