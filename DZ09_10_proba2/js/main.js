let doc = document;
let box = doc.querySelector('.box');
console.log (box);
let bxx='';
let squareBase = [
    {
        
        structure: {
            tag: 'div', 
            class: 'square-item1',
            id: 'squarel'
        },
        styles: {
            height: '200px', 
            width: '200px', 
            background: 'blue', 
            margin: '50px', 
            border: '10px solid yellow'
        }
    }
];

for (let i = 0; i < squareBase.length; i++){
    let boxStructStart =''; 
    let boxStyle =''; 
    let boxStructFin = '';
    boxStructStart +=`
        <${squareBase[i].structure.tag}
            class= "${squareBase[i].structure.class}"
            id = "${squareBase[i].structure.id}"
              
    `
    boxStructFin += `></${squareBase[i].structure.tag}>`
               
    
   for(let key in squareBase[i].styles){
       console.log (key, squareBase[i].styles[key])
       boxStyle += `${key}:${squareBase[i].styles[key]};`
       console.log(boxStyle);
   } 
bxx += boxStructStart + 'style="' + boxStyle + '"' + boxStructFin;
console.log(bxx);
//box.innerHTML += bxx; 
console.log(box);
          
}
box.innerHTML += bxx; 
    
    
    
   






