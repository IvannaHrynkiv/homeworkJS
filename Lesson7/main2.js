class Car {

    constructor(model, producer, year, maxiSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxiSpeed = maxiSpeed;
        this.engine = engine;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxiSpeed} на годину`);
    };
    info  (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (speedToAdd){
        if (speedToAdd > 0) this.maxiSpeed = this.maxiSpeed + speedToAdd;
    };
    changeYear  (newYear){
        if (newYear > 0) this.year = newYear;
    };
    addDriver (driver){
        if (driver) this.driver = driver;
    };
}
const car = new Car('Mercedes-Benz', 'Germany', 2025, 270, 5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2024);
car.addDriver({});
console.log(car);


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cilderellas = [
    new Cinderella('maria', 25, 37),
    new Cinderella('sonya', 28, 38),
    new Cinderella('kate', 21, 39),
    new Cinderella('maria', 25, 40),
    new Cinderella('sofia', 29, 35),
    new Cinderella('maria', 20, 36),
    new Cinderella('ola', 25, 32),
    new Cinderella('maria', 27, 34),
    new Cinderella('yana', 25, 35),
    new Cinderella('maria', 26, 33),
]

const prince = new Prince ('Oleh', 33, 37);

for (const cinderella of cilderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
}

/*const cinderellaMain = cilderellas.find(cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;*/
console.log(prince.wife);

Array.prototype.myForEach = function (callback){
const youeArray = this;
for (const item of youeArray){
callback(item);
}
};
[11,22,33].myForEach ((x) => console.log(x));

Array.prototype.myFilter = function (predicate){
const arr = [];
for (const item of this){
if (predicate(item)){
arr.push(item);
}
}
return arr;
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result =users.myFilter((user) => user.status);
console.log(result);