let doc = document;
let btnToggle = doc.querySelector('.toggle');

let on = false;
let box = doc.querySelector('.box');

console.log(btnToggle);

btnToggle.onclick = function () {
    if (on === false){
        box.className = 'box active';
        on = true;
}

   
else {
        box.className = 'box ';
        on = false
}
}


