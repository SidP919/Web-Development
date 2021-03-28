const addItemText = document.getElementById('toDoItem');
const addItemBtn = document.getElementById('add-item-btn');
var toDoList = document.getElementById('item-list');

console.log('Our variables: \n addItemText: ' + addItemText + 
    '\n addItemBtn: ' + addItemBtn + 
    '\n toDoList: ' + toDoList + '\n');

addItemText.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        addItem(e);
    }
});

function addItem(e){

    if(addItemBtn.childNodes.length>3){
        console.log(addItemBtn.childNodes[3].innerText);
        addItemBtn.removeChild(addItemBtn.childNodes[3]);
    }

    const inputText = ''+addItemText.value;
    console.log('inputText: ' + inputText);

    if(inputText===''){
        alert('Enter a valid list item.');
        return;
    }

    const listItem = document.getElementById('item-div');
    
    const itemText = document.getElementsByClassName('item-text');
    itemText[itemText.length-1].innerText = inputText;
    console.log('itemText: ' + itemText[itemText.length-1].innerHTML);
    
    const li = document.createElement('li');
    li.innerHTML = listItem.innerHTML;
    // console.log('newly added list item: ' + li.innerHTML);

    toDoList.appendChild(li);
    addItemText.value = "";

    console.log('Updated To-Do List: \n' + toDoList.innerHTML);
}

toDoList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log('A Button is Clicked!')
        if(event.target.innerText === 'Delete'){
            console.log('Delete is clicked!');
            const deleteBtn = event.target;
            console.log('Item to be deleted: \n' + deleteBtn.parentElement.parentElement.innerHTML);
            const toBeDelItem = deleteBtn.parentElement.parentElement;
            toBeDelItem.parentElement.removeChild(toBeDelItem);
            console.log('Updated To-Do List: \n' + toDoList.innerHTML);
            (deleteBtn)?console.log('Item has been deleted Successfully.'):console.log('Some Error Occured!');
        }

        if(event.target.innerText === 'Edit'){
            console.log('Edit is Clicked!');
            const editBtn = event.target;
            console.log('Item to be Edited: \n' + editBtn.parentElement.parentElement.innerHTML);
            const textHolder = editBtn.parentElement.parentElement.childNodes[1].textContent;
            console.log('textHolder: ' + textHolder);
            addItemText.value = textHolder;
            console.log('addItem.innerText: ' + addItemText.value);
            const updateBtn = document.createElement('p');
            updateBtn.style.color = 'white';
            updateBtn.style.display = 'inline-block';
            updateBtn.innerText = 'Update';
            addItemBtn.appendChild(updateBtn);
            const toBeUpdateItem = editBtn.parentElement.parentElement;
            toBeUpdateItem.parentElement.removeChild(toBeUpdateItem);
        }
    }
  }, false);
