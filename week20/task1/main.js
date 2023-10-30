birthDate = new Date("2001-5-14");
diff = new Date() - birthDate;
console.log(diff / 1000 + " Seconds"); // 708874848.843
console.log(diff / 1000 / 60 + " Minutes"); // 11814582
console.log(diff / 1000 / 60 / 60 + " Hours"); // 196909.7
console.log(diff / 1000 / 60 / 60 / 24 + " Days"); // 8204.57
console.log(diff / 1000 / 60 / 60 / 24 / 30 + " Months"); // 273.48
console.log(diff / 1000 / 60 / 60 / 24 / 30 / 12 + " Years"); // 22
