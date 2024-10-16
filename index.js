/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string

console.log(tongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
//let p1Tail = part1.length
let part1Upper = part1[part1.length - 1].toUpperCase()
let part2Upper = part2[part2.length - 1].toUpperCase()
let part1Transformed = part1.slice(0, -1) + part1Upper;
let part2Transformed = part2.slice(0, -1) + part2Upper;
let result = part1Transformed + part2Transformed;

// Print the cameLtaiL-formatted string

console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipPercentage = 0.15;
let tipAmount = billTotal * tipPercentage;

// Print out the tipAmount

console.log(`$${tipAmount.toFixed(2)}`);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

randomNumber = Math.ceil(Math.random() * 10);

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; 
const guess1 = false;

const expression2 = a || b;
const guess2 = true;

const expression3 = !a && b; //not true (false) && false = false not true
const guess3 = true;

const expression4 = !(a && b);
const guess4 = true;

const expression5 = !a || !b;
const guess5 = true;

const expression6 = !(a || b);
const guess6 = false;

const expression7 = a && a;
const guess7 = true;

//Outcome 1
if (expression1 === guess1) {
    console.log("Correct!");
} else {
    console.log("Review expression #1.")
}

//Outcome 2
if (expression2 === guess2) {
    console.log("Correct!");
} else {
    console.log("Review expression #2.")
}

//Outcome 3
if (expression3 === guess3) {
    console.log("Correct!");
} else {
    console.log("Review expression #3.")
}

//Outcome 4
if (expression4 === guess4) {
    console.log("Correct!");
} else {
    console.log("Review expression #4.")
}

//Outcome 5
if (expression5 === guess5) {
    console.log("Correct!");
} else {
    console.log("Review expression #5.")
}

//Outcome 6
if (expression6 === guess6) {
    console.log("Correct!");
} else {
    console.log("Review expression #6.")
}

//Outcome 7
if (expression7 === guess7) {
    console.log("Correct!");
} else {
    console.log("Review expression #7.")
}

console.log("Expression #3 reviewed: Not true (false) && false = false");

