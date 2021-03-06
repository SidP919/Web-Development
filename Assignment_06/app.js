//Main Variables' Declaration
const addItemText = document.getElementById('toDoItem');
const addItemBtn = document.getElementById('add-item-btn');
var toDoList = document.getElementById('item-list');

console.log('Our Main variables: \n addItemText: ' + addItemText + 
    '\n addItemBtn: ' + addItemBtn + 
    '\n toDoList: ' + toDoList + '\n');

//To add item to the List on an enter key press event also.
addItemText.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        addItem(e);
    }
});

//Add Item Function
function addItem(e){

    const inputText = ''+addItemText.value;
    console.log('inputText: ' + inputText);

    //Validate if the addItemText input box is empty or not before adding a list item
    if(inputText===''){
        alert('Enter a valid list item.');
        return;
    }

    //get Sample item-div element
    const listItem = document.getElementById('item-div');
    
    //get last <p> element(which is inside our sample item-div element) having ClassName item-text 
    //and assign inputText value to it
    const itemText = document.getElementsByClassName('item-text');
    itemText[itemText.length-1].innerText = inputText;
    console.log('itemText: ' + itemText[itemText.length-1].innerHTML);
    
    //create parent element <li> for our item-div element
    const li = document.createElement('li');
    //put our item-div element inside the <li> element
    li.innerHTML = listItem.innerHTML;

    //add our modified <li> element to our toDoList
    toDoList.appendChild(li);
    
    //empty the addItemText input box after adding the list item to the list
    addItemText.value = "";

    //empty the sample div's <p> element again 
    //so it doesn't occupy unnecessary space after addition of list item.
    itemText[itemText.length-1].innerText = "";

    console.log('Updated To-Do List: \n' + toDoList.innerHTML);

    //removing 'Update' from the addItemBtn after successful edit/updation
    if(addItemBtn.childNodes.length>3){
        console.log(addItemBtn.childNodes[3].innerText);
        addItemBtn.removeChild(addItemBtn.childNodes[3]);
    }
}

//EventListener for Edit and Delete Function
toDoList.addEventListener('click', function(event) {
    //check if edit or delete button is clicked
    if (event.target.tagName === 'BUTTON' || event.target.parentElement.tagName === 'BUTTON') {
        let targetElement = event.target;
        console.log('A Button is Clicked!');
        //check if image in the button is clicked
        if(event.target.parentElement.tagName === 'BUTTON'){
            console.log('Image is clicked!');
            targetElement = event.target.parentElement;
            console.log('targetElement: ');
            console.log(targetElement);
        }
        //Delete functionality code
        if(targetElement.innerText === 'Delete'){
            console.log('Delete is clicked!');
            const deleteBtn = targetElement;
            console.log('Item to be deleted: \n' + deleteBtn.parentElement.parentElement.innerHTML);
            const toBeDelItem = deleteBtn.parentElement.parentElement;
            toBeDelItem.parentElement.removeChild(toBeDelItem);
            console.log('Updated To-Do List: \n' + toDoList.innerHTML);
            (deleteBtn)?console.log('Item has been deleted Successfully.'):console.log('Some Error Occured!');
        }
        //Edit functionality code
        else if(targetElement.innerText === 'Edit'){
            
            //removing extra 'Update' from the addItemBtn
            if(addItemBtn.childNodes.length>3){
                console.log(addItemBtn.childNodes[3].innerText);
                addItemBtn.removeChild(addItemBtn.childNodes[3]);
            }

            console.log('Edit is Clicked!');
            const editBtn = targetElement;
            console.log('Item to be Edited: \n' + editBtn.parentElement.parentElement.innerHTML);
            const textHolder = editBtn.parentElement.parentElement.childNodes[1].textContent;
            console.log('textHolder: ' + textHolder);
            addItemText.value = textHolder;
            console.log('addItem.innerText: ' + addItemText.value);
            addItemText.focus();
            //adding 'Update' to the addItemBtn
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
