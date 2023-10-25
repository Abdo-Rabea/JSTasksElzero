let theNumber = 100020003000;

res = +Array.from(new Set([...theNumber.toString()]))
    .sort()
    .join("");
console.log(res);
