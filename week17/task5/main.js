let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log(new Array(...theName));
console.log([...new Set(theName)]);
console.log(theName.split(""));
// new
console.log(Object.values(theName));
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
// ['E', 'l', 'z', 'e', 'r', 'o']
