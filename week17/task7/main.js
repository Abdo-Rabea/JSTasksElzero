let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let res1 = [...numsOne, ...numsTwo];
let res2 = numsOne.concat(numsTwo);
let res3 = [...numsOne];
res3.push(...numsTwo);
let res4 = [numsOne, numsTwo].flat();
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// Needed Output
// [1, 2, 3, 4, 5, 6];
