let doc = document;
let box = doc.querySelector('.box');
let squareBase = [
    {
        structure: {
            tag: 'div', 
            class: 'square-item',
            id: 'squarel'
        },
        styles: {
            height: '100px', 
            width: '100px', 
            background: 'green', 
            margin: '20px', 
            border: '5px solid olivedrab'
        }
    }
];

for (let i = 0; i < squareBase.length; i++){
    let boxStructStart =''; 
    let boxStruct = '';
    let boxStyle =''; 
    let boxStructFin = '';
    for (let key in squareBase[i].structure){
       
        if (key!== 'tag'){
            boxStruct += `${key}="${squareBase[i].structure[key]}"; `;
            
        }
        else {
            boxStructStart += `<${squareBase[i].structure[key]}`;
            
            boxStructFin += `></${squareBase[i].structure[key]}>`
          
        }
      
    }
    box += boxStructStart + boxStruct + boxStructFin;
    console.log(box);
    //
    console.log(boxStructStart);
    console.log(boxStruct);
    console.log(boxStructFin);
    //
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

 //
console.log(box);
box += boxStructStart;
// + boxStruct +'style= "' + boxStyle + boxStructFin;
console.log(box);
}
          
    
    
    
   






