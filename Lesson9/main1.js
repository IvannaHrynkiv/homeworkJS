let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let course of coursesAndDurationArray){
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = course.title;
    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `Тривалість: ${course.monthDuration}`;
    itemDiv.appendChild(title);
    itemDiv.appendChild(description);
    document.body.appendChild(itemDiv);
}