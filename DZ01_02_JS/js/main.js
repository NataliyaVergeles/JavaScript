console.log(document);
console.dir(document);


let h1 = document.querySelector('h1');
let pBd = document.querySelector('p.Bd');
let pCity = document.querySelector('p.City');
let pVuz = document.querySelector('p.Vuz');
let pVuz_spec = document.querySelector('p.Vuz_spec');

let liJob1 = document.querySelector('li.Job1');
let liJob2 = document.querySelector('li.Job2');
let liJob3 = document.querySelector('li.Job3');
let liJob4 = document.querySelector('li.Job4');

let liZn1 = document.querySelector('li.Zn1');
let liZn2 = document.querySelector('li.Zn2');
let liZn3 = document.querySelector('li.Zn3');
let liZn4 = document.querySelector('li.Zn4');


let candidate = 'Кандидат';
let bd;
let city;
let vuz;
let vuz_spec;

let job1;
let job2;
let job3;
let job4;

let zn1;
let zn2;
let zn3;
let zn4;


alert('Здравствуйте, заполните, пожалуйста, форму резюме');
candidate = prompt('Ваше имя:');

alert('Факты биогрфии');
bd = prompt('Дата рождения дд.мм.гггг:');
city =  prompt('Город проживания:');
vuz = prompt('Образование, ВУЗ, гг. обучения');
vuz_spec = prompt('Специальность:');

h1.innerHTML = 'Резюме '+ candidate + ':';
pBd.innerHTML = 'Дата рождения: '+  bd + 'г.';
pCity.innerHTML = 'Город проживания: ' + city;
pVuz.innerHTML = 'Образование: '+ vuz;
pVuz_spec.innerHTML = 'Специальность: ' + vuz_spec;

alert('Опыт работы (введите четыре значимых места работы, должность, период)');
job1 = prompt('Первое место работы:');
job2 = prompt('Второе место работы:');
job3 = prompt('Третье место работы:');
job4 = prompt('Четвертое место работы:');

liJob1.innerHTML = job1;
liJob2.innerHTML = job2;
liJob3.innerHTML = job3;
liJob4.innerHTML = job4;

alert('Знания и навыки (заполните четыре блока)');
zn1 = prompt('Уверенный пользователь в програмах: ');
zn2 = prompt('Дополнительные сертификаты : ');
zn3 = prompt('Другие достижения: ');
zn4 = prompt('Личностные и деловые качества: ');

liZn1.innerHTML = zn1;
liZn2.innerHTML = zn2;
liZn3.innerHTML = zn3;
liZn4.innerHTML = zn4;

alert('СПАСИБО!');