function cloner (obj) {
    if (obj) {
        let functions = [];
        for (const key in obj){
            if (typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functionClone.push({functionClone, key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions){
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj
    }
    throw new Error('error!');
}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index+1})));