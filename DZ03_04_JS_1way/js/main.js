let qst1 = ['Столица Индии?', 'Дели'];
let qst2 = ['Число 16 кратно 4?', 'да'];
let qst3 = [' Посчитайте 15/5 ', '3'];
let qst4 = ['Переведите на английский "стол"', 'table'];
let mark = ['Правильно!', 'Ошиблись...'];
let testCount = 4;
let qBl = 0;
let userAnswer;
let pQ1 = document.querySelector('p.test-qustion1');
let pA1 = document.querySelector('p.test-answer1');
let pQ2 = document.querySelector('p.test-qustion2');
let pA2 = document.querySelector('p.test-answer2');
let pQ3 = document.querySelector('p.test-qustion3');
let pA3 = document.querySelector('p.test-answer3');
let pQ4 = document.querySelector('p.test-qustion4');
let pA4 = document.querySelector('p.test-answer4');



qustion(qst1);
qustion(qst2);
qustion(qst3);
qustion(qst4);


alert('Вы ответили правильно на '+ qBl + ' вопрос(а)ов из ' + testCount)

pQ1.innerHTML =  ' Вопрос: ' + qst1[0];
pA1.innerHTML = ' Правильный ответ: ' + qst1[1];
pQ2.innerHTML =  ' Вопрос: ' + qst2[0];
pA2.innerHTML = ' Правильный ответ: ' + qst2[1];
pQ3.innerHTML =  ' Вопрос: ' + qst3[0];
pA3.innerHTML = ' Правильный ответ: ' + qst3[1];
pQ4.innerHTML =  ' Вопрос: ' + qst4[0];
pA4.innerHTML = ' Правильный ответ: ' + qst4[1];





//блок функций
function qustion(qst){
        let userAnswer = prompt (qst[0]);
    if (userAnswer == qst[1]) {
    alert (mark[0]);
    qBl=qBl + 1;
    } 
    else {alert (mark[1]);
    }
}
