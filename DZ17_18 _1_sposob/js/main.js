let doc = document;
let formMain = doc.forms.main;
let formEls = formMain.elements;
let boxItem1 = doc.querySelector('.box-item1');
let boxItem2 = doc.querySelector('.box-item2');
let boxItem3 = doc.querySelector('.box-item3');

for (i=0; i < 2; i++ ){
        
    formMain.onsubmit = function(event) {
        event.preventDefault();
        let itemBox = formMain.parent.value;
        let iTag = formMain.tag.value;
        let iClass = formMain.class.value;
        let iText = formMain.text.value;
        
                if (itemBox === 'box-item1'){
                 boxItem1.innerHTML +=  `
                <`+ iTag+ ` class="` + iClass+ `">`+
                    iText +
                `</` + iTag+ `>`;
                  
                }
                if (itemBox === 'box-item2'){
                    boxItem2.innerHTML +=  `
                   <`+ iTag+ ` class="` + iClass+ `">`+
                       iText +
                   `</` + iTag+ `>`;
                     
                   }
                if (itemBox === 'box-item3'){
                    boxItem3.innerHTML +=  `
                   <`+ iTag+ ` class="` + iClass+ `">`+
                       iText +
                   `</` + iTag+ `>`;
                     
                   }
                
                         
    }  
         
}




