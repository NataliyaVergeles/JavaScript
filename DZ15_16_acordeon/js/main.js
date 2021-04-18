let doc = document;
let list = [
    {
        title: 'Title1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.'
    },
    {
        title: 'Title2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.'
    },
    {
        title: 'Title3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, a.'
    },
];

let ulList = doc.querySelector('.list');
let listItem = '';

for (let j = 0; j < list.length; j++){
    listItem = `
    <li class ="list__item">
        <h2 class="title">` + list[j].title + `</h2> 
        <p class="content">` + list[j].content + 
        `</p>
    </li>
`;
ulList.innerHTML += listItem;
}


let listItems = doc.querySelectorAll('.list__item');
console.log (listItems);
for (let i = 0; i < listItems.length; i++) {
       
    listItems[i].onclick = function() {
        let content = this.querySelector('.content');
        content.classList.toggle('.content');
       
            if (content!==listItems[i]){
                content.classList.toggle('content_active'); 
            }

           
        
    } 
             

}



