let doc = document;
let formMain = doc.forms.main;
let formData = formMain.datas.elements;
let isVigoda = doc.querySelector(".vigoda");
let isDiagrame = doc.querySelector(".box");
let formBefore = doc.querySelector(".vigoda_before");
let formAfter = doc.querySelector(".vigoda_after");
let diagrAfter = doc.querySelector(".box_after");
let boxAlarm = doc.querySelector(".box_alarm");
let isFormValid = false;

formData[0].onclick =function(){
    formData[0].onchange = function(){
    let sum = this.value;
        if (sum.length>+10){
            formData[0].classList.add('wrong');
            return false;
        
        } else {
            formData[0].classList.remove('wrong');
        }
    }
}
formData[2].onclick=function(){ 
     formData[2].onchange =function(){
        let proc =this.value;
        if (proc.length>+2){
                formData[2].classList.add('wrong');
                return false;
        } else {
                formData[2].classList.remove('wrong');
        }
    }
}


 
formMain.onsubmit = function (event){
    event.preventDefault();
    for (i=0; i<formData.length; i++){
        fieldIsEmpty(formData[i]); 
              
    }

    
    fieldsCheck(formData);
    
  //если все поля не заполнены - предупреждаем и не считаем
   if (!isFormValid){
    boxAlarm.classList.add('active');
    setTimeout(function(){
        boxAlarm.classList.remove('active');
    },2000);
    isVigoda.className = "vigoda";
    isDiagrame.className = "box";
      

   } else {
        // заполнены - считаем и выводим диагамму
        calkulDeposit(formMain);
        boxAlarm.className = "box_alarm";
        isVigoda.className = "vigoda_active";
        isDiagrame.className = "box_active";
       
   }
}
//проверка на пустое поле
function fieldIsEmpty(field){
    let value = field.value;
        
    if(value){
        field.style.border = 'outset';
    } else {
        field.style.border = '2px solid tomato';
            setTimeout(function(){
                field.style.border ='outset';
            }, 2000);
           }
}
//проверка на полную заполненость формы
function fieldsCheck (fields){
let isValid = true;
    for (let i = 0; i< fields.length; i++ ){
        let value = fields[i].value;
        if (value===''){
            fields[i].classList.add('active');
            isValid = false;
            setTimeout(function (){
                fields[i].classList.remove('active'); 
            }, 2000);
           
        } else {
            fields[i].classList.remove('active');
            isValid = true;
        }
       
    }
    isFormValid = isValid;
    
}



function calkulDeposit (dataDeposit){

    let sumDepBefore = dataDeposit.sum_deposit.value;
    let srokDep = dataDeposit.srok_deposit.value;
    let procDep = dataDeposit.proc_deposit.value;
    let sumDepAfter = (+sumDepBefore) + (+sumDepBefore)*(+srokDep)*(+procDep/100);
    let procDiagr = sumDepAfter/sumDepBefore;
    let sizeBoxAfter = +200*procDiagr;
        
    formBefore.innerHTML = 
        `<p>Было:</p>
        <p>${sumDepBefore}</p>
        `;
    formAfter.innerHTML = 
        `<p>Стало:</p>
        <p>${sumDepAfter}</p>
        `;
    diagrAfter.style.height= `${sizeBoxAfter}px`;
}
