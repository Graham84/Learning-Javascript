let currentTempC = 22; // degrees Celsius

currentTempC = 22.5;

//let targetTempC;
// equivalent to "let targetTempC = undefined"

let targetTempC, room1 = "conference_room_a", room2 = "lobby";
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

let room1 = "conference_room_a"; // "conference_room_a" (in quotes) is
// a literal
let currentRoom = room1; // currentRoom now has the same value
// as room1 ("conference_room_a")

let currentRoom = conference_room_a; // produces an error; no identifier
// called conference_room_a exists

let str = "Hello";
str = "World";

let count = 10; // integer literal; count is still a double
const blue = 0x0000ff; // hexadecimal (hex ff = decimal 255)
const umask = 0o0022; // octal (octal 22 = decimal 18)
const roomTemp = 21.5; // decimal
const c = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19; // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; // "not a number"I

const small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE; // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE; // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity
const nan = Number.NaN; // the same as NaN
const inf = Number.POSITIVE_INFINITY; // the same as Infinity

// this will produce an error
const dialog = "Sam looked up and said "don't do that!" to Max.";

const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';

const s = "In JavaScript, use \\ as an escape character in strings.";


let currentTemp = 19.5;
// 00b0 is the Unicode code point for the "degree" symbol
const message = "The current temperature is " + currentTemp + "\u00b0C";

//ES6 String Template
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;

//multiline strings
const multiline = "line1\
line2";

const multiline = "line1\n\
line2";

const multiline = `line1
line2`;

const multiline = `line1
line2
line 3`;

const multiline = "line1\n" +
"line2\n" +
"line3";

const multiline = 'Current temperature:\n' +
`\t${currentTemp}\u00b0C\n` +
"Don't worry...the heat is on!";

//numbers as Strings
const result1 = 3 + '30'; // 3 is converted to a string; result is string '330'
const result2 = 3 * '30'; // '30' is converted to a number; result is numeric 90

//boolean
let heating = true;
let cooling = false;

//Symbols - unique identifier
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE // false: every symbol is unique

//null and undefined
let currentTemp; // implicit value of undefined
const targetTemp = null; // target temp null -- "not yet known"
currentTemp = 19.5; // currentTemp now has value
currentTemp = undefined; // currentTemp appears as if it had n

//objects
//empty object
const obj = {};

//properties
obj.size; // undefined
obj.color; // "yellow"

obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

const sam1 = {
  name: 'Sam',
  age: 4,
};
const sam2 = { name: 'Sam', age: 4 }; // declaration on one line
const sam3 = {
  name: 'Sam',
  classification: { // property values can
    kingdom: 'Anamalia', // be objects themselves
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
  },
};

sam3.classification.family; // "Felinae"
sam3["classification"].family; // "Felinae"
sam3.classification["family"]; // "Felinae"
sam3["classification"]["family"]; // "Felinae"

sam3.speak = function() { return "Meow!"; };
sam3.speak(); // "Meow!"

delete sam3.classification; // the whole classification tree is removed
delete sam3.speak; // the speak function is removed

const s = "hello";
s.toUpperCase(); // "HELLO"

const s = "hello";
s.rating = 3; // no error...success?
s.rating; // undefined

//arrays
const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types
const a3 = [ // array on multiple lines
  "What the hammer? What the chain?",
  "In what furnace was thy brain?",
  "What the anvil? What dread grasp",
  "Dare its deadly terrors clasp?",
];
const a4 = [ // array containing objects
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];
const a5 = [ // array containing arrays
  [1, 3, 5],
  [2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length; // 3
// get the first element:
arr[0]; // 'a'
// the index of the last element in arr is arr.length-1:
arr[arr.length - 1]; // 'c'

const arr = [1, 2, 'c', 4, 5];
arr[2] = 3; // arr is now [1, 2, 3, 4, 5]

//trailing commas
const arr = [
  "One",
  "Two",
  "Three",
];
const o = {
  one: 1,
  two: 2,
  three: 3,
};

//dates
const now = new Date();
now; // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)

const halloween = new Date(2016, 9, 31); // note that months are
// zero-based: 9=October

const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0
