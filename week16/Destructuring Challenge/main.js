// Destructuring

/*
    Destructuring
    - Challenge
*/

let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let title, age, available, lastSkill;
if (chosen == 1) {
    [
        {
            title,
            age,
            available,
            skills: [, lastSkill],
        },
    ] = myFriends;
} else if (chosen == 2) {
    [
        ,
        {
            title,
            age,
            available,
            skills: [, lastSkill],
        },
    ] = myFriends;
} else {
    [
        ,
        ,
        {
            title,
            age,
            available,
            skills: [, lastSkill],
        },
    ] = myFriends;
}

console.log(title, age, available ? "available" : "not available", lastSkill);
