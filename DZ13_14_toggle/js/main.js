let doc = document;
let menuActive = doc.querySelector('.menu');
let btnToggle = doc.querySelector('.toggle-menu');
let formCallback = doc.querySelector('.callback');
let btnOpenCallback = doc.querySelector('.open-callback');
let btnCloseCallback = doc.querySelector('.close-callback');
let isMenu = false;
let isOpenCallback = false;
let isCloseCallback = false;

console.log (formCallback);

btnToggle.onclick = function () {
    if (isMenu === false){
        console.log('Включаем меню');
        menuActive.className="menu active";
        isMenu = true;
    }
    else {
        console.log('Выключаем меню');
        menuActive.className="menu";
        isMenu = false;
    }
}

btnOpenCallback.onclick = function(){
    if (isOpenCallback === false){
        console.log('Включаем CAllback');
        isOpenCallback = true;
        isCloseCallback = false;
        formCallback.innerHTML =`
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
}

btnCloseCallback.onclick = function(){
    if(isCloseCallback === false){
        isCloseCallback = true;
        isOpenCallback = false;
        formCallback.innerHTML =`
        <form class="callback" action="" method="GET">
            
        </form>
        `;
    }
}
