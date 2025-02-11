function area (a,b){
    let result = a * b;
    console.log(result);
    return result;
}

function roundSquare (radius){
    return  Math.PI * radius * radius;
}

function areaCilinder (radius, height){
    return 2*Math.PI*radius*height;
}

function lesson (array){
    for (const item of array){
        console.log(item);
    }
}

function lesson2 (text){
    let p = `<p> ${text} </p>`;
    document.write(p);
}

function lesson3 (texts){
document.write(`<ul>
<li>${texts}</li>
<li>${texts}</li>
<li>${texts}</li>
</ul>`)
}


function lesson4 (counter) {
    document.write('<ul>');
    for (let i =0; i < counter; i++){
        document.write(`<li>${text} </li>`);
    }
    document.write('</ul>')
}


function lesson4_1 (array){
    document.write(`<ul>`);
    for (const item of array){
        document.write(`<li>${item}</li>`);
        }
    document.write(`</ul>`);
}


function lesson4_2 (users){
    for (const user of users){
        document.write(`<div> ${user.id} ${user.name} ${user.age}</div>`);
    }
}
lesson4_2([
    {id:1,name:'ivan',age:30},
    {id:2,name:'juan',age:56},
    {id:3,name:'vas',age:20},
]);

function arrayMin (numbers){
    let min = numbers[0];
    for (let i=1; i < numbers.length; i++){
    let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(arrayMin([54, 64, 65, 654]));


function sum (arr){
    let sums = 0;
    for (const item of arr){
        sums = sums + item;
    }
    return sums;
}
sum([1, 2, 10])


function swap (arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;

    return arr;
    }
    return -Infinity;

}
console.log(swap([11, 22, 33, 44], 0, 2));


function exchange (sumUAH, currencyValues, exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues){
        if (item.constructor === exchangeCurrency){
            chosenCurrency = item;
        }
    }
    let result = sumUAH/chosenCurrency.value
    return result;
}
console.log(exchange(10000,[{currency:'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));