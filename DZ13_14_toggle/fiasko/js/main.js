let doc = document;
let menuActive = doc.querySelector('.menu');
let btnToggle = doc.querySelector('.toggle-menu');
let formCallback = doc.querySelector('.callback');
let btnOpenCallback = doc.querySelector('.open-callback');
let btnCloseCallback = '';
let isMenu = false;



console.log (formCallback);


btnToggle.onclick = function () {
    if (isMenu === false){
        menuActive.className="menu active";
        isMenu = true;
    }
    else {
        menuActive.className="menu";
        isMenu = false;
    }
}

btnOpenCallback.onclick = function(){
        
        formCallback.innerHTML +=`
        <div class="form-wrap">
            <label>
                <input type="text" name="name" required placeholder="Имя ">
            </label>
            <label>
                <input type="text" name="phone" required placeholder="Телефон">
            </label>
            <button class="close-callback" input type="submit">ОК</button>

        </div>
        `;
    
}

btnCloseCallback.onclick = function(){
         
        formCallback.innerHTML =`
        <form class="callback" action="" method="GET">
            
        </form>
        `;
    
}
