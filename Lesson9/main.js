const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);
const cloneNode = div.cloneNode(true);

let arr = ['Main','Products','About us','Contacts'];
const menu = document.createElement('ul');
div.classList.add('menu');
for (const item of arr){
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let body = document.body;
coursesAndDurationArray.forEach(course =>{
    let courseBloch = document.createElement(div);
    courseBloch.innerText = `Курс: ${course.title}, Тривалість: ${course.monthDuration}`;
    body.appendChild(courseBloch);
})

