let doc = document;
let box = doc.querySelector('.box');
let squareBase = [
    {
        structure: {
            tag: 'div', 
            class: 'square-item',
            id: 'squarel'
        },
        structure: {
            tag: 'div', 
            class: 'square-item1',
        },
        styles: {
            height: '100px', 
            width: '100px', 
            background: 'green', 
            margin: '20px', 
            border: '5px solid olivedrab'
        },
        styles: {
            height: '200px', 
            width: '200px', 
            background: 'yellow', 
            padding: '50px', 
            border: '5px solid olivedrab'
        }
    }
];

for (let i = 0; i < squareBase.length; i++){
    let boxStructStart =''; 
    let boxStruct = '';
    let boxStyle =''; 
    let boxStructFin = '';
    let bxx = '';
    for (let key in squareBase[i].structure){
       
        if (key !== 'tag'){
            boxStruct += `${key}="${squareBase[i].structure[key]}"; `;
            
        }
        else {
            boxStructStart += `<${squareBase[i].structure[key]}`;
            
            boxStructFin += `></${squareBase[i].structure[key]}>`
          
        }
       
    }
    
    
   for(let key in squareBase[i].styles){
       console.log (key, squareBase[i].styles[key])
       boxStyle += `${key}:${squareBase[i].styles[key]}; `
       console.log(boxStyle);
   } 
 //
 console.log(boxStructStart);
 console.log(boxStruct);
 console.log(boxStructFin);
 console.log(boxStyle);
 bxx += boxStructStart + boxStruct + 'style= "' + boxStyle + '"' + boxStructFin;
 box.innerHTML += bxx;
 
 console.log (bxx);

//box.innerHTML += boxStructStart + boxStruct + 'style= "' + boxStyle + boxStructFin;
 
console.log(box);

}

          
    
    
    
   






