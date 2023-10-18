// Function Arrow Challenges

// Challenge 1
let names = function (...param) {
    return `String [${param.join("], [")}] => Done !`;
};
let names1 = (...param) => `String [${param.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));

// Challenge 2
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + +nums;

console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80
