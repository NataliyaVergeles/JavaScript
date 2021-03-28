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

let parrentEl1 = prompt('Введите блок для вставки  массива 1: (варианты block1; block2; block3; block4; block5)');
let tag1 = prompt('Введите имя тега');

let parrentEl2 = prompt('Введите блок для вставки  массива 2: (варианты block1; block2; block3; block4; block5)');
let tag2 = prompt('Введите имя тега');

let parrentEl3 = prompt('Введите блок для вставки  массива 3: (варианты block1; block2; block3; block4; block5)');
let tag3 = prompt('Введите имя тега');

let parrentEl4 = prompt('Введите блок для вставки  массива 4: (варианты block1; block2; block3; block4; block5)');
let tag4 = prompt('Введите имя тега');

let parrentEl5 = prompt('Введите блок для вставки  массива 5: (варианты block1; block2; block3; block4; block5)');
let tag5 = prompt('Введите имя тега');

renderData(parrentEl1, tag1);
renderData(parrentEl2, tag2);
renderData(parrentEl3, tag3);
renderData(parrentEl4, tag4);
renderData(parrentEl5, tag5);



function renderData(parrentEl, tag) {
    if (parrentEl == 'block1') {
        for (let i = 0; i < data1.length; i++) {
            block1.innerHTML += '<' + tag1 + '>' + data1[i] + '</' + tag1 + '>';
        }
    }
    if (parrentEl == 'block2') {
        for (let j = 0; j < data2.length; j++) {
            block2.innerHTML += '<' + tag2 + '>' + data2[j] + '</' + tag2 + '>';;
        }
    }
    if (parrentEl == 'block3') {
        for (let k = 0; k < data3.length; k++) {
            block3.innerHTML += '<' + tag3 + '>' + data3[k] + '</' + tag3 + '>';;
        }
    }
    if (parrentEl == 'block4') {
        for (let l = 0; l < data4.length; l++) {
            block4.innerHTML += '<' + tag4 + '>' + data4[l] + '</' + tag4 + '>';;
        }
    }
    if (parrentEl == 'block5') {
        for (let m = 0; m < data5.length; m++) {
            block5.innerHTML += '<' + tag5 + '>' + data5[m] + '</' + tag5 + '>';;
        }
    }

}