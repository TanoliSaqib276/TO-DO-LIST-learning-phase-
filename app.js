let itemList = document.getElementById("list-item");

let orderedList = document.getElementById("itemInList");


function add() {

    let li = document.createElement('li');
    let txt = document.createElement('h3');
    let inputTxt = document.createTextNode(itemList.value);
    txt.appendChild(inputTxt);
    li.appendChild(txt);
    orderedList.appendChild(li);// IN WHOLE SCENRIO ONLY LI WILL BE APPEND IN UL 
    itemList.value = '';
    //for Delete button
    let delbtn = document.createElement('button');
    let btnTxt = document.createTextNode('DELETE');
    delbtn.appendChild(btnTxt);
    delbtn.setAttribute('class', 'btn');
    delbtn.setAttribute('onclick', 'delDom(this)');
    li.appendChild(delbtn)
    // orderedList.appendChild(delbtn); // WRONG STEP
    //For Edit btn
    let editbtn = document.createElement('button');
    let edtbtnTxt = document.createTextNode('EDIT');
    editbtn.appendChild(edtbtnTxt);
    editbtn.setAttribute('class', 'btn')
    editbtn.setAttribute('onclick', 'editDom(this)')
    // orderedList.appendChild(editbtn) //WRONG STEP
    li.appendChild(editbtn)

}
function delAll() {
    
    orderedList.innerHTML = '';
}

function delDom(delElement){
    let remList = delElement.parentNode
    
    remList.remove()
    
}

let addBtn = document.getElementById('add');

function editDom(editElement){
    // console.log(editElement);

    // let toEdit = editElement.parentNode.firstChild.innerHTML;

    // console.log(toEdit);

    // let newTxt = prompt('write updated txt')

    // editElement.parentNode.firstChild.innerHTML = newTxt

    
    let editedText = editElement.parentNode.firstChild.innerHTML;
    
    itemList.value = editedText;
    addBtn.innerHTML = 'Update';
    addBtn.setAttribute('onclick','updateItem(this)');
    
}

function updateItem(updateElement){

    console.log(updateElement,itemList.value);

    let parentToFind = orderedList.childNodes;

    console.log(parentToFind);

    // orderedList.childNodes[1].childNodes[0].innerHTML = itemList.value;

    // addBtn.innerHTML = 'ADD';

    // itemList.value = '';


}




