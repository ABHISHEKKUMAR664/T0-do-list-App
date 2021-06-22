const inputBox = document.querySelector(".inputField input");
const addButton = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist");
const deleteAllButton = document.querySelector(".footer button");


inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addButton.classList.add("active");
    } else {
        addButton.classList.remove("active");

    }
}

showTask()

addButton.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask()
}


function showTask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
     //passing the length value in pendingNumber
    const pendingNumb = document.querySelector(".pendingNumber");
    pendingNumb.textContent = listArr.length;
    
    // if (listArr.length > 0) {
        // deleteAllButton.classList.add("active")
    // } else {
        // deleteAllButton.classList.remove("active");
    // }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        //adding new li tag inside ul tag
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index});"><i class="fa fa-trash trash-icon" aria-hidden="true"></i></span></li>`
    });

    todoList.innerHTML = newLiTag;
    inputBox.value = "";//leave the input field blank when once task is added
}


function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);//transmitting JSON String into js obj
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));

    showTask();
}


deleteAllButton.onclick = () => {
    listArr = [];
    //after deleting all task,again updating the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));

    showTask();
}