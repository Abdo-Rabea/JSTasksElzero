let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
// mp = new Map();
// keys = Object.keys(myInfo);
// keys.forEach(function (k) {
//     mp.set(k, myInfo[k]);
// });
mp = new Map(Object.entries(myInfo));
console.log(mp);
console.log(mp.size);
console.log(mp.has("role"));
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   3
// true;
// true
