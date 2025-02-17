let str = 'hello world';
console.log(str.length);

let str1 = 'lorem ipsum';
console.log(str1.length);

let str2 = 'javascript is cool';
console.log(str2.length);

console.log(str.toUpperCase());
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());

let str3 = 'HELLO WORLD';
let str4 = 'LOREM IPSUM';
let str5 = 'JAVASCRIPT IS COOL';
console.log(str3.toLowerCase());
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());

let str6 = ' dirty string   ';
console.log(str6.indexOf('d'));
console.log(str6.lastIndexOf('g'));
console.log(str6.substring(1,13));

let stringToarray = 'Ревуть воли як ясла повні';
console.log(arr = stringToarray.split(' '));

let numbers = [10,8,-7,55,987,-1011,0,1050,0];
console.log(stringNumbers = numbers.map(String));

let nums = [11,21,3];
function sortNums(array,direction){
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((a,b)=> b.monthDuration - a.monthDuration);
console.log(sort);
let filter = sort.filter(value => value.monthDuration > 5);
console.log(filter);
let map = filter.map(function (value, index,) {
    let newFail = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
    return newFail;
});
console.log(map);

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6','7','8','9','10','ace','jack','queen','king'];
const cards = [];
for (const suit of suits){
    for (const value of values){
        const card = {cardSuit: suit, values:value};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

console.log(cards.filter(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9' )));

const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
    }
    return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));