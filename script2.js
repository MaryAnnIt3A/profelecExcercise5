
let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");

let fullName = firstName + " " + lastName;

console.log(`Your first name is ${firstName.toUpperCase()}. Your last name is ${lastName.toLowerCase()} and your full name is ${fullName}`);
console.log(`Your initials are ${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`);

if (firstName.includes("o") && lastName.includes("a")) {
    console.log('Your first name has the letter "o" and your last name has the letter "a"');
} else {
    console.log('Your first name does not have the letter "o" and your last name does not have the letter "a"');
}

let sentence = "Three Mississippi's is the standard starting time.";

let wordSplit = sentence.split(" ");
console.log(wordSplit);

let substring1 = sentence.substring(0, 4);
console.log(substring1);

let substring2 = sentence.substring(5, 8);
console.log(substring2);
