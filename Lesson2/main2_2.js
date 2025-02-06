let x =0;
if (x === 0){
    console.log('Вірно');
} else {
    console.log('Невірно')
}



let time = 15;
switch (time){
    case (time>=0 && time<15):
        console.log('перша частина');
        break;
    case (time>=15 && time<30):
        console.log('друга частина');
        break;
    case (time>=30 && time<45):
        console.log('третя частина');
        break;
    case (time>=45 && time<=59):
        console.log('четверта частина')
        break;
    default:
        console.log('неправильно введене значення')
}


let day = 11;
switch (day){
    case (day>=1 && day<=10):
        console.log('1');
        break;
    case (day>=11 && day<=20):
        console.log('2');
        break;
    case (day>=21 && day<=31):
        console.log('3');
        break;
}


let schedule = '2';
switch (schedule){
    case '1':
        console.log('monday');
        break;
    case'2':
        console.log('tuesday');
        break;
    case'3':
        console.log('wednesday');
        break;
    case'4':
        console.log('thursday');
        break;
    case'5':
        console.log('friday');
        break;
    default:
        console.log('wrong value')
}


let a = 0;
let b = 1;

if (a>b) {
    console.log(a);
}else if (b>=a){
    console.log(b);
}



let y ='5';
if (y === 0 || y === null || y === undefined){
    y ='default';
}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('super');
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('super');
}




