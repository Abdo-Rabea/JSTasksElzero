const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};
// solution
Object.defineProperties(myObj, {
    score: {
        writable: false,
    },
    id: {
        enumerable: false,
    },
});
delete myObj.country;
// end of solution
myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
console.log(Object.getOwnPropertyDescriptors(myObj));
// Needed Output

//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
