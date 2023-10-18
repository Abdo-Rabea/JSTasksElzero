r = prompt("Print Number From – To", "5-20");
arr = r.split("-");
let i;
for (i = Math.min(...arr); i <= Math.max(...arr); i++) {
    console.log(i);
}
