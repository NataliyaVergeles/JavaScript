let doc = document;
let usersEl = doc.querySelector('.container');

console.log(usersEl);

//console.dir(box);
//let boxOpt = {
    //tag: 'div',
    //width: '150px',
    //height: '100px',
    //background: 'lightblue',
    //border: '2px solid blue'
//};
//formBox(boxOpt);

let els = [
    { tag: 'div', width: '100px', height: '100px', background: 'lightblue', border: '2px solid blue' },
    { tag: 'div', width: '150px', height: '100px', background: 'Skyblue', border: '2px solid blue' },
    { tag: 'div', width: '200px', height: '100px', background: 'DeepSkyblue', border: '2px solid blue' },
    { tag: 'div', width: '250px', height: '100px', background: 'Royalblue', border: '2px solid blue' },
]
//formBox(els[0]);
//formBox(els[1]);

//console.log (els.tag);//как вывести в консоль конкретный элемент матрицы из элементов
for (let i = 0; i < els.length; i++) {
    formBox(els[i]);
}


function formBox(boxOpt){
    let box='';
    box =
    '<' + boxOpt.tag + ' class="box" ' +
    'style="' +
    'width: ' + boxOpt.width + ' ;' +
    'height: ' + boxOpt.height + ' ;' +
    'background: ' + boxOpt.background + ' ;' +
    'border: ' + boxOpt.border + ' " ' +


    '>' +
    '</' + boxOpt.tag + '>';
    usersEl.innerHTML += box;
}








