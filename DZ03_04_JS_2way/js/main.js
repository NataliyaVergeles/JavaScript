let qst1 = ['Столица Индии?', 'Дели'];
let qst2 = ['Число 16 кратно 4?', 'да'];
let qst3 = [' Посчитайте 15/5 ', '3'];
let qst4 = ['Переведите на английский "стол"', 'table'];
let mark = ['Правильно!', 'Ошиблись...'];
let testCount = 4;
let qBl = 0;
let userAnswer;
let pQ = document.querySelector('p.test-qustion');
let pA = document.querySelector('p.test-answer');
let pU = document.querySelector('p.test-user');



qustion(qst1);
qustion(qst2);
qustion(qst3);
qustion(qst4);



alert('Вы ответили правильно на ' + qBl + ' вопрос(а)ов из ' + testCount)



//блок функций
function qustion(qst) {
    let userAnswer = prompt(qst[0]);
    if (userAnswer == qst[1]) {
        alert(mark[0]);
        qBl = qBl + 1;
    }
    else {
        alert(mark[1]);
        
    }
    pQ.innerHTML =  ' Вопрос: ' + qst[0];
    pA.innerHTML = ' Правильный ответ: ' + qst[1];
    pU.innerHTML = 'Ваш ответ: ' + userAnswer;
    
}
