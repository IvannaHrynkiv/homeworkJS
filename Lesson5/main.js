let area = (a,b) => (console.log(a * b), a * b);

let roundSquare = radius => Math.PI * radius * radius;

let areaCilinder = (radius, height) => 2*Math.PI*radius*height;

let element = (array) => {
    array.forEach(item => console.log(item));
}

let createsP = text=> {
    document.write(`<p> ${text} </p>`);
}

let createsUl = texts => document.write(`<ul>
<li>${texts}</li>
<li>${texts}</li>
<li>${texts}</li>
</ul>`);

let creatingElements = (counter, text) => {
    document.write('<ul>');
    for (let i =0; i < counter; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>')
}

let accepts = (array) => {
    document.write(`<ul>`);
    array.forEach(item => document.write(`<li>${item}</li>`));
    document.write(`</ul>`);
}

let acceptsUsers = (users) => {
    users.forEach(user => {
        document.write(`<div> ${user.id} ${user.name} ${user.age}</div>`);
    });
};
acceptsUsers([
    {id:1,name:'ivan',age:30},
    {id:2,name:'juan',age:56},
    {id:3,name:'vas',age:20},
]);


let arrayMin = (numbers) => numbers.reduce((min, number) => number < min ? number: min, numbers[0]);
console.log(arrayMin([54, 64, 65, 654]));


let sum = (arr) => arr.reduce((sums, item) => sums + item, 0);
console.log(sum([1,2,10]));


let swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
        return arr;
    }
        return -Infinity;
};
console.log(swap([11, 22, 33, 44], 0, 2));


let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const chosenCurrency = currencyValues.find(item => item.currency === exchangeCurrency);
    return chosenCurrency ? sumUAH / chosenCurrency.value : null;
};

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));



