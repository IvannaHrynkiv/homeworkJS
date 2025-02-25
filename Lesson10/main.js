function hideText() {
    document.getElementById("text").style.display = "none";
}

function checkAge (){
    let age = document.getElementById('age');
    let years = document.getElementById('years');
    if (age < 18){
        years.textContent = "Вхід заборонено!"
        } else {
        years.textContent = "hello";
    }
}

const someForm = document.forms.someForm;
const target = document.getElementById('target');
someForm.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj ={nameValue, surnameValue, ageValue}
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})

let currentNumber =+localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementById('target2').innerText = currentNumber;


