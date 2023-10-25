let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
console.log(Array.from(new Set(myFriends)).sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
