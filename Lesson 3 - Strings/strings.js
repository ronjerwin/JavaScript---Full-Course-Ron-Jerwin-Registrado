// Strings represent text in JavaScript. They are created by wrapping characters in either single quotes (' '), double quotes (" "), or backticks (` `).
// Example of creating strings using different types of quotes
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;

"Some" + "text" // "Sometext"
"Some" + " " + "text" // "Some text"
// Concatenation is the process of combining two or more strings together. In JavaScript, you can concatenate strings using the + operator.

typeof singleQuoteString // "string"
typeof doubleQuoteString // "string"
typeof backtickString // "string"
// The typeof operator is used to determine the type of a variable. In this case, all three variables are of type "string".

"Hello" + 3 // "Hello3"
"Hello" + true // "Hellotrue"
"Hello" + null // "Hellonull"
// It is called type coercion. In JavaScript, when you use the + operator with a string and a non-string value, JavaScript automatically converts the non-string value to a string before performing the concatenation. This is why we get "Hello3", "Hellotrue", and "Hellonull" when we concatenate "Hello" with 3, true, and null respectively.
// When you concatenate a string with a non-string value, JavaScript converts the non-string value to a string before concatenation. This is why we get "Hello3", "Hellotrue", and "Hellonull".

// THREE TYPES OF STRINGS
// 1. Single-quoted strings: Created using single quotes (' ').
let singleQuotedString = 'This is a single-quoted string.';

// 2. Double-quoted strings: Created using double quotes (" ").
let doubleQuotedString = "This is a double-quoted string.";

// 3. Template literals: Created using backticks (` `). They allow for multi-line strings and string interpolation (embedding expressions).
let name = "Alice";
let templateLiteralString = `Hello, ${name}! This is a template literal string.`;
// Template literals are particularly useful for creating strings that include variables or expressions, as they allow for easy embedding of these values without needing to concatenate strings manually.
// Interpolation is the process of embedding expressions within a string. In JavaScript, you can use template literals (backticks) to easily include variables and expressions within a string using the ${} syntax.


// Escaping characters in strings
// If you want to include a quote character within a string that uses the same type of quotes, you need to escape it using a backslash (\).
let escapedSingleQuote = 'It\'s a nice day!';
let escapedDoubleQuote = "She said, \"Hello!\"";

// \n is used to create a new line in a string.
let multiLineString = "This is line one.\nThis is line two.";
