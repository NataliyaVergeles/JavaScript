let doc = document;
let formFilter = doc.forms.filter;
let formRange = doc.forms.range;


let div = doc.createElement('div');
    div.innerHTML = '';
    div.className = 'choiceProduct';
   

let container = doc.querySelector('.container');
container.appendChild(div);

let divProducts = doc.createElement('div');
divProducts.innerHTML = '';
divProducts.className = 'products';

let divChoiceProduct = doc.querySelector('.choiceProduct');
divChoiceProduct.appendChild(divProducts);    



let products = [
    {art: '001', foto: 'foto1.png', title: 'Notebook', brand: 'Asus', model: 'X5', price: 1600, currency: '$', cat: 'Notebooks'},
    {art: '002', foto: 'foto2.png', title: 'Notebook', brand: 'HP', model: 'Pavilion', price: 1400, currency: '$', cat: 'Notebooks'},
    {art: '003', foto: 'foto3.png', title: 'Smartphone', brand: 'Samsung', model: 'S40', price: 400, currency: '$', cat: 'Mobile'},
    {art: '004', foto: 'foto4.jpg', title: 'Smartphone', brand: 'Xiaomi', model: 'X10', price: 200, currency: '$', cat: 'Mobile'},
    {art: '005', foto: 'foto5.jpg', title: 'Smartphone', brand: 'Xiaomi', model: 'X11', price: 300, currency: '$', cat: 'Mobile'},
    {art: '006', foto: 'foto6.jpg', title: 'Smartphone', brand: 'Xiaomi', model: 'X2S', price: 200, currency: '$', cat: 'Mobile'},
];

let prodHtml = products.map(function(prod) {
    let prodHtml = `
    <div class="product">
          
        <h3 class="productTitle"> Art:${prod.art} ${prod.title} ${prod.brand} ${prod.model} </h3>
        <h4 class="productPrice"> Price: ${prod.currency} ${prod.price} </h4>
        <div class="productFoto">
            <img src="img/${prod.foto}" alt=""/>
        </div>  

     </div> 
        
    `;
    return prodHtml;
});
prodHtml.forEach(function(htmlEl) {
    divProducts.insertAdjacentHTML('beforeend', htmlEl);
});

//фильтр по ползунку
let inputRange = 
`
<input type="range" id="slider" min="200" max="1600" step="100">
<input class="rangeText" type="text" id="valueSlider" value="200">

`;
formRange.insertAdjacentHTML('beforeend', inputRange);

//Создаем селекты уникальные 
createFilter(products, 'brand', 'selectBrands', formFilter, 'Отфильтровать по бренду');
createFilter(products, 'price', 'selectPrices', formFilter, 'Отфильтровать по цене');
createFilter(products, 'cat', 'selectCates', formFilter, 'Отфильтровать по категории товара');




formRange[0].oninput = (function(){
    valueSlider.value = slider.value;
    let valueInput = this.value;

        let resFilter = products.filter(function(item) {
            if (+item.price == +valueInput){
        
                divProducts.innerHTML = `
                <div class="product">
                
                <h3 class="productTitle"> Art:${item.art} ${item.title} ${item.brand} ${item.model} </h3>
                <h4 class="productPrice"> Price: ${item.currency} ${item.price} </h4>
                <div class="productFoto">
                    <img src="img/${item.foto}" alt=""/>
                </div>  
        
            </div>`;
                
            };
        });
});
        






//Создаем массив по фильтру
let filtSelect = doc.querySelectorAll('select');
for (let i = 0; i < filtSelect.length; i++){
    filtSelect[i].oninput = function(){
       let filtKey = this.value;
       console.log (filtKey);
    let filtBrand = products.filter(function(user){
        return user.brand === filtKey;});
    console.log (filtBrand);
        
    //очмстка перед выведением фильтра 
    let findСhild = doc.getElementsByClassName('product');
   
        while (findСhild[0]) {
            findСhild[0].parentNode.removeChild(findСhild[0]);
    };
    
    //вывод отфильтрованного по бренду
    prodHtml = filtBrand.map(function(prod) {
         let prodHtml = `
        <div class="product">
          
        <h3 class="productTitle"> Art:${prod.art} ${prod.title} ${prod.brand} ${prod.model} </h3>
        <h4 class="productPrice"> Price: ${prod.currency} ${prod.price} </h4>
        <div class="productFoto">
            <img src="img/${prod.foto}" alt=""/>
        </div>  

     </div> `;
       
        return prodHtml;
    });
    
    prodHtml.forEach(function(htmlEl) {

         divProducts.insertAdjacentHTML('beforeend', htmlEl);
    });
    
        
    let filtPrice = products.filter(function(user){
        return user.price == filtKey;});
        console.log (filtPrice);
        
        
        //вывод отфильтрованного по цене
    prodHtml = filtPrice.map(function(prod) {
        let prodHtml = `
        <div class="product">
          
        <h3 class="productTitle"> Art:${prod.art} ${prod.title} ${prod.brand} ${prod.model} </h3>
        <h4 class="productPrice"> Price: ${prod.currency} ${prod.price} </h4>
        <div class="productFoto">
            <img src="img/${prod.foto}" alt=""/>
        </div>  

     </div>`;
        return prodHtml;
    });
   
    prodHtml.forEach(function(htmlEl) {
        divProducts.insertAdjacentHTML('beforeend', htmlEl);
    });
        
    let filtCat = products.filter(function(user){
        return user.cat == filtKey;});      
        console.log (filtCat);  
        //вывод отфильтрованного по категории
    prodHtml = filtCat.map(function(prod) {
        let prodHtml = `
        <div class="product">
          
        <h3 class="productTitle"> Art:${prod.art} ${prod.title} ${prod.brand} ${prod.model} </h3>
        <h4 class="productPrice"> Price: ${prod.currency} ${prod.price} </h4>
        <div class="productFoto">
            <img src="img/${prod.foto}" alt=""/>
        </div>  

     </div>`;
        return prodHtml;
    });
    
    prodHtml.forEach(function(htmlEl) {
        divProducts.insertAdjacentHTML('beforeend', htmlEl);
    });
        
        
           
  }
  
}




function createFilter(arr, key, selectName, form, selectTitle) {
    let items = getUniq(key, arr);
    let selectItems = createSelect(items, selectName, selectTitle);
    form.insertAdjacentHTML('beforeend', selectItems);
}
function createSelect(optionsArr, selectName, selectTitle) {
    let optionsItems = '';
    optionsArr.forEach(function(item) {
        optionsItems += `<option value="${item}">${item}</option>`;
    });
    let select = `
    <p class="selectTitle">${selectTitle}</p>    
    <select name="${selectName}">
            ${optionsItems}    
        </select>
        `;
    return select;
}
function getUniq(key, sourceArr) {
    let arr = [];
    sourceArr.forEach(function(item) {
        if (arr.indexOf(item[key]) === -1) {
            arr.push(item[key]);
        }
    });
    return arr
}
// функция к-я послe создания массива по фильтру:
//1- очистит - заменой переменной list
// вызовет метод по дабавлению листа из тофильрованного массива
