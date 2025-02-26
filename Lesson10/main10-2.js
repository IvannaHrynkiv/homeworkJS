const table = document.getElementById('table');
const tableGeneratorForm = document.forms['tableGeneratorForm'];
tableGeneratorForm.onsubmit = function (e){
    table.innerText = ' ';
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i=0; i < linesValue; i ++){
        const tr = document.createElement('tr');
    for (let j =0; j < cellsValue; j ++){
        const td = document.createElement('td');
        td.innerText = dataValue;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    }

}