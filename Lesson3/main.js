for (let i=0; i<10; i++){
    document.write(`<div> Hello </div>`);
}
for (let i=0; i<10; i++){
    document.write(`<div> How are you doing? ${i} </div>`);
}
let n=0;
while (n<20){
    document.write(`<h1> Hi </h1>`);
    n++;
}
let i=0;
while (i<20){
    document.write(`<h1> lesson ${i} </h1>`);
    i++;
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let user of listOfItems){
    document.write(`<li>${user}</li>`);
}
document.write(`</ul>`);
