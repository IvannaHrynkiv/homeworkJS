const input = document.getElementById('calculator');
const resultDiv = document.getElementById('result');
input.oninput = function (){
    const kil = +this.value;
    resultDiv.innerText = kil * 2.2;
}

function addToLocalStorage (arrayName, objToAdd){
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem){
        throw new Error('there is no such array');
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList');