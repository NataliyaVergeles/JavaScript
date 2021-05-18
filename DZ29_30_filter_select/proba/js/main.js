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
let nameFilter = [];
//let ageFilter = [];
//let cityFilter = []; 
console.log (students);
let keyFilter =students[0].name;
console.log = keyFilter;

//unic (students, name);


formFilterName.innerHTML = 
`
    <select>
        <option value="${students[0].name}">${students[0].name}</option>
        <option value="${students[1].name}">${students[1].name}</option>
        <option value="${students[2].name}">${students[2].name}</option>
        <option value="${students[3].name}">${students[3].name}</option>
    </select>
`;
formFilterAge.innerHTML = 
`
    <select>
        <option value="${students[0].age}">${students[0].age}</option>
        <option value="${students[1].age}">${students[1].age}</option>
        <option value="${students[2].age}">${students[2].age}</option>
        <option value="${students[3].age}">${students[3].age}</option>
    </select>
`;
formFilterCity.innerHTML = 
`
    <select>
        <option value="${students[0].city}">${students[0].city}</option>
        <option value="${students[1].city}">${students[1].city}</option>
        <option value="${students[2].city}">${students[2].city}</option>
        <option value="${students[3].city}">${students[3].city}</option>
    </select>
`;

function unic (arr, title){
   
        for (let i = 0; i < arr.length; i ++){
            //keyFilter = arr[i].[title];
            console.log (keyFilter);
            if (arr.indexOf(titleFilter, i++)===-1){
                titleFilter.splice(i,0,arr[i].title)
            }




        }

}






