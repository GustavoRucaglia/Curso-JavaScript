;(function(){
 "use strict"

 //armazenar o dom em variavel
 const inputNewItem = document.querySelector("#item-input")
 const todoAddForm = document.querySelector("#todo-add")
 const ulTodoList = document.querySelector("#todo-list")
 const liList = ulTodoList.getElementsByTagName("li")

 let arrTask = getSaveData()
 

 //functions

 function getSaveData(){
    let taskData = localStorage.getItem("tasks")
    taskData = JSON.parse(taskData)

    return taskData ? taskData : 
    [
        {
            name: "task 1",
            creatAt: Date.now(),
            completed: false
        }
    ]
 }

 function setNewData(){
    localStorage.setItem("tasks", JSON.stringify(arrTask))
 }
setNewData()
 function eventLi(li){

    /*
    li.addEventListener("click", function(){
        console.log(this)
        console.log(this.textContent)
        console.log(this.innerHTML)
        console.log(this.outerHTML)
   
    }) */
 }

 function generateLiTask(obj){
    const li = document.createElement("li")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const iedit = document.createElement("i")
    const idelete = document.createElement("i")
    const iCheck = document.createElement("i")
    const containerEdit = document.createElement("div")
    const inputEdit = document.createElement("input")
    const editButton = document.createElement("button")
    const cancelButton = document.createElement("button")
    
    button.setAttribute("data-action", "checkButton")
    cancelButton.setAttribute("data-action", "cancelButton")
    cancelButton.className = "cancelButton"
    cancelButton.textContent = "Cancel"
    editButton.setAttribute("data-action", "containerEditButton")
    editButton.className = "editButton"
    editButton.textContent = "Edit"
    inputEdit.setAttribute("type", "text")
    inputEdit.className = "editInput"
    containerEdit.className = "editContainer"
    button.className = "button-check"
    iCheck.className = "fas fa-check displayNone"
    iCheck.setAttribute("data-action", "checkButton")
    idelete.setAttribute("data-action", "deleteButton")
    idelete.className = "fas fa-trash-alt"
    iedit.setAttribute("data-action", "editButton")
    iedit.className = "fas fa-edit"
    li.className = "todo-item"
    p.className = "task-name"
    p.textContent = obj.name
    inputEdit.value = obj.name

    console.log(containerEdit)
    containerEdit.appendChild(cancelButton)
    containerEdit.appendChild(editButton)
    containerEdit.appendChild(inputEdit)
    button.appendChild(iCheck)
    li.appendChild(button)
    li.appendChild(p)
    li.appendChild(iedit)
    li.appendChild(idelete)
    li.appendChild(containerEdit)
    //ulTodoList.appendChild(li)

     return li
 }

 function renderTask(){
    ulTodoList.innerHTML = ""
    arrTask.forEach(task => {
    ulTodoList.appendChild(generateLiTask(task))
      });
 }
 function addtask(task){
   
    arrTask.push( {
        name: task,
        creatAt: Date.now(),
        completed: false
    })
    setNewData()
 }
 function adicionaLI(e){
    e.preventDefault()
    if(inputNewItem.value == ""){
        inputNewItem.focus()
        return window.alert("digite algo")
    }else{
        addtask(inputNewItem.value)
        renderTask()
        inputNewItem.value = ""
        inputNewItem.focus()
    }
 }
 function clickedUl(e){
    const dataAction = e.target.getAttribute("data-action")

    if(!dataAction) return

    let currentLi = e.target
    while(currentLi.nodeName !== "LI"){
        currentLi = currentLi.parentElement
    }
    const currentLiIndex = [...liList].indexOf(currentLi)

    const action = {
        editButton: function(){
            const editContainer = currentLi.querySelector(".editContainer");
            
            [...ulTodoList.querySelectorAll(".editContainer")].forEach(container => {
                container.removeAttribute("style")
                console.log("PO")
            })
            editContainer.style.display= "flex";
            currentLi.querySelector(".editInput").focus()
        },
        deleteButton: function(){
            arrTask.splice(currentLiIndex, 1)
            renderTask()
            setNewData()
        },
        containerEditButton: function(){
            const val = currentLi.querySelector(".editInput").value
            arrTask[currentLiIndex].name = val
            renderTask()
            setNewData()
        },
        cancelButton: function(){
            currentLi.querySelector(".editContainer").removeAttribute("style")
            currentLi.querySelector(".editInput").value =  arrTask[currentLiIndex].name

        },
        checkButton: function(){
            arrTask[currentLiIndex].completed = !arrTask[currentLiIndex].completed

            if(arrTask[currentLiIndex].completed){
                currentLi.querySelector(".fa-check").classList.remove("displayNone")
            } else{
                currentLi.querySelector(".fa-check").classList.add("displayNone")
            }
            setNewData()
        }
    }
    if(action[dataAction]){
        action[dataAction]()
    }
}
 ulTodoList.addEventListener("click", clickedUl)
 
 todoAddForm.addEventListener("submit", adicionaLI);
 renderTask()

 document.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        const item = event.target.parentElement;
        const itemId = item.getAttribute('data-id');
        const completedList = document.getElementById('completed-tasks');
        if (event.target.checked) {
            completedList.appendChild(item);
        } else {
            const todoList = document.getElementById('todo-list');
            todoList.appendChild(item);
        }
    }
});

})()