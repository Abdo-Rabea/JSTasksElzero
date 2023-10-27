class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car Is Running Now`;
    }
    stop() {
        return `Car Is Stopped`;
    }
}

// Needed Output
one = new Car("MG", 2022, 40000);
two = new Car("mars", 2023, 50000);
three = new Car("BMW", 2023, 60000);

console.log(
    `Car One Name is ${one.n} And Model Is ${one.m} And Price Is ${one.p}`
);
console.log(one.run());
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//  Car One Name is MG And Model Is 2022 And Price Is 40000
// ("Car Is Running Now");
