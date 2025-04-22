let listContainer = document.getElementById("list-container")

let inputBox = document.getElementById("input-box")

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task")
    } else {
        let task = document.createElement("li")
        task.textContent = inputBox.value
        listContainer.appendChild(task)
       

        let span = document.createElement("span")
        span.textContent = "\u00d7"
        task.appendChild(span)
    } 
    inputBox.value = ""
    savedata()
}

listContainer.addEventListener("click", (el) => {
    if (el.target.tagName === "LI") {
        el.target.classList.toggle("checked")
        savedata()
    } else if (el.target.tagName === "SPAN") {
        el.target.parentElement.remove()
        savedata()
    }

}
)

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()