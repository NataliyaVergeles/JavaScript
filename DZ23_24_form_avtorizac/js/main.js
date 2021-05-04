let doc = document;
let formMain = doc.forms.main;
let fieldName = formMain.name;
let fieldFamily = formMain.family;
let fieldWorkday = formMain.workday;
let fieldsChk = doc.querySelectorAll('.chbox');
let isCheck = doc.querySelector('.form-check');
let btnForm = doc.querySelector('.submit');
let ff = doc.getElementsByClassName('chbox');


fieldName.onblur = function() {
    let value = this.value;
   if (value){
       fieldFamily.removeAttribute('disabled');
   }else {
       this.focus();
       fieldFamily.setAttribute('disabled',true);
   }
}
fieldFamily.onblur = function() {
    let value = this.value;
   if (value){
       fieldWorkday.removeAttribute('disabled');
   }else {
       this.focus();
       fieldWorkday.setAttribute('disabled',true);
   }
}
fieldWorkday.onblur = function() {
    let value = this.value;
        if(value!=0){
            for (let i=0; i< fieldsChk.length; i++){ 
            fieldsChk[i].removeAttribute('disabled');
              
            }    
        }else{
            for (let i=0; i< fieldsChk.length; i++){ 
                fieldsChk[i].setAttribute('disabled', true);
                  
                }    
        }
}


for (let i=0; i < fieldsChk.length; i++){
    fullCheck(fieldsChk[i]);
}

//проверка на заполнение хоть одного чека
isCheck.onchange = function(){
    let gg = 0;
    for (let i=0; i<ff.length; i++){
        let trueCheck = ff[i].checked;
      
        if (trueCheck){
            gg ++
        } 
    }
    if (gg===0){
        btnForm.setAttribute('disabled',true);
    } else {
        btnForm.removeAttribute('disabled');

    }
}


formMain.onsubmit = function(e){
    e.preventDefault();
}
function fullCheck (fullCheckBox){
    fullCheckBox.onblur = function (){
        let value = this.value;
       
    if (value){
        btnForm.removeAttribute('disabled');
        
    }else{
        btnForm.setAttribute('disabled',true);
    }
    }
}