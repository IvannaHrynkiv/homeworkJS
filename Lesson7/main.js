function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'ivan', 'ivanov', 'ivanov@gmail.com', '0958745689');
console.log(user);

let users = [
    new User(1, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(2, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(3, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(4, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(5, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(6, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(7, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(8, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(9, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
    new User(10, 'ivan', 'ivanov', 'ivanov@gmail.com', '0658462354'),
]
console.log(users);


const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);


function sorter (u1,u2) {
    return u1.id - u2.id;
}
console.log(users.sort(sorter));


function Client (id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let client = new Client(1, 'ivan', 'ivanov', 'iva@hmail.com', '0689547865', {order:'1'});
    console.log(client);

    let clients = [
        new Client(1, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'},{title: 'phone'}]),
        new Client(2, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'}]),
        new Client(3, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'},{title: 'phone'},{title: 'copybook'}]),
        new Client(4, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'}]),
        new Client(5, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'}]),
        new Client(6, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'},{title: 'phone'}]),
        new Client(7, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'}]),
        new Client(8, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'phone'}]),
        new Client(9, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'},{title: 'phone'}]),
        new Client(10, 'ivan', 'ivanov', 'ivano@gmail.com', '0958745896', [{title: 'tv'}]),
    ]
console.log(clients);


function sorterClients (client1, client2){
    return client1.order.length - client2.order.length;
}
console.log(clients.sort(sorterClients));

function Car (model, producer, year, maxiSpeed, engine ){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxiSpeed = maxiSpeed;
    this.engine = engine;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxiSpeed} на годину`);
};
    this.info = function (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedToAdd){
        if (speedToAdd > 0) this.maxiSpeed = this.maxiSpeed + speedToAdd;
    };
    this.changeYear = function (newYear){
        if (newYear > 0) this.year = newYear;
    };
    this.addDriver = function (driver){
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


