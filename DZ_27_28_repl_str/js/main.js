let doc = document;
let strEx = 'My name is Nata.I live in Poltava. My name is Nata. I live in Poltava';

console.log(strEx);
let newStrEx= replStar(strEx, 'Nata', '*');
console.log (newStrEx);

function replStar (str, oldSub, newSub){
    let index = 0;
    let newStr = str;
   
    while ((index = newStr.indexOf(oldSub, index))!== -1){
        index ++;
        newStr = newStr.replace(oldSub,newSub);
       
    }
    return newStr;
}







