let doc = document;
let formFilter = doc.forms.filter;
let tablPersonal = doc.querySelector('.personal');
let filtPersons =[];


let persons = [
    {name: 'Tanya', age: 28, city: 'Poltava', photo: 'foto1'},
    {name: 'Mariya', age: 32, city: 'Poltava', photo: 'foto2'},
    {name: 'Dima', age: 36, city: 'Kharkov', photo: 'foto3'},
    {name: 'Tanya', age: 30, city: 'Poltava', photo: 'foto4'},
    {name: 'Dima', age: 36, city: 'Kiev', photo: 'foto5'},
    {name: 'Nadya', age: 36, city: 'Kiev', photo: 'foto6'},
];

//Выводим полный массив на экран
screenShtat(persons);


//Создаем селекты уникальные 

createFilter(persons, 'name', 'selectNames', formFilter);
createFilter(persons, 'city', 'selectCityes', formFilter);
createFilter(persons, 'age', 'selectAges', formFilter);



//Создаем массив по фильтру
let filtSelect = doc.querySelectorAll('select');
for (let i = 0; i < filtSelect.length; i++){
    filtSelect[i].oninput = function(){
       let filtKey = this.value;
       console.log (filtKey);
    let filtPersons1 = persons.filter(function(user){
        return user.name === filtKey;});
    console.log (filtPersons1);
    screenFilt (filtPersons1);
        
    let filtPersons2 = persons.filter(function(user){
        return user.city === filtKey;});
        console.log (filtPersons2);
        screenFilt (filtPersons2);
        
    let filtPersons3 = persons.filter(function(user){
        return user.age == filtKey;});      
        console.log (filtPersons3);  
        screenFilt (filtPersons3);         
  }
  
  }




// функция вывода фильтрованного списка
function screenFilt (arrFilt){
    console.log(arrFilt.length);
    if (arrFilt.length!=0){
        tablPersonal.innerHTML=` `;
        screenShtat(arrFilt);
    }
}



function screenShtat (arr){
        for (let i = 0; i< arr.length; i++){
        tablPersonal.innerHTML+=
            `
            <div class="persona">
            <div class="persona__photo">
                <img src="img/${arr[i].photo}.jpg" alt="">
				
				
            </div>
            <div class="persona__descr">
                <h4> Имя, возраст, город:</h4>
                <p> ${arr[i].name}, ${arr[i].age}, ${arr[i].city}</p>
            </div>
    </div>
            
            `
        }
 }

function createFilter(arr, key, selectName, form) {
    let items = getUniq(key, arr);
    let selectItems = createSelect(items, selectName);
    form.insertAdjacentHTML('beforeend', selectItems);
}
function createSelect(optionsArr, selectName) {
    let optionsItems = '';
    optionsArr.forEach(function(item) {
        optionsItems += `<option value="${item}">${item}</option>`;
    });
    let select = `
        <select name="${selectName}">
            ${optionsItems}    
        </select>
        `;
    return select;
}
function getUniq(key, sourceArr) {
    let arr = [];
    sourceArr.forEach(function(item) {
        if (arr.indexOf(item[key]) === -1) {
            arr.push(item[key]);
        }
    });
    return arr
}