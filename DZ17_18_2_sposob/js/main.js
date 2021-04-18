let doc = document;
let formMain = doc.forms.main;
let formEls = formMain.elements;
let boxItem1 = doc.querySelector('.box-item1');
let boxItem2 = doc.querySelector('.box-item2');
let boxItem3 = doc.querySelector('.box-item3');
let boxItems = ['box-item1','box-item2','box-item3'];

//console.log (boxItems);

for (i=0; i < boxItems.length; i++ ){
    //console.log (boxItems[i]);
    
    formMain.onsubmit = function(event) {
        event.preventDefault();
        let itemBox = formMain.parent.value;
        let iTag = formMain.tag.value;
        let iClass = formMain.class.value;
        let iText = formMain.text.value;
        let boxItem = '';
            boxItem =  `
            <`+ iTag+ ` class="` + iClass+ `">`+
                iText +
            `</` + iTag+ `>`;
                       
                if (itemBox === 'box-item1'){
                    boxItem1.innerHTML+= boxItem;
                }
                if (itemBox === 'box-item2'){
                    boxItem2.innerHTML+= boxItem;
                }
                if (itemBox === 'box-item3'){
                    boxItem3.innerHTML+= boxItem;
                }
                               
                         
    }  
         
}




