const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

date = new Date();
date.setDate(0);
console.log(date);
console.log(
    `Previous Month Is ${
        month[date.getMonth()]
    } And Last Day Is ${date.getDate()}`
);

// Sat Sep 30 2023 13:53:03 GMT+0300 (Eastern European Summer Time)
// Previous Month Is September And Last Day Is 30
