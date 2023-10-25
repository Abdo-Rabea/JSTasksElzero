setOfNumbers = new Set([10]);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
// you can do it with array.from
console.log([...setOfNumbers][setOfNumbers.size - 1]);

// Needed Output
// Set(3) {10, 20, 2}
// 2
