let doc = document;

let data1 = ['Футбол'];
let data2 = ['Лига чемпионов УЕФА', 'Лига Европы УЕФА', 'Суперкубок УЕФА'];
let data3 = ['Франция', 'Германия'];
let data4 = ['Пари сен-Жермен', 'Олимпик Марсель', 'Олимпик Лион', 'Сент-Этьен'];
let data5 = ['Бавария Мюнхен', 'Нюрнберг', 'Боруссия Дортмунд', 'Шальке'];

let block1 = doc.querySelector('.block1');
let block2 = doc.querySelector('.block2');
let block3 = doc.querySelector('.block3');
let block4 = doc.querySelector('.block4');
let block5 = doc.querySelector('.block5');

let parrenEl;

//let parrentEl = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');

console.log(parrentEl);
console.log(defBlock);
console.log(defData);
console.log(defTag);
block1.innerHTML += '<defBlock>' + '<defTag>' + 'defData(0)' + '</defTag>' +'</defBlock>';
console.log(parrentEl.innerHTML);





//let parrentEl2 = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');
//let tag2 = prompt('Введите имя тега');

//let parrentEl3 = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');
//let tag3 = prompt('Введите имя тега');

//let parrentEl4 = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');
//let tag4 = prompt('Введите имя тега');

//let parrentEl5 = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');
//let tag5 = prompt('Введите имя тега');

//function renderData(defBlock, defTag) {
    //let parrentEl = prompt('Введите блок для вставки: (варианты block1; block2; block3; block4; block5)');
    //let defTag = prompt('Введите имя тега');
    //let defBlock = doc.querySelector('.parrentEl')

//}


function renderData(defBlock) {
  if (parrentEl == block1) {

      for (let j = 0; j < data1.length; j++) {

          block1 += '<tag1>' + data1(j) + '</tag1>'
      }

      block1.innerHTML = block1;
  }
}

for (let i = 0; i < data1.length; i++){
  block1.innerHTML += '<h2>' + data1 [i] + '</h2>';
}

for (let j = 0; j < data2.length; j++){
block2.innerHTML += '<h3>' + data2 [j] + '</h3>';
}