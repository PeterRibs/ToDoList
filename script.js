const createItem = document.createElement('li');
const inputItem = document.querySelector('input');
const item = document.querySelector('li');
const itemsList = document.querySelector('ul');

const addItem = () =>{
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.appendChild(document.createTextNode(inputItem.value + ' '));
    btn.appendChild(document.createTextNode("delete"))
    li.appendChild(btn);
    itemsList.appendChild(li);
    inputItem.value = ""
}

const enterBtnAdd = (event) =>{
    if (inputItem.value.length > 0) {
        addItem()
    }
}

const enterKeypressAdd = (event) => {
    if(inputItem.value.length > 0 && event.keyCode === 13){
        addItem()
    }
}

inputItem.addEventListener('keypress', enterKeypressAdd)

const itemTask = (item) => {
    if (item.target.tagName === "LI"){
        item.target.classList.toggle("checking"); // check item
    } else {
        item.target.parentNode.remove(item.target);
    }
}

itemsList.addEventListener("click", itemTask);
