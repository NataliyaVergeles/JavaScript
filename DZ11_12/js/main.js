let doc = document;
let btnNext = doc.querySelector('.next');
let btnPrev = doc.querySelector('.prev');

let on = 0;
let box = doc.querySelector('.box');


btnNext.onclick = function () {
        on  ++;
       box.className = 'box active';
     
       if (on === 1){
        box.className = 'box b1'; 
        
       }
        if(on === 2){
        box.className = 'box b2';    
        
        }
        if(on === 3){
        box.className = 'box b3';    
        
        }
        if(on === 4){
         on = 0;  
        }
       
}
btnPrev.onclick = function () {
        on  --;
        box.className = 'box active';
          
       if (on === 1){
        box.className = 'box b1'; 
        
       }
        if(on === 2){
        box.className = 'box b2';    
        
        }
        if(on === 3){
        box.className = 'box b3';    
       
        }
        if (on === 0){
        box.className = 'box';
        on = 3;
        }
             
}
  




