let doc = document;
let formMain = doc.forms.main;
let formData = formMain.datas.elements;
let isVigoda = doc.querySelector(".vigoda");
let isDiagrame = doc.querySelector(".box");
let formBefore = doc.querySelector(".vigoda_before");
let formAfter = doc.querySelector(".vigoda_after");
let diagrAfter = doc.querySelector(".box_after");
let boxAlarm = doc.querySelector(".box_alarm");
let count =0

 
formMain.onsubmit = function (event){
    event.preventDefault();
   
    for (i=0; i<formData.length; i++){
            fieldIsEmpty(formData[i]);
    }
   
   if (count===3){
    calkulDeposit(formMain);
    boxAlarm.className = "box_alarm";
    isVigoda.className = "vigoda_active";
    isDiagrame.className = "box_active";

   } else {
       boxAlarm.className = "box_alarm active";
   }
}

function fieldIsEmpty(field){
    let value = field.value;
    
    if(value){
           count++
        field.style.border = 'outset';
    } else {
        field.style.border = '2px solid tomato';
           }
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
