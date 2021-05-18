let doc = document;
let formFilterName = doc.forms.Name;

let formFilterAge = doc.querySelector('.filterAge');
let formFilterCity = doc.querySelector('.filterCity');

//let formFilterCity = doc.forms.filterCity;
let selectFilter = doc.querySelector('.filterStudents');

let students = [
    { name: 'Vasya', age: 20, city: 'Poltava' },
    { name: 'Kolya', age: 21, city: 'Kharkov' },
    { name: 'Petya', age: 19, city: 'Kiev' },
    { name: 'Sasha', age: 23, city: 'Poltava' },
];


formFilterName.innerHTML = 
`
    <select onchange="alert(this.value)">
        <option value="${students[0].name}">${students[0].name}</option>
        <option value="${students[1].name}">${students[1].name}</option>
        <option value="${students[2].name}">${students[2].name}</option>
        <option value="${students[3].name}">${students[3].name}</option>
    </select>
`;
formFilterAge.innerHTML = 
`
    <select onchange="alert(this.value)">
        <option value="${students[0].age}">${students[0].age}</option>
        <option value="${students[1].age}">${students[1].age}</option>
        <option value="${students[2].age}">${students[2].age}</option>
        <option value="${students[3].age}">${students[3].age}</option>
    </select>
`;
formFilterCity.innerHTML = 
`
    <select onchange="alert(this.value)">
        <option value="${students[0].city}">${students[0].city}</option>
        <option value="${students[1].city}">${students[1].city}</option>
        <option value="${students[2].city}">${students[2].city}</option>
        <option value="${students[3].city}">${students[3].city}</option>
    </select>
`;

let studentsFilter =students;

formFilterName.onchange = function(){
    let value = this.value;
    console.log (value);
    studentsFilter = students.filter(function(item){
        if (item.name === value) {
            return true;
            
        }
    })
}

formFilterCity.onchange = function(){
    let value = this.value;
    console.log (value);
    studentsFilter = students.filter(function(item){
        if (item.city === value) {
            return true;
        
        }
})
}
formFilterAge.onchange = function(){
    let value = this.value;
    console.log (value);
    studentsFilter = students.filter(function(item){
        if (item.age === value) {
            return true;
            
        }
    })
}

console.log (studentsFilter);
screenFilter (studentsFilter);



/**Формирование фильтрованного массива 
function arrayFilter (arr, keyFilt, seleFilt,){
    let arrFilter = arr.filter(function(item){
        if (item.keyFilt === seleFilt) {
            return true;
            
        }
    })
}
arrayFilter (students, city, 'Poltava');
console.log (arrFilter);*/

//Вывести  список на экран
function screenFilter (arr){
for (let i = 0; i< arr.length; i++){
    selectFilter.innerHTML+=
    `
        <li> Name: ${arr[i].name} ; Age: ${arr[i].age}
             ; City: ${arr[i].city}
        </li>
    
    `
}
}