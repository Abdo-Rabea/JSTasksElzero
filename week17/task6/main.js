// my solution assumes that the counting of numbers is <= the counting of chars
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let arr = [];
// counting the numbers
let n = 0;
chars.forEach(function (e) {
    if (isNaN(e)) {
        arr.push(e);
    } else {
        arr.unshift(e);
        n++;
    }
});
arr.copyWithin(0, n, 2 * n);
console.log(arr);
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// ["Z", "Y", "Z", "Y", "A", "D", "E"]
// ['Z', 'Y', 'Z', 'Y', 'A', 'D', 'E']
