let form = document.getElementById("form");
let listContainer = document.querySelector(".list-container");
let input = document.getElementById("input");
let clearAll = document.getElementById("clearAll");
let alert = document.querySelector(".alert");
let submitBtn = document.querySelector(".submit-btn");

let editFlag = false;
let editID = "";


window.addEventListener("DOMContentLoaded", setupItems);

form.addEventListener("submit",function(e){
    e.preventDefault();
    let id = new Date().getTime().toString();
    let inputValue = input.value;
    if(inputValue !== "" && !editFlag){
        let element = `<div class="item" id = ${id}>
        <p>${inputValue}</p>
        <div class="actions">
            <button id="edit" class="btn "><i class="fa-solid fa-pen-to-square edit-btn"></i></button>
            <button id="delete" class="btn "><i class="fa-solid fa-trash delete-btn"></i></button>
        </div>
    </div>`;
    listContainer.innerHTML += element; 
    displayAlert("Item added","success");
    clearAll.style.display = "block";
    addToLocalStorage(id,inputValue);
    setBackToDefult();
        
    }else if(inputValue !== "" && editFlag){
        let item = document.getElementById(editID);
        item.querySelector('p').textContent = inputValue;
        displayAlert("value changed","success");
        editLocalStorage(editID,inputValue);
        setBackToDefult();
    }
    else{
        displayAlert("Please enter value","danger");
    }
})
clearAll.addEventListener('click',function(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild)
    }
    displayAlert("Empty List","danger")
    clearAll.style.display = "none";
    setBackToDefult();
})


listContainer.addEventListener('click',function(e){
   if(e.target.classList.contains("edit-btn")){
    let parent = e.target.closest('.item');
    input.value = parent.querySelector('p').textContent;
    editID = parent.getAttribute("id");
    editFlag = true;
    submitBtn.textContent = "Edit";
   }
   if(e.target.classList.contains("delete-btn")){
    let parent = e.target.closest('.item');
    let parentId = parent.getAttribute('id');
    // let parentId = parent.dataset.id;
    // console.log(parentId)
    deleteLocalStorage(parentId);
    parent.remove();
    if(listContainer.childElementCount == 0){
        clearAll.style.display = "none";
    }
    displayAlert("Item Removed","danger");
    
   }
})







function displayAlert(text,action){
    alert.classList.add(`alert-${action}`);
    alert.textContent = text;
    setTimeout(function(){
        alert.classList.remove(`alert-${action}`);
        alert.textContent ="";
    },2000);

}


function setBackToDefult(){
    input.value = "";
    editID = "";
    editFlag = false;
    submitBtn.textContent = "submit";
}

function addToLocalStorage(id,value){
    let grocery = {id,value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    items.map(function(item){
        if(item.id == id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));

}


function deleteLocalStorage(id){
    let items = getLocalStorage();
   items = items.filter(function(item){
        if(item.id !== id){
            console.log(item.value);
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}


function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }

  function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(item => {
            createItem(item.id,item.value);
        });
        
    }

  }

  function createItem(id,value){
    let element = `<div class="item" id = ${id}>
    <p>${value}</p>
    <div class="actions">
        <button id="edit" class="btn "><i class="fa-solid fa-pen-to-square edit-btn"></i></button>
        <button id="delete" class="btn "><i class="fa-solid fa-trash delete-btn"></i></button>
    </div>
</div>`;
listContainer.innerHTML += element; 
clearAll.style.display = "block";

  }