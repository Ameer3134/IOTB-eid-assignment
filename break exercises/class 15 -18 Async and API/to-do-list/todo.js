const inputBox = document.getElementById ("input-box")


let listContainer = document.getElementById ("list-container")




function addTask() {
    if (inputBox.value === "") {
        alert("Please input a task!")
    }
     else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }


    inputBox.value = "  "
    

}

deleteTask.addEventListener("click", function() {
     
listContainer.remove()


     
})