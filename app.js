let itemList = document.getElementById("list-item");
let orderedList = document.getElementById("itemInList");
function add(){
    
    let li = document.createElement('li');
    let txt = document.createElement('h3');
    let inputTxt = document.createTextNode(itemList.value);
    txt.appendChild(inputTxt);
    li.appendChild(txt);
    orderedList.appendChild(li);
//for Delete button
    let delbtn = document.createElement('button');
    let btnTxt = document.createTextNode('DELETE');
    delbtn.appendChild(btnTxt);
    delbtn.setAttribute('class','btn')
    orderedList.appendChild(delbtn);
//For Edit btn
    let editbtn = document.createElement('button');
    let edtbtnTxt = document.createTextNode('EDIT');
    editbtn.appendChild(edtbtnTxt);
    editbtn.setAttribute('class','btn')
    orderedList.appendChild(editbtn)
    
}
// function delAll(){
//     let trgToRemove = document.getElementById('itemInList').childNodes[2];
//     console.log(trgToRemove)
// }
function edt(){}